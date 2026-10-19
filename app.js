import {
  defaultModes,
  defaultRunFilters,
  defaultCostBrackets,
  defaultSortModes
} from "./src/app-config.js?v=d0813eb3fbc5";
import { getDomElements } from "./src/dom-elements.js?v=f9e4a8efa1e8";
import {
  configureLocalization,
  hydrateLanguagePreference,
  hydrateThemePreference,
  setUiLanguage,
  setUiTheme,
  renderLanguageToggle,
  renderThemeToggle,
  applyLocalizedDocumentText,
  normalizeLanguage,
  t,
  getLocalizedTextForLanguage,
  getModeDisplayLabel,
  getRoleDisplayLabel,
  getAttributeDisplayLabel,
  getCharacterDisplayName,
  getWeaponDisplayName,
  getBangbooDisplayName,
  getLocalizedSeasonStatusLabel,
  getLocalizedSubmissionStatus,
  formatSubmissionApprover,
  getLocalizedReportStatus,
  getRunFilterLabel,
  getCostBracketLabel,
  getSortModeLabel,
  getModerationTabLabel,
  renderStaticOptions
} from "./src/localization.js?v=2ebc8c640151";
import {
  configureRuntime,
  showModal,
  closeModal,
  findSeasonById,
  findTargetById,
  bootstrapFromServer,
  refreshFromServerIfChanged,
  ensureApprovedRunsForTarget,
  persistDatabase,
  persistRotation,
  archiveRotation,
  purgeRotation,
  apiFetch,
  getApprovedRunsRemoteState,
  startAutoRefresh,
  handleVisibilityChange,
  handleWindowFocus,
  isModalOpen,
  getStorageItem,
  setStorageItem,
  removeSubmissionFromStore,
  findSubmissionStatus,
  findSubmissionById,
  resolveBangbooName,
  formatDateDisplay,
  formatDateTimeDisplay,
  showToast,
  showToastKey,
  getLocalizedFallbackMessage,
  clearRemoteSummaryCache,
  clearRemoteSubmissionCache,
  clearMobileArchiveCache,
  clearRemoteModerationCache,
  currentSnapshotSignature
} from "./src/runtime.js?v=b563b0c3de61";
import { clone } from "./src/utils.js?v=18014dd057de";
import { COST_MODEL_STORAGE_KEY, getEffectiveCostModel, normalizeCostModel } from "./src/cost-policy.js?v=c980ee9b1904";
import {
  configureDataModel,
  buildSeedDatabase,
  createSubmissionDraft,
  normalizeSubmissionStore,
  buildRoster,
  buildAssetMaps,
  getRoomDisplaySubtitle
} from "./src/data-model.js?v=c823d4a737ac";
import { createAuthFeature } from "./src/features/auth.js?v=26ee32057a29";
import { createHallRecognitionFeature } from "./src/features/hall-recognition.js?v=05d3f3a1211e";
import { createArchiveFeature } from "./src/features/archive.js?v=c16b1ac44ab8";
import { createPageShellFeature } from "./src/features/page-shell.js?v=81315746660d";
import { createMobileFeature } from "./src/features/mobile.js?v=ba765889bb9a";
import {
  configureRenderHelpers,
  labelForSubmissionStatus
} from "./src/render-helpers.js?v=e7925a615881";

(function () {

  function normalizePrimaryAgentId(candidate, team) {
    const normalizedCandidate = String(candidate || "").trim();
    if (normalizedCandidate && team.some((unit) => unit.agentId === normalizedCandidate)) {
      return normalizedCandidate;
    }
    return team.find((unit) => unit.agentId)?.agentId || "";
  }

  const referenceSeed = window.ZZZSeedData || {};
  const rotationSeed = window.ZZZRotationDatabaseSeed || {};
  const assetManifest = window.ZZZAssetManifest || {};
  const roster = buildRoster(referenceSeed);
  const assetMaps = buildAssetMaps(assetManifest);
  configureDataModel({
    referenceSeed,
    roster,
    assetMaps,
    t,
    normalizeLanguage,
    getLocalizedTextForLanguage,
    getModeDisplayLabel,
    formatDateDisplay,
    normalizePrimaryAgentId
  });
  configureRenderHelpers({
    assetMaps,
    t,
    getRoleDisplayLabel,
    getAttributeDisplayLabel,
    getLocalizedSubmissionStatus
  });
  const seedDatabase = buildSeedDatabase(rotationSeed, referenceSeed);
  configureDataModel({ seedDatabase });
  const seedSubmissions = normalizeSubmissionStore(referenceSeed.defaultState || {}, seedDatabase);
  const initialDatabase = clone(seedDatabase);

  const state = {
    isModerator: false,
    isOwner: false,
    currentUser: null,
    auth: {
      setupRequired: false,
      inviteKeys: [],
      users: [],
      bootstrapped: false
    },
    database: initialDatabase,
    submissions: clone(seedSubmissions),
    remoteSubmissions: {
      approvedTargets: {}
    },
    remoteMobileArchive: {
      summaries: {},
      groups: {}
    },
    remoteSummaries: {
      fullScoreCost: {},
      playerSubmissions: {},
      playerDpsMap: {},
      metaReport: {},
      hallOfFame: {},
      hallRecognition: {},
      leaderboard: {}
    },
    remoteModeration: {
      tabs: {},
      counts: {},
      controllers: {},
      requestSequence: 0
    },
    uiLanguage: "en",
    uiTheme: "dark",
    costModel: "original",
    mobilePreferencesOpen: false,
    page: "archive",
    filters: {
      mode: initialDatabase.modes[0]?.label || defaultModes[0].label,
      seasonId: "",
      runFilter: roster.runFilters[0]?.id || defaultRunFilters[0].id,
      costBracketId: roster.costBrackets[0]?.id || defaultCostBrackets[0].id,
      sortMode: roster.sortModes[0]?.id || defaultSortModes[0].id,
      agentPanelExpanded: false,
      weaponPanelExpanded: false,
      agentSelectionMode: "include",
      weaponSelectionMode: "include",
      agentSearch: "",
      agentIds: [],
      excludedAgentIds: [],
      weaponSearch: "",
      weaponIds: [],
      excludedWeaponIds: [],
      roleFilters: [],
      attributeFilters: [],
      weaponRoleFilters: [],
      weaponRankFilters: [],
      roomIdsBySeason: {}
    },
    submissionFilters: {
      agentSearch: "",
      roleFilters: [],
      attributeFilters: [],
      weaponSearch: "",
      weaponRoleFilters: [],
      weaponRanks: [],
      bangbooSearch: ""
    },
    submissionDraft: createSubmissionDraft(initialDatabase.modes[0]?.label || defaultModes[0].label),
    pendingSubmissionPreset: null,
    reportDraft: {
      submissionId: ""
    },
    reportResolutionDrafts: {},
    reports: [],
    moderationTab: "pending",
    moderationFilters: {
      mode: "",
      seasonId: "",
      targetId: "",
      search: ""
    },
    moderationSearchDraft: "",
    moderationPageSize: 50,
    leaderboard: {
      type: "lowest-limited",
      limit: 10,
      costBracketId: roster.costBrackets[0]?.id || defaultCostBrackets[0].id,
      maxStandardCost: "unlimited",
      fullScoreOnly: false
    },
    fullScoreCost: {
      mode: initialDatabase.modes.some((mode) => mode.label === "Deadly Assault")
        ? "Deadly Assault"
        : (initialDatabase.modes.find((mode) => mode.label === "Shiyu Defense")?.label || "Deadly Assault"),
      seasonId: "",
      maxStandardCost: "10",
      objective: "lowest-limited-full-score"
    },
    playerSubmissions: {
      mode: "Deadly Assault",
      query: "",
      selectedAuthor: "",
      pageSize: 10,
      page: 1,
      activeSuggestionIndex: -1
    },
    metaReport: {
      tab: "character-usage",
      mode: initialDatabase.modes[0]?.label || defaultModes[0].label,
      seasonId: "",
      roomIdsBySeason: {},
      costBracketId: roster.costBrackets[0]?.id || defaultCostBrackets[0].id,
      trendCharacterId: "",
      trendMetricId: "kill-full-score",
      trendSeasonLimit: 5,
      trendCharacterPickerOpen: false,
      playerDpsMap: {
        profile: "dps",
        scope: "combined",
        window: "all",
        colorMode: "position",
        activeRequestKey: "",
        selectedPlayerId: "",
        expandedStackId: "",
        exportState: "idle",
        exportError: ""
      }
    },
    hallOfFame: {
      characterId: "",
      mode: initialDatabase.modes[0]?.label || defaultModes[0].label,
      seasonId: "",
      crownScope: "rotation",
      category: "all",
      sortBy: "total",
      limit: 10
    },
    overallHallOfFame: {
      mode: initialDatabase.modes[0]?.label || defaultModes[0].label,
      seasonId: "",
      crownScope: "room",
      category: "all",
      sortBy: "total",
      limit: 10
    },
    expandedRunGroups: {},
    expandedRunCards: {},
    mobile: {
      enabled: false,
      tab: "archive",
      filterSheetOpen: false
    },
    autoRefresh: {
      timerId: 0,
      inFlight: false,
      signature: "",
      serverRevision: "",
      appRevision: "",
      databaseRevision: "",
      publicRevision: "",
      targetRevisions: {},
      stateVersionEtag: "",
      failureCount: 0,
      lastSuccessfulAt: 0,
      pendingPeerVersion: null,
      coordinator: null
    }
  };

  configureDataModel({ state });

  const elements = getDomElements();

  const shared = {
    state,
    elements,
    roster,
    assetMaps,
    t,
    getModeDisplayLabel,
    getRoleDisplayLabel,
    getAttributeDisplayLabel,
    getRunFilterLabel,
    getCostBracketLabel,
    getSortModeLabel,
    getModerationTabLabel,
    getLocalizedSeasonStatusLabel,
    getLocalizedSubmissionStatus,
    getLocalizedReportStatus,
    getCharacterDisplayName,
    getWeaponDisplayName,
    getBangbooDisplayName,
    getRoomDisplaySubtitle,
    labelForSubmissionStatus,
    formatSubmissionApprover,
    formatDateDisplay,
    formatDateTimeDisplay,
    normalizeLanguage,
    normalizePrimaryAgentId,
    findSeasonById,
    findTargetById,
    findSubmissionStatus,
    findSubmissionById,
    removeSubmissionFromStore,
    resolveBangbooName,
    getLocalizedFallbackMessage,
    showModal,
    closeModal,
    isModalOpen,
    renderAll,
    renderStaticOptions,
    persistDatabase,
    persistRotation,
    archiveRotation,
    purgeRotation,
    bootstrapFromServer,
    refreshPlayerDpsMapRevision: refreshFromServerIfChanged,
    ensureApprovedRunsForTarget,
    apiFetch,
    getApprovedRunsRemoteState,
    getStorageItem,
    setStorageItem,
    getCostModel,
    getCostModelForSeason,
    showToastKey,
    showToast,
    clearRemoteSummaryCache,
    clearRemoteSubmissionCache,
    clearMobileArchiveCache,
    clearRemoteModerationCache
  };

  const loadedFeatures = new Map();
  const loadingFeatures = new Map();
  const lazyFeatureDefinitions = {
    admin: {
      load: () => import("./src/features/admin.js"),
      factory: "createAdminFeature"
    },
    leaderboard: {
      load: () => import("./src/features/leaderboard.js"),
      factory: "createLeaderboardFeature"
    },
    fullScoreCost: {
      dependencies: ["leaderboard"],
      load: () => import("./src/features/full-score-cost.js"),
      factory: "createFullScoreCostFeature"
    },
    playerSubmissions: {
      dependencies: ["leaderboard"],
      load: () => import("./src/features/player-submissions.js"),
      factory: "createPlayerSubmissionsFeature"
    },
    playerDpsMap: {
      load: () => import("./src/features/player-dps-map.js"),
      factory: "createPlayerDpsMapFeature"
    },
    metaReport: {
      dependencies: ["leaderboard", "playerDpsMap"],
      load: () => import("./src/features/meta-report.js"),
      factory: "createMetaReportFeature"
    },
    hallOfFame: {
      dependencies: ["leaderboard"],
      load: () => import("./src/features/hall-of-fame.js"),
      factory: "createHallOfFameFeature"
    },
    submission: {
      load: () => import("./src/features/submission.js"),
      factory: "createSubmissionFeature"
    },
    bulkImport: {
      load: () => import("./src/features/bulk-import.js"),
      factory: "createBulkImportFeature"
    },
    moderation: {
      load: () => import("./src/features/moderation.js"),
      factory: "createModerationFeature"
    }
  };

  async function ensureLazyFeature(featureName) {
    if (loadedFeatures.has(featureName)) return loadedFeatures.get(featureName);
    if (loadingFeatures.has(featureName)) return loadingFeatures.get(featureName);

    const definition = lazyFeatureDefinitions[featureName];
    if (!definition) throw new Error(`Unknown lazy feature: ${featureName}`);

    const loading = (async () => {
      for (const dependency of definition.dependencies || []) {
        await ensureLazyFeature(dependency);
      }
      const module = await definition.load();
      const createFeature = module?.[definition.factory];
      if (typeof createFeature !== "function") {
        throw new Error(`Lazy feature factory is unavailable: ${definition.factory}`);
      }
      const feature = createFeature(shared);
      loadedFeatures.set(featureName, feature);
      Object.assign(shared, feature);
      if (featureName === "playerDpsMap") {
        feature.ensurePlayerDpsMapState?.();
        if (state.isOwner) await feature.restorePlayerDpsMapSnapshot?.();
      }
      return feature;
    })();

    loadingFeatures.set(featureName, loading);
    try {
      return await loading;
    } finally {
      loadingFeatures.delete(featureName);
    }
  }

  function createLazyFeatureProxy(featureName, methodNames) {
    return Object.fromEntries(methodNames.map((methodName) => [methodName, (...args) => {
      const loadedFeature = loadedFeatures.get(featureName);
      if (loadedFeature) return loadedFeature[methodName]?.(...args);
      return ensureLazyFeature(featureName)
        .then((feature) => feature[methodName]?.(...args))
        .catch((error) => {
          handleFeatureLoadError(error);
          return undefined;
        });
    }]));
  }

  function callLoadedFeature(featureName, methodName, ...args) {
    return loadedFeatures.get(featureName)?.[methodName]?.(...args);
  }

  async function ensureFeaturesForContext(context) {
    const featureByContext = {
      leaderboard: "leaderboard",
      "full-score-cost": "fullScoreCost",
      "player-submissions": "playerSubmissions",
      "meta-report": "metaReport",
      "hall-of-fame": "hallOfFame",
      "overall-hall-of-fame": "hallOfFame",
      submit: "submission",
      moderation: "moderation",
      admin: "admin"
    };
    const featureName = featureByContext[context];
    if (featureName) await ensureLazyFeature(featureName);
  }

  function handleFeatureLoadError(error) {
    console.error("Unable to load the requested interface.", error);
    showToastKey("serverUnavailable", "serverUnavailableHelp");
  }

  Object.assign(shared, {
    ensureFeaturesForContext,
    handleFeatureLoadError
  });

  const authFeature = createAuthFeature(shared);
  Object.assign(shared, authFeature);
  const {
    renderSessionUi,
    renderAuthModalContent,
    openAuthModal,
    handleAuthFormSubmit,
    handleAuthActionClick,
    applyAuthPayload
  } = authFeature;
  const adminFeature = createLazyFeatureProxy("admin", [
    "openSeasonModal",
    "renderRoomEditors",
    "renderSeasonPresetEditor",
    "handleSeasonSave",
    "handleRoomEditorClick",
    "handleSeasonPresetEditorClick",
    "handleSeasonPresetSearchInput",
    "syncRoomLabelsForModeChange",
    "deleteSeason",
    "purgeSeason",
    "countLinkedSubmissions",
    "collectActiveAttributeValues"
  ]);
  Object.assign(shared, adminFeature);
  const {
    openSeasonModal,
    renderRoomEditors,
    renderSeasonPresetEditor,
    handleSeasonSave,
    handleRoomEditorClick,
    handleSeasonPresetEditorClick,
    handleSeasonPresetSearchInput,
    syncRoomLabelsForModeChange,
    deleteSeason,
    purgeSeason,
    countLinkedSubmissions,
    collectActiveAttributeValues
  } = adminFeature;
  const hallRecognitionFeature = createHallRecognitionFeature(shared);
  Object.assign(shared, hallRecognitionFeature);

  const archiveFeature = createArchiveFeature(shared);
  Object.assign(shared, archiveFeature);

  const pageShellFeature = createPageShellFeature(shared);
  Object.assign(shared, pageShellFeature);

  const leaderboardFeature = createLazyFeatureProxy("leaderboard", [
    "renderLeaderboardPage",
    "handleLeaderboardModeTabClick",
    "handleLeaderboardSeasonChange",
    "handleLeaderboardTypeSelectChange",
    "handleLeaderboardLimitSelectChange",
    "handleLeaderboardCostBracketChange",
    "handleLeaderboardStandardCostCapChange",
    "handleLeaderboardFullScoreOnlyChange",
    "handleLeaderboardActionClick"
  ]);
  Object.assign(shared, leaderboardFeature);

  const fullScoreCostFeature = createLazyFeatureProxy("fullScoreCost", [
    "renderFullScoreCostPage",
    "handleFullScoreCostObjectiveChange",
    "handleFullScoreCostModeChange",
    "handleFullScoreCostSeasonChange",
    "handleFullScoreCostStandardCapChange",
    "handleFullScoreCostActionClick"
  ]);
  Object.assign(shared, fullScoreCostFeature);

  const playerSubmissionsFeature = createLazyFeatureProxy("playerSubmissions", [
    "renderPlayerSubmissionsPage",
    "handlePlayerSubmissionsModeChange",
    "handlePlayerSubmissionsPageSizeChange",
    "handlePlayerSubmissionsSearchInput",
    "handlePlayerSubmissionsSearchCompositionEnd",
    "handlePlayerSubmissionsSearchKeydown",
    "handlePlayerSubmissionsSuggestionClick",
    "handlePlayerSubmissionsResultsClick",
    "openPlayerSubmissionsForAuthor"
  ]);
  Object.assign(shared, playerSubmissionsFeature);

  const metaReportFeature = createLazyFeatureProxy("metaReport", [
    "renderMetaReportPage",
    "handleMetaReportTabClick",
    "handleMetaReportModeTabClick",
    "handleMetaReportSeasonChange",
    "handleMetaReportRoomChange",
    "handleMetaReportCostBracketChange",
    "handleMetaReportTeamSortClick",
    "handleMetaReportContentChange",
    "handleMetaReportContentInput",
    "handleMetaReportContentCompositionEnd",
    "handleMetaReportContentFocusIn",
    "handleMetaReportContentKeydown"
  ]);
  Object.assign(shared, metaReportFeature);

  const hallOfFameFeature = createLazyFeatureProxy("hallOfFame", [
    "renderHallOfFamePage",
    "handleHallModeChange",
    "handleHallSeasonChange",
    "handleHallSortChange",
    "handleHallLimitChange",
    "handleHallCrownScopeChange",
    "handleHallCategorySelectChange",
    "handleHallCharacterGridClick",
    "renderOverallHallOfFamePage",
    "handleOverallHallModeChange",
    "handleOverallHallSeasonChange",
    "handleOverallHallSortChange",
    "handleOverallHallLimitChange",
    "handleOverallHallCrownScopeChange",
    "handleOverallHallCategorySelectChange"
  ]);
  Object.assign(shared, hallOfFameFeature);

  const submissionFeature = createLazyFeatureProxy("submission", [
    "getDefaultMindscapeForAgent",
    "getDefaultPhaseForWeapon",
    "getSubmissionTimeLimit",
    "updateSubmissionTimeLimit",
    "clampSubmissionTimeToLimit",
    "openSubmissionGuidelines",
    "updateSubmissionGuidelinesContinueState",
    "handleSubmissionGuidelinesAccept",
    "openSubmissionTargetChooser",
    "renderSubmissionTargetChooser",
    "handleSubmissionTargetModeSelectChange",
    "handleSubmissionTargetSeasonSelectChange",
    "handleSubmissionTargetBossSelectChange",
    "handleSubmissionTargetSubmit",
    "openReportModal",
    "openSubmissionModal",
    "openPendingSubmissionEditor",
    "resetSubmissionFormControls",
    "renderSubmissionFormChrome",
    "renderSubmissionDynamic",
    "renderSubmissionTargets",
    "renderSubmissionRoleFilters",
    "renderSubmissionBossKilledField",
    "renderSubmissionAttributeFilters",
    "renderSubmissionTargetHint",
    "renderSubmissionSelectedTeam",
    "renderSubmissionAgentGrid",
    "renderSubmissionWeaponPanel",
    "renderSubmissionBangbooGrid",
    "updateLiveCostDisplay",
    "handleSubmissionModeChange",
    "handleSubmissionTargetChange",
    "handleSubmissionTargetHintClick",
    "handleSubmissionTimeInput",
    "handleSubmissionKillStateChange",
    "handleSubmissionAgentSearchInput",
    "handleSubmissionWeaponSearchInput",
    "handleSubmissionBangbooSearchInput",
    "handleSubmissionRoleFilterClick",
    "handleSubmissionAttributeFilterClick",
    "handleSubmissionAgentGridClick",
    "handleSubmissionSelectedTeamClick",
    "handleSubmissionSelectedTeamInput",
    "handleSubmissionNumberWheel",
    "handleWeaponPanelClick",
    "handleWeaponPanelInput",
    "handleBangbooGridClick",
    "handleSubmissionSave",
    "handleReportSubmit",
    "filterCharactersForSubmission",
    "filterWeaponsForSubmission",
    "filterBangboosForSubmission",
    "getSubmissionTargets",
    "resolveSubmissionMode"
  ]);
  Object.assign(shared, submissionFeature);

  const bulkImportFeature = createLazyFeatureProxy("bulkImport", [
    "openBulkImportModal",
    "handleBulkImportFileChange",
    "handleBulkImportSubmit",
    "handleBulkImportRetry",
    "handleBulkImportCancel",
    "handleBulkImportModalClick",
    "handleBulkImportModalKeydown",
    "downloadCsvTemplate",
    "downloadTxtTemplate",
    "downloadImportResults"
  ]);
  Object.assign(shared, bulkImportFeature);
  const {
    openBulkImportModal,
    handleBulkImportFileChange,
    handleBulkImportSubmit,
    handleBulkImportRetry,
    handleBulkImportCancel,
    handleBulkImportModalClick,
    handleBulkImportModalKeydown,
    downloadCsvTemplate,
    downloadTxtTemplate,
    downloadImportResults
  } = bulkImportFeature;

  const moderationFeature = createLazyFeatureProxy("moderation", [
    "openModerationModal",
    "renderModerationTabs",
    "renderModerationContent",
    "getVisibleReports",
    "renderReportModerationContent",
    "renderReportCard",
    "renderReportTeamGrid",
    "renderQueueCard",
    "handleModerationTabClick",
    "handleModerationActionClick",
    "handleModerationContentInput",
    "handleModerationContentChange",
    "handleModerationContentKeydown",
    "handleModerationContentCompositionEnd",
    "moderateSubmission",
    "resolveReport",
    "restoreSubmission",
    "deleteSubmission"
  ]);
  Object.assign(shared, moderationFeature);
  const mobileFeature = createMobileFeature(shared);
  Object.assign(shared, mobileFeature);
  const {
    openModerationModal,
    renderModerationTabs,
    renderModerationContent,
    getVisibleReports,
    renderReportModerationContent,
    renderReportCard,
    renderReportTeamGrid,
    renderQueueCard,
    handleModerationTabClick,
    handleModerationActionClick,
    handleModerationContentInput,
    handleModerationContentChange,
    handleModerationContentKeydown,
    handleModerationContentCompositionEnd,
    moderateSubmission,
    resolveReport,
    restoreSubmission,
    deleteSubmission
  } = moderationFeature;
  const {
    hydrateMobilePreference,
    bindMobileEvents,
    renderMobileShell
  } = mobileFeature;

  const {
    getDefaultMindscapeForAgent,
    getDefaultPhaseForWeapon,
    getSubmissionTimeLimit,
    updateSubmissionTimeLimit,
    clampSubmissionTimeToLimit,
    openSubmissionGuidelines,
    updateSubmissionGuidelinesContinueState,
    handleSubmissionGuidelinesAccept,
    openSubmissionTargetChooser,
    renderSubmissionTargetChooser,
    handleSubmissionTargetModeSelectChange,
    handleSubmissionTargetSeasonSelectChange,
    handleSubmissionTargetBossSelectChange,
    handleSubmissionTargetSubmit,
    openReportModal,
    openSubmissionModal,
    openPendingSubmissionEditor,
    resetSubmissionFormControls,
    renderSubmissionFormChrome,
    renderSubmissionDynamic,
    renderSubmissionTargets,
    renderSubmissionRoleFilters,
    renderSubmissionBossKilledField,
    renderSubmissionAttributeFilters,
    renderSubmissionTargetHint,
    renderSubmissionSelectedTeam,
    renderSubmissionAgentGrid,
    renderSubmissionWeaponPanel,
    renderSubmissionBangbooGrid,
    updateLiveCostDisplay,
    handleSubmissionModeChange,
    handleSubmissionTargetChange,
    handleSubmissionTargetHintClick,
    handleSubmissionTimeInput,
    handleSubmissionKillStateChange,
    handleSubmissionAgentSearchInput,
    handleSubmissionWeaponSearchInput,
    handleSubmissionBangbooSearchInput,
    handleSubmissionRoleFilterClick,
    handleSubmissionAttributeFilterClick,
    handleSubmissionAgentGridClick,
    handleSubmissionSelectedTeamClick,
    handleSubmissionSelectedTeamInput,
    handleSubmissionNumberWheel,
    handleWeaponPanelClick,
    handleWeaponPanelInput,
    handleBangbooGridClick,
    handleSubmissionSave,
    handleReportSubmit,
    filterCharactersForSubmission,
    filterWeaponsForSubmission,
    filterBangboosForSubmission,
    getSubmissionTargets,
    resolveSubmissionMode
  } = submissionFeature;

  const {
    ensureSeasonSelection,
    ensureArchiveRoomSelection,
    renderArchiveFilters,
    renderArchiveAgentFilterPanel,
    renderArchiveWeaponFilterPanel,
    renderArchiveAgentSelectionMode,
    renderArchiveWeaponSelectionMode,
    renderModeTabs,
    renderArchiveRunFilterSelect,
    renderSeasonSelect,
    renderArchiveRoleFilters,
    renderArchiveAttributeFilters,
    renderArchiveSelectedAgents,
    renderArchiveAgentGrid,
    renderArchiveWeaponRoleFilters,
    renderArchiveWeaponRankFilters,
    renderArchiveSelectedWeapons,
    renderArchiveWeaponGrid,
    renderArchiveList,
    renderSeasonRoomTabs,
    renderRoomCard,
    buildAgentRunGroups,
    getGroupingAgentIds,
    compareAgentRunGroups,
    renderAgentRunGroup,
    formatEntryCount,
    buildRunGroupKey,
    isRunGroupExpanded,
    isRunCardExpanded,
    toggleRunCard,
    resolveSubmissionAgentName,
    resolvePrimaryAgentId,
    compareDisplayUnits,
    getDisplayTeam,
    renderRunEntry,
    renderRunRowItem,
    formatMindscapeLabel,
    formatPhaseLabel,
    formatSecondsLabel,
    handleModeTabClick,
    clearArchiveAgentFilters,
    toggleArchiveAgentFilterPanel,
    clearArchiveWeaponFilters,
    toggleArchiveWeaponFilterPanel,
    handleArchiveAgentSearchInput,
    handleArchiveWeaponSearchInput,
    handleArchiveRoleFilterClick,
    handleArchiveAgentSelectionModeClick,
    handleArchiveAttributeFilterClick,
    handleArchiveWeaponRoleFilterClick,
    handleArchiveWeaponSelectionModeClick,
    handleArchiveWeaponRankFilterClick,
    handleArchiveAgentGridClick,
    handleArchiveWeaponGridClick,
    handleArchiveSelectedAgentClick,
    handleArchiveSelectedWeaponClick,
    handleArchiveActionClick,
    handleArchiveActionKeydown,
    selectArchiveRoomTab,
    getSeasonsForMode,
    getApprovedRunsForRoom,
    submissionMatchesAgentFilters,
    submissionMatchesWeaponFilters,
    submissionMatchesRunFilter,
    getAvailableRunFilters,
    submissionMatchesCostBracket,
    filterCharactersForArchive,
    filterWeaponsForArchive,
    getSelectedArchiveRoom,
    getApprovedRunsForCurrentRoom,
    getAvailableArchiveAgentIds,
    getAvailableArchiveWeaponIds,
    pruneArchiveFiltersToAvailable,
    buildArchiveFilterSummary,
    getArchiveSummaryLabel,
    renderSelectedAgentFilterGroup,
    renderSelectedWeaponFilterGroup,
    getSelectedCostBracket,
    calculateSubmissionCosts,
    compareApprovedRuns,
    compareCharacters,
    compareWeapons,
    compareBangboos
  } = archiveFeature;

  const {
    hydratePageFromLocation,
    openLeaderboardPage,
    openFullScoreCostPage,
    openArchivePage,
    openMetaReportPage,
    openHallOfFamePage,
    openOverallHallOfFamePage,
    openPlayerSubmissionsPage,
    handlePageHashChange,
    renderPageVisibility
  } = pageShellFeature;

  const {
    renderLeaderboardPage,
    handleLeaderboardModeTabClick,
    handleLeaderboardSeasonChange,
    handleLeaderboardTypeSelectChange,
    handleLeaderboardLimitSelectChange,
    handleLeaderboardCostBracketChange,
    handleLeaderboardStandardCostCapChange,
    handleLeaderboardFullScoreOnlyChange,
    handleLeaderboardActionClick
  } = leaderboardFeature;

  const {
    renderFullScoreCostPage,
    handleFullScoreCostObjectiveChange,
    handleFullScoreCostModeChange,
    handleFullScoreCostSeasonChange,
    handleFullScoreCostStandardCapChange,
    handleFullScoreCostActionClick
  } = fullScoreCostFeature;

  const {
    renderPlayerSubmissionsPage,
    handlePlayerSubmissionsModeChange,
    handlePlayerSubmissionsPageSizeChange,
    handlePlayerSubmissionsSearchInput,
    handlePlayerSubmissionsSearchCompositionEnd,
    handlePlayerSubmissionsSearchKeydown,
    handlePlayerSubmissionsSuggestionClick,
    handlePlayerSubmissionsResultsClick
  } = playerSubmissionsFeature;

  const {
    renderMetaReportPage,
    handleMetaReportTabClick,
    handleMetaReportModeTabClick,
    handleMetaReportSeasonChange,
    handleMetaReportRoomChange,
    handleMetaReportCostBracketChange,
    handleMetaReportTeamSortClick,
    handleMetaReportContentChange,
    handleMetaReportContentInput,
    handleMetaReportContentCompositionEnd,
    handleMetaReportContentFocusIn,
    handleMetaReportContentKeydown
  } = metaReportFeature;

  const {
    renderHallOfFamePage,
    handleHallModeChange,
    handleHallSeasonChange,
    handleHallSortChange,
    handleHallLimitChange,
    handleHallCrownScopeChange,
    handleHallCategorySelectChange,
    handleHallCharacterGridClick,
    renderOverallHallOfFamePage,
    handleOverallHallModeChange,
    handleOverallHallSeasonChange,
    handleOverallHallSortChange,
    handleOverallHallLimitChange,
    handleOverallHallCrownScopeChange,
    handleOverallHallCategorySelectChange
  } = hallOfFameFeature;


  configureRuntime({
    state,
    elements,
    roster,
    seedDatabase,
    seedSubmissions,
    applyAuthPayload,
    renderStaticOptions,
    ensureSeasonSelection,
    renderAll,
    openModerationModal,
    restorePlayerDpsMapSnapshot: (...args) => callLoadedFeature(
      "playerDpsMap",
      "restorePlayerDpsMapSnapshot",
      ...args
    ),
    clearOwnerPlayerDpsMapSnapshots: async () => {
      callLoadedFeature("playerDpsMap", "clearOwnerPlayerDpsMapSnapshots");
      const { clearPlayerDpsMapSnapshot } = await import("./src/features/player-dps-map-snapshot.js");
      await clearPlayerDpsMapSnapshot();
    }
  });
  configureLocalization({
    state,
    elements,
    roster,
    getStorageItem,
    setStorageItem,
    renderAll,
    isModalOpen,
    findSeasonById,
    renderRoomEditors,
    renderSeasonPresetEditor,
    renderSubmissionTargetChooser,
    renderSubmissionTargets,
    renderSubmissionDynamic,
    updateSubmissionGuidelinesContinueState
  });
  init().catch((error) => {
    console.error(error);
    renderAll();
    showToastKey("serverUnavailable", "serverUnavailableHelp");
  });

  async function init() {
    hydrateLanguagePreference();
    hydrateThemePreference();
    state.costModel = normalizeCostModel(getStorageItem(COST_MODEL_STORAGE_KEY));
    hydrateMobilePreference();
    hydratePageFromLocation();
    bindEvents();
    renderLanguageToggle();
    renderThemeToggle();
    applyLocalizedDocumentText();
    renderStaticOptions();
    await bootstrapFromServer({ render: false });
    try {
      await ensureFeaturesForContext(state.mobile.enabled ? state.mobile.tab : state.page);
    } catch (error) {
      handleFeatureLoadError(error);
      state.mobile.tab = "archive";
      await pageShellFeature.setPageRoute("archive", { render: false, scroll: false });
    }
    ensureSeasonSelection();
    renderAll();
    startAutoRefresh();
  }

  function bindEvents() {
    elements.modeTabs.addEventListener("click", handleModeTabClick);
    elements.languageEnBtn?.addEventListener("click", () => setUiLanguage("en"));
    elements.languageZhBtn?.addEventListener("click", () => setUiLanguage("zh"));
    elements.themeLightBtn?.addEventListener("click", () => setUiTheme("light"));
    elements.themeDarkBtn?.addEventListener("click", () => setUiTheme("dark"));
    elements.costOriginalBtn?.addEventListener("click", () => setCostModel("original"));
    elements.costAlternativeBtn?.addEventListener("click", () => setCostModel("alternative"));
    elements.mobilePreferencesBtn?.addEventListener("click", () => {
      state.mobilePreferencesOpen = !state.mobilePreferencesOpen;
      renderMobilePreferences();
    });
    if (elements.mobilePreferencesPanel && typeof ResizeObserver === "function") {
      new ResizeObserver(updateMobilePreferencesHeight).observe(elements.mobilePreferencesPanel);
    }
    elements.seasonFilterSelect.addEventListener("change", () => {
      state.filters.seasonId = elements.seasonFilterSelect.value;
      ensureArchiveRoomSelection(findSeasonById(state.filters.seasonId));
      pruneArchiveFiltersToAvailable();
      renderArchiveFilters();
      renderArchiveList();
    });
    elements.archiveRunFilterSelect.addEventListener("change", () => {
      state.filters.runFilter = elements.archiveRunFilterSelect.value;
      renderArchiveList();
    });
    elements.archiveCostBracketSelect.addEventListener("change", () => {
      state.filters.costBracketId = elements.archiveCostBracketSelect.disabled
        ? "all"
        : elements.archiveCostBracketSelect.value;
      renderArchiveList();
    });
    elements.archiveSortModeSelect.addEventListener("change", () => {
      state.filters.sortMode = elements.archiveSortModeSelect.value;
      renderArchiveList();
    });
    elements.clearArchiveAgentFiltersBtn.addEventListener("click", clearArchiveAgentFilters);
    elements.toggleArchiveAgentFilterBtn.addEventListener("click", toggleArchiveAgentFilterPanel);
    elements.archiveAgentSearchInput.addEventListener("input", handleArchiveAgentSearchInput);
    elements.archiveAgentSelectionMode.addEventListener("click", handleArchiveAgentSelectionModeClick);
    elements.archiveRoleFilters.addEventListener("click", handleArchiveRoleFilterClick);
    elements.archiveAttributeFilters.addEventListener("click", handleArchiveAttributeFilterClick);
    elements.archiveAgentGrid.addEventListener("click", handleArchiveAgentGridClick);
    elements.archiveSelectedAgents.addEventListener("click", handleArchiveSelectedAgentClick);
    elements.clearArchiveWeaponFiltersBtn.addEventListener("click", clearArchiveWeaponFilters);
    elements.toggleArchiveWeaponFilterBtn.addEventListener("click", toggleArchiveWeaponFilterPanel);
    elements.archiveWeaponSearchInput.addEventListener("input", handleArchiveWeaponSearchInput);
    elements.archiveWeaponSelectionMode.addEventListener("click", handleArchiveWeaponSelectionModeClick);
    elements.archiveWeaponRoleFilters.addEventListener("click", handleArchiveWeaponRoleFilterClick);
    elements.archiveWeaponRankFilters.addEventListener("click", handleArchiveWeaponRankFilterClick);
    elements.archiveWeaponGrid.addEventListener("click", handleArchiveWeaponGridClick);
    elements.archiveSelectedWeapons.addEventListener("click", handleArchiveSelectedWeaponClick);
    elements.archiveList.addEventListener("click", handleArchiveActionClick);
    elements.archiveList.addEventListener("keydown", handleArchiveActionKeydown);

    elements.openSubmissionBtn.addEventListener("click", () => openSubmissionGuidelines());
    elements.openBulkSubmissionImportBtn?.addEventListener("click", () => requireOwnerAction(openBulkImportModal));
    elements.bulkSubmissionFileInput?.addEventListener("change", handleBulkImportFileChange);
    elements.bulkSubmissionImportForm?.addEventListener("submit", handleBulkImportSubmit);
    elements.bulkSubmissionImportModal?.addEventListener("click", handleBulkImportModalClick, true);
    elements.bulkSubmissionImportModal?.addEventListener("keydown", handleBulkImportModalKeydown);
    elements.downloadBulkSubmissionCsvTemplateBtn?.addEventListener("click", downloadCsvTemplate);
    elements.downloadBulkSubmissionTxtTemplateBtn?.addEventListener("click", downloadTxtTemplate);
    elements.bulkSubmissionRetryBtn?.addEventListener("click", handleBulkImportRetry);
    elements.bulkSubmissionDownloadResultsBtn?.addEventListener("click", downloadImportResults);
    elements.bulkSubmissionCancelBtn?.addEventListener("click", handleBulkImportCancel);
    elements.openLeaderboardBtn.addEventListener("click", openLeaderboardPage);
    elements.openFullScoreCostBtn?.addEventListener("click", openFullScoreCostPage);
    elements.openMetaReportBtn.addEventListener("click", openMetaReportPage);
    elements.openHallOfFameBtn.addEventListener("click", openHallOfFamePage);
    elements.openOverallHallOfFameBtn.addEventListener("click", openOverallHallOfFamePage);
    elements.openPlayerSubmissionsBtn?.addEventListener("click", openPlayerSubmissionsPage);
    elements.openArchivePageBtn.addEventListener("click", openArchivePage);
    elements.leaderboardModeTabs?.addEventListener("click", handleLeaderboardModeTabClick);
    elements.leaderboardModeTabs?.addEventListener("change", handleLeaderboardModeTabClick);
    elements.leaderboardModeSelect?.addEventListener("change", handleLeaderboardModeTabClick);
    elements.leaderboardSeasonSelect.addEventListener("change", handleLeaderboardSeasonChange);
    elements.leaderboardTypeSelect.addEventListener("change", handleLeaderboardTypeSelectChange);
    elements.leaderboardLimitSelect.addEventListener("change", handleLeaderboardLimitSelectChange);
    elements.leaderboardCostBracketSelect.addEventListener("change", handleLeaderboardCostBracketChange);
    elements.leaderboardStandardCostCapSelect?.addEventListener("change", handleLeaderboardStandardCostCapChange);
    elements.leaderboardFullScoreOnlyInput?.addEventListener("change", handleLeaderboardFullScoreOnlyChange);
    elements.leaderboardList.addEventListener("click", handleLeaderboardActionClick);
    elements.fullScoreCostObjectiveSelect?.addEventListener("change", handleFullScoreCostObjectiveChange);
    elements.fullScoreCostModeSelect?.addEventListener("change", handleFullScoreCostModeChange);
    elements.fullScoreCostSeasonSelect?.addEventListener("change", handleFullScoreCostSeasonChange);
    elements.fullScoreCostStandardCapSelect?.addEventListener("change", handleFullScoreCostStandardCapChange);
    elements.fullScoreCostContent?.addEventListener("click", handleFullScoreCostActionClick);
    elements.playerSubmissionsModeSelect?.addEventListener("change", handlePlayerSubmissionsModeChange);
    elements.playerSubmissionsPageSizeSelect?.addEventListener("change", handlePlayerSubmissionsPageSizeChange);
    elements.playerSubmissionsSearchInput?.addEventListener("input", handlePlayerSubmissionsSearchInput);
    elements.playerSubmissionsSearchInput?.addEventListener("compositionend", handlePlayerSubmissionsSearchCompositionEnd);
    elements.playerSubmissionsSearchInput?.addEventListener("keydown", handlePlayerSubmissionsSearchKeydown);
    elements.playerSubmissionsSuggestions?.addEventListener("click", handlePlayerSubmissionsSuggestionClick);
    elements.playerSubmissionsResults?.addEventListener("click", handlePlayerSubmissionsResultsClick);
    elements.metaReportTabs.addEventListener("click", handleMetaReportTabClick);
    elements.metaReportModeTabs?.addEventListener("click", handleMetaReportModeTabClick);
    elements.metaReportModeTabs?.addEventListener("change", handleMetaReportModeTabClick);
    elements.metaReportModeSelect?.addEventListener("change", handleMetaReportModeTabClick);
    elements.metaReportSeasonSelect.addEventListener("change", handleMetaReportSeasonChange);
    elements.metaReportRoomSelect.addEventListener("change", handleMetaReportRoomChange);
    elements.metaReportCostBracketSelect.addEventListener("change", handleMetaReportCostBracketChange);
    elements.metaReportContent.addEventListener("click", handleMetaReportTeamSortClick);
    elements.metaReportContent.addEventListener("change", handleMetaReportContentChange);
    elements.metaReportContent.addEventListener("input", handleMetaReportContentInput);
    elements.metaReportContent.addEventListener("compositionend", handleMetaReportContentCompositionEnd);
    elements.metaReportContent.addEventListener("focusin", handleMetaReportContentFocusIn);
    elements.metaReportContent.addEventListener("keydown", handleMetaReportContentKeydown);
    elements.hallModeSelect.addEventListener("change", handleHallModeChange);
    elements.hallSeasonSelect.addEventListener("change", handleHallSeasonChange);
    elements.hallSortSelect.addEventListener("change", handleHallSortChange);
    elements.hallLimitSelect.addEventListener("change", handleHallLimitChange);
    elements.hallCrownScopeSelect.addEventListener("change", handleHallCrownScopeChange);
    elements.hallCategorySelect.addEventListener("change", handleHallCategorySelectChange);
    elements.hallCharacterGrid.addEventListener("click", handleHallCharacterGridClick);
    elements.overallHallModeSelect.addEventListener("change", handleOverallHallModeChange);
    elements.overallHallSeasonSelect.addEventListener("change", handleOverallHallSeasonChange);
    elements.overallHallSortSelect.addEventListener("change", handleOverallHallSortChange);
    elements.overallHallLimitSelect.addEventListener("change", handleOverallHallLimitChange);
    elements.overallHallCrownScopeSelect.addEventListener("change", handleOverallHallCrownScopeChange);
    elements.overallHallCategorySelect.addEventListener("change", handleOverallHallCategorySelectChange);
    elements.openAuthBtn.addEventListener("click", openAuthModal);
    elements.openModerationBtn.addEventListener("click", () => requireModeratorAction(() => openModerationModal("pending")));
    elements.addSeasonBtn.addEventListener("click", () => requireModeratorAction(() => openSeasonModal()));

    elements.seasonForm.addEventListener("submit", handleSeasonSave);
    elements.seasonModeInput.addEventListener("change", syncRoomLabelsForModeChange);
    elements.roomEditorList.addEventListener("click", handleRoomEditorClick);
    elements.seasonPresetEditor.addEventListener("click", handleSeasonPresetEditorClick);
    elements.seasonPresetEditor.addEventListener("input", handleSeasonPresetSearchInput);
    elements.deleteSeasonBtn.addEventListener("click", deleteSeason);
    elements.purgeSeasonBtn.addEventListener("click", purgeSeason);

    elements.submissionGuidelinesBody.addEventListener("scroll", updateSubmissionGuidelinesContinueState);
    elements.understandSubmissionGuidelinesBtn.addEventListener("click", handleSubmissionGuidelinesAccept);
    elements.submissionTargetModeSelect.addEventListener("change", handleSubmissionTargetModeSelectChange);
    elements.submissionTargetSeasonSelect.addEventListener("change", handleSubmissionTargetSeasonSelectChange);
    elements.submissionTargetBossSelect.addEventListener("change", handleSubmissionTargetBossSelectChange);
    elements.submissionTargetForm.addEventListener("submit", handleSubmissionTargetSubmit);

    elements.submissionModeSelect.addEventListener("change", handleSubmissionModeChange);
    elements.submissionTargetSelect.addEventListener("change", handleSubmissionTargetChange);
    elements.submissionTargetHint.addEventListener("click", handleSubmissionTargetHintClick);
    elements.submissionTimeInput.addEventListener("input", handleSubmissionTimeInput);
    elements.submissionScoreInput.addEventListener("input", handleSubmissionKillStateChange);
    elements.submissionBossKilledInput.addEventListener("change", handleSubmissionKillStateChange);
    elements.submissionAgentSearchInput.addEventListener("input", handleSubmissionAgentSearchInput);
    elements.submissionRoleFilters.addEventListener("click", handleSubmissionRoleFilterClick);
    elements.submissionAttributeFilters.addEventListener("click", handleSubmissionAttributeFilterClick);
    elements.submissionAgentGrid.addEventListener("click", handleSubmissionAgentGridClick);
    elements.submissionSelectedAgents.addEventListener("click", handleSubmissionSelectedTeamClick);
    elements.submissionSelectedAgents.addEventListener("input", handleSubmissionSelectedTeamInput);
    elements.submissionWeaponSearchInput.addEventListener("input", handleSubmissionWeaponSearchInput);
    elements.submissionWeaponPanel.addEventListener("click", handleWeaponPanelClick);
    elements.submissionWeaponPanel.addEventListener("input", handleWeaponPanelInput);
    elements.submissionBangbooSearchInput.addEventListener("input", handleSubmissionBangbooSearchInput);
    elements.submissionBangbooGrid.addEventListener("click", handleBangbooGridClick);
    elements.submissionForm.addEventListener("submit", handleSubmissionSave);
    elements.submissionForm.addEventListener("wheel", handleSubmissionNumberWheel);
    elements.reportForm.addEventListener("submit", handleReportSubmit);

    elements.moderationTabs.addEventListener("click", handleModerationTabClick);
    elements.moderationContent.addEventListener("click", handleModerationActionClick);
    elements.moderationContent.addEventListener("input", handleModerationContentInput);
    elements.moderationContent.addEventListener("change", handleModerationContentChange);
    elements.moderationContent.addEventListener("keydown", handleModerationContentKeydown);
    elements.moderationContent.addEventListener("compositionend", handleModerationContentCompositionEnd);
    elements.authModalContent.addEventListener("submit", handleAuthFormSubmit);
    elements.authModalContent.addEventListener("click", handleAuthActionClick);
    bindMobileEvents();

    document.querySelectorAll("[data-close-modal]").forEach((button) => {
      button.addEventListener("click", () => {
        closeModal(button.getAttribute("data-close-modal"));
      });
    });

    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("click", handleExternalLinkWarning);
    document.addEventListener("click", (event) => {
      if (state.mobilePreferencesOpen && !event.target.closest?.("#mobilePreferencesPanel, #mobilePreferencesBtn")) {
        state.mobilePreferencesOpen = false;
        renderMobilePreferences();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || !state.mobilePreferencesOpen) return;
      event.preventDefault();
      state.mobilePreferencesOpen = false;
      renderMobilePreferences();
      elements.mobilePreferencesBtn?.focus();
    });
    document.addEventListener("pointerdown", (event) => shared.handlePlayerDpsMapPointerDown?.(event));
    window.addEventListener("focus", handleWindowFocus);
    window.addEventListener("hashchange", handlePageHashChange);
    window.addEventListener("pointermove", (event) => shared.handlePlayerDpsMapPointerMove?.(event));
    window.addEventListener("pointerup", (event) => shared.handlePlayerDpsMapPointerUp?.(event));
    window.addEventListener("pointercancel", (event) => shared.handlePlayerDpsMapPointerUp?.(event));
  }

  function handleExternalLinkWarning(event) {
    const link = event.target?.closest?.('a[data-external-warning="true"]');
    if (!link) return;
    const hostname = String(link.dataset.externalHost || "this external site");
    const approved = window.confirm(
      `This proof link opens ${hostname}, which is not a recognized video provider. Continue?`
    );
    if (!approved) event.preventDefault();
  }

  function updateMobilePreferencesHeight() {
    if (!state.mobile.enabled || !state.mobilePreferencesOpen) return;
    const height = elements.mobilePreferencesPanel?.getBoundingClientRect?.().height;
    if (height > 0) document.documentElement.style.setProperty("--mobile-preferences-height", `${Math.ceil(height)}px`);
  }

  function renderMobilePreferences() {
    if (!state.mobile.enabled) state.mobilePreferencesOpen = false;
    const open = state.mobilePreferencesOpen;
    elements.mobilePreferencesBtn?.setAttribute("aria-label", t("uiPreferences"));
    elements.mobilePreferencesBtn?.setAttribute("title", t("uiPreferences"));
    elements.mobilePreferencesBtn?.setAttribute("aria-expanded", String(open));
    elements.mobilePreferencesPanel?.setAttribute("aria-label", t("uiPreferences"));
    elements.mobilePreferencesPanel?.setAttribute("aria-hidden", String(state.mobile.enabled && !open));
    elements.mobilePreferencesPanel?.setAttribute("data-open", String(open));
    updateMobilePreferencesHeight();
  }

  function getCostModel() {
    return normalizeCostModel(state.costModel);
  }

  function getCostModelForSeason(seasonOrId) {
    const season = typeof seasonOrId === "string" ? findSeasonById(seasonOrId) : seasonOrId;
    return getEffectiveCostModel(getCostModel(), season);
  }

  function setCostModel(value) {
    const next = normalizeCostModel(value);
    if (next === getCostModel()) return;
    state.costModel = next;
    setStorageItem(COST_MODEL_STORAGE_KEY, next);
    // Both models' derived results and the shared raw runs remain cached.
    callLoadedFeature("playerDpsMap", "handleCostModelChange");
    renderAll();
    if (isModalOpen(elements.submissionModal)) {
      callLoadedFeature("submission", "updateLiveCostDisplay");
    }
  }

  function renderCostModelToggle() {
    elements.costModelToggle?.setAttribute("aria-label", t("costSystem"));
    elements.costModelToggle?.setAttribute("title", t("alternativeCostHelp"));
    for (const [button, model, labelKey, shortKey] of [
      [elements.costOriginalBtn, "original", "originalCostSystem", "originalCostSystemShort"],
      [elements.costAlternativeBtn, "alternative", "alternativeCostSystem", "alternativeCostSystemShort"]
    ]) {
      if (!button) continue;
      button.textContent = t(labelKey);
      button.dataset.mobileLabel = t(shortKey);
      button.setAttribute("aria-label", `${t("costSystem")}: ${t(labelKey)}`);
      button.setAttribute("aria-pressed", getCostModel() === model ? "true" : "false");
      button.classList.toggle("active", getCostModel() === model);
    }
  }

  function renderAll() {
    applyModeratorMode();
    renderLanguageToggle();
    renderThemeToggle();
    renderCostModelToggle();
    applyLocalizedDocumentText();
    ensureSeasonSelection();
    renderPageVisibility();
    shared.ensureHallRecognition?.();
    if (!state.mobile.enabled) {
      if (state.page === "leaderboard") {
        callLoadedFeature("leaderboard", "renderLeaderboardPage");
      } else if (state.page === "full-score-cost") {
        callLoadedFeature("fullScoreCost", "renderFullScoreCostPage");
      } else if (state.page === "player-submissions") {
        callLoadedFeature("playerSubmissions", "renderPlayerSubmissionsPage");
      } else if (state.page === "meta-report") {
        callLoadedFeature("metaReport", "renderMetaReportPage");
      } else if (state.page === "hall-of-fame") {
        callLoadedFeature("hallOfFame", "renderHallOfFamePage");
      } else if (state.page === "overall-hall-of-fame") {
        callLoadedFeature("hallOfFame", "renderOverallHallOfFamePage");
      } else {
        renderArchiveFilters();
        renderArchiveList();
      }
    }
    if (isModalOpen(elements.moderationModal)) {
      callLoadedFeature("moderation", "renderModerationTabs");
      callLoadedFeature("moderation", "renderModerationContent");
    }
    renderSessionUi();
    renderAuthModalContent();
    renderMobileShell();
    renderMobilePreferences();
    state.autoRefresh.signature = currentSnapshotSignature();
  }

  function applyModeratorMode() {
    document.body.setAttribute("data-moderator", state.isModerator ? "true" : "false");
    document.body.setAttribute("data-owner", state.isOwner ? "true" : "false");
    elements.purgeSeasonBtn.classList.toggle("hidden", !state.isOwner || !elements.editingSeasonId.value);
  }

  function requireModeratorAction(action) {
    if (!state.isModerator) {
      openAuthModal();
      showToastKey("moderatorAccessRequired", "moderatorAccessRequiredHelp");
      return;
    }
    return action();
  }

  function requireOwnerAction(action) {
    if (!state.isOwner) {
      openAuthModal();
      showToastKey("ownerAccessRequired", "ownerAccessRequiredHelp");
      return;
    }
    return action();
  }

})();
