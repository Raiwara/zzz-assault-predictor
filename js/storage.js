/**
 * Database Storage & Synchronization Manager
 * Supports LocalStorage caching, file import/export, and persistence across rotations.
 */

class DatabaseManager {
  constructor() {
    this.storageKey = 'zzz_assault_predictor_v12';
    this.data = {
      rotations: [],
      characters: [],
      weapons: [],
      bangboos: [],
      bosses: [],
      buffs: [],
      runs: [],
      synergies: {},
      charWeapons: {}
    };
  }

  async init() {
    // Clear legacy caches
    try {
      localStorage.removeItem('zzz_assault_predictor_v1');
      localStorage.removeItem('zzz_assault_predictor_v2');
      localStorage.removeItem('zzz_assault_predictor_v3');
      localStorage.removeItem('zzz_assault_predictor_v4');
      localStorage.removeItem('zzz_assault_predictor_v5');
      localStorage.removeItem('zzz_assault_predictor_v6');
      localStorage.removeItem('zzz_assault_predictor_v7');
      localStorage.removeItem('zzz_assault_predictor_v8');
      localStorage.removeItem('zzz_assault_predictor_v9');
      localStorage.removeItem('zzz_assault_predictor_v10');
      localStorage.removeItem('zzz_assault_predictor_v11');
      const cached = localStorage.getItem(this.storageKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed.rotations?.length >= 20 && parsed.runs?.length >= 10000 && parsed.characters?.[0]?.faction && parsed.synergies?.bestTeammates && parsed.charWeapons && parsed.runs?.[0]?.cost !== undefined) {
          this.data = parsed;
          console.log('[Storage] Loaded database from LocalStorage.');
          return this.data;
        } else {
          localStorage.removeItem(this.storageKey);
        }
      }
    } catch (e) {
      console.warn('[Storage] Failed to parse cached DB, fallback to fresh files.', e);
      try { localStorage.removeItem(this.storageKey); } catch (_) {}
    }

    // 2. Load from default bundled JSON files
    try {
      const [rotations, chars, weaps, boos, bosses, buffs, runs, synergies, charWeapons, nexusCosts] = await Promise.all([
        fetch('./data/rotations.json').then(r => r.json()),
        fetch('./data/characters.json').then(r => r.json()),
        fetch('./data/weapons.json').then(r => r.json()),
        fetch('./data/bangboos.json').then(r => r.json()),
        fetch('./data/bosses.json').then(r => r.json()),
        fetch('./data/buffs.json').then(r => r.json()),
        fetch('./data/runs.json').then(r => r.json()),
        fetch('./data/synergies.json').then(r => r.json()).catch(() => ({})),
        fetch('./data/char-weapons.json').then(r => r.json()).catch(() => ({})),
        fetch('./data/nexus-costs.json').then(r => r.json()).catch(() => ({}))
      ]);

      this.data = {
        rotations,
        characters: chars,
        weapons: weaps,
        bangboos: boos,
        bosses,
        buffs,
        runs,
        synergies: synergies || {},
        charWeapons: charWeapons || {},
        nexusCosts: nexusCosts || {}
      };
      this.save();
      console.log('[Storage] Initialized database from bundled files with synergies, char-weapons, and nexus-costs.');
    } catch (err) {
      console.error('[Storage] Error loading JSON files:', err);
    }
    return this.data;
  }

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    } catch (e) {
      console.error('[Storage] LocalStorage quota exceeded or error:', e);
    }
  }

  addRotation(rotation) {
    const idx = this.data.rotations.findIndex(r => r.id === rotation.id);
    if (idx >= 0) {
      this.data.rotations[idx] = rotation;
    } else {
      this.data.rotations.unshift(rotation);
    }
    this.save();
  }

  addRun(run) {
    run.id = run.id || `run-${Date.now()}`;
    this.data.runs.unshift(run);
    this.save();
  }

  exportJson() {
    const jsonStr = JSON.stringify(this.data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `zzz-assault-timeline-db-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /**
   * Flexible and forgiving import:
   * Supports our backup format, zzz-run-archive exports, seed datasets, and run arrays.
   */
  importJson(jsonString) {
    try {
      let parsed = JSON.parse(jsonString);

      // 1. Check if it's wrapped in a state container (e.g. zzz-run-archive export or seedData)
      if (parsed.defaultState) parsed = parsed.defaultState;
      if (parsed.data) parsed = parsed.data;

      let importedCount = 0;

      // Import rotations / seasons
      if (parsed.rotations && Array.isArray(parsed.rotations)) {
        this.data.rotations = parsed.rotations;
        importedCount += parsed.rotations.length;
      } else if (parsed.seasons && Array.isArray(parsed.seasons)) {
        // Convert zzz-run-archive seasons format if provided
        const newRotations = parsed.seasons
          .filter(s => (s.mode || '').toLowerCase().includes('deadly'))
          .map(s => ({
            id: s.id,
            name: `Ротация ${s.start ? s.start.slice(0, 10) : ''} – ${s.end ? s.end.slice(0, 10) : ''}`,
            dateRange: `${s.start ? s.start.slice(0, 10) : ''} – ${s.end ? s.end.slice(0, 10) : ''}`,
            status: s.status || 'ended',
            mode: s.mode || 'Deadly Assault',
            buffs: this.data.buffs.slice(0, 3),
            rooms: (s.rooms || []).map(r => ({
              roomNumber: r.roomNumber,
              bossId: r.bossName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
              bossName: r.bossName,
              bossRuName: r.bossName,
              weaknesses: r.weaknesses || [],
              resistances: r.resistances || [],
              targetScore: r.highestRankScore || 20000,
              avgScore: 23500
            }))
          }));
        if (newRotations.length > 0) {
          this.data.rotations = [...newRotations, ...this.data.rotations];
          importedCount += newRotations.length;
        }
      }

      // Import runs / approved submissions
      const incomingRuns = parsed.runs || parsed.approvedSubmissions;
      if (incomingRuns && Array.isArray(incomingRuns)) {
        incomingRuns.forEach(r => {
          const formatted = {
            id: r.id || `run-${Date.now()}-${Math.random()}`,
            rotationId: r.seasonId || r.rotationId || 'rot-custom',
            bossName: r.targetName || r.bossName || 'Boss',
            score: r.score || 20000,
            timeSeconds: r.timeSeconds || 90,
            bangboo: r.bangbooName || r.bangboo || 'Sharkboo',
            source: r.source || 'Imported Archive',
            author: r.authorName || r.author || 'Anon',
            team: (r.team || []).map(t => ({
              name: t.agentName || t.name,
              mindscape: t.cinema ?? t.mindscape ?? 0,
              weapon: t.wengineName || t.weapon || '',
              refinement: t.refinement ?? 1
            }))
          };
          this.data.runs.unshift(formatted);
          importedCount++;
        });
      }

      // Import characters if present
      if (parsed.characters && Array.isArray(parsed.characters)) {
        this.data.characters = parsed.characters;
        importedCount += parsed.characters.length;
      }

      // Import weapons if present
      if (parsed.weapons && Array.isArray(parsed.weapons)) {
        this.data.weapons = parsed.weapons;
      }

      // Import bangboos if present
      if (parsed.bangboos && Array.isArray(parsed.bangboos)) {
        this.data.bangboos = parsed.bangboos;
      }

      if (importedCount > 0) {
        this.save();
        return { success: true, message: `Успешно импортировано данных: ${importedCount} элементов!` };
      }

      // If object had recognized keys
      if (Object.keys(parsed).length > 0) {
        Object.assign(this.data, parsed);
        this.save();
        return { success: true, message: 'База данных успешно обновлена!' };
      }

      return { success: false, error: 'Файл пуст или содержит неизвестную структуру.' };
    } catch (err) {
      return { success: false, error: `Ошибка разбора JSON: ${err.message}` };
    }
  }

  resetToDefaults() {
    localStorage.removeItem(this.storageKey);
    return this.init();
  }
}

window.dbManager = new DatabaseManager();
