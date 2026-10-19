window.ZZZRotationDatabaseSeed = {
  schemaVersion: "1.0.0",
  lastUpdated: "2026-04-23T00:00:00+08:00",
  notes: [
    "This seed file is the starting point for the local rotation database.",
    "Use the browser editor for quick updates, then export JSON when you want a portable backup.",
    "Room weaknesses, resistances, and HP values are stored as editable manual fields so you can fill future cycles later.",
    "Shiyu Defense is scoped to Fifth Frontier only and always expects three rooms."
  ],
  modes: [
    {
      id: "deadly-assault",
      label: "Deadly Assault",
      roomCount: 3,
      sourceUrl: "https://zzz.nanoka.cc/boss",
      defaultFullScore: 65000,
      defaultHighestRankScore: 20000
    },
    {
      id: "deadly-assault-adversity",
      label: "Deadly Assault: Adversity Mode",
      roomCount: 1,
      sourceUrl: "https://zzz.nanoka.cc/boss",
      defaultFullScore: 65000,
      defaultHighestRankScore: 30000
    },
    {
      id: "shiyu-defense",
      label: "Shiyu Defense",
      roomCount: 3,
      sourceUrl: "https://zzz.nanoka.cc/shiyu/",
      scope: "Fifth Frontier",
      defaultFullScore: 50000,
      defaultHighestRankScore: 25000
    },
    {
      id: "annihilation-simulacrum",
      label: "Annihilation Simulacrum",
      roomCount: 3,
      sourceUrl: "",
      defaultFullScore: 0,
      defaultHighestRankScore: 0
    }
  ],
  seasons: [
    {
      id: "as-2026-06-17",
      mode: "Annihilation Simulacrum",
      status: "active",
      start: "2026-06-17 10:00:00",
      end: "2026-06-29 06:00:00",
      notes: "Placeholder Annihilation Simulacrum rotation. Replace boss names, weaknesses, resistances, HP, and preset roster when the real cycle is known.",
      presetAgentIds: ["1291", "1321", "1051", "1531", "1261", "1221", "1071", "1571", "1481", "1451", "1411", "1561"],
      rooms: [
        {
          id: "as-2026-06-17-1",
          seasonId: "as-2026-06-17",
          roomNumber: 1,
          roomName: "Boss 1",
          roomNameZh: "首领 1",
          bossName: "Boss 1",
          bossNameZh: "首领 1",
          primaryEnemy: "Boss 1",
          primaryEnemyZh: "首领 1",
          enemyNames: ["Boss 1"],
          enemyNamesZh: ["首领 1"],
          weaknesses: [],
          resistances: [],
          hp: {
            total: "",
            boss: "",
            adds: ""
          },
          fullScore: 0,
          highestRankScore: 0,
          sRankScore: 0,
          notes: ""
        },
        {
          id: "as-2026-06-17-2",
          seasonId: "as-2026-06-17",
          roomNumber: 2,
          roomName: "Boss 2",
          roomNameZh: "首领 2",
          bossName: "Boss 2",
          bossNameZh: "首领 2",
          primaryEnemy: "Boss 2",
          primaryEnemyZh: "首领 2",
          enemyNames: ["Boss 2"],
          enemyNamesZh: ["首领 2"],
          weaknesses: [],
          resistances: [],
          hp: {
            total: "",
            boss: "",
            adds: ""
          },
          fullScore: 0,
          highestRankScore: 0,
          sRankScore: 0,
          notes: ""
        },
        {
          id: "as-2026-06-17-3",
          seasonId: "as-2026-06-17",
          roomNumber: 3,
          roomName: "Boss 3",
          roomNameZh: "首领 3",
          bossName: "Boss 3",
          bossNameZh: "首领 3",
          primaryEnemy: "Boss 3",
          primaryEnemyZh: "首领 3",
          enemyNames: ["Boss 3"],
          enemyNamesZh: ["首领 3"],
          weaknesses: [],
          resistances: [],
          hp: {
            total: "",
            boss: "",
            adds: ""
          },
          fullScore: 0,
          highestRankScore: 0,
          sRankScore: 0,
          notes: ""
        }
      ]
    },
    {
      id: "69034",
      mode: "Deadly Assault",
      status: "active",
      start: "2026-04-10 04:00:00",
      end: "2026-04-24 03:59:59",
      notes: "Seeded from the Nanoka Deadly Assault page and left open for manual HP and resistance entry.",
      rooms: [
        {
          id: "69034-1",
          seasonId: "69034",
          roomNumber: 1,
          roomName: "Discordant Solo - Vesper",
          bossName: "Discordant Solo - Vesper",
          primaryEnemy: "Discordant Solo - Vesper",
          enemyNames: ["Discordant Solo - Vesper"],
          weaknesses: ["Ether"],
          resistances: [],
          hp: {
            total: "",
            boss: "",
            adds: ""
          },
          fullScore: 65000,
          highestRankScore: 20000,
          sRankScore: 20000,
          notes: ""
        },
        {
          id: "69034-2",
          seasonId: "69034",
          roomNumber: 2,
          roomName: "Unknown Corruption Complex",
          bossName: "Unknown Corruption Complex",
          primaryEnemy: "Unknown Corruption Complex",
          enemyNames: ["Unknown Corruption Complex"],
          weaknesses: ["Electric", "Ether"],
          resistances: [],
          hp: {
            total: "",
            boss: "",
            adds: ""
          },
          fullScore: 65000,
          highestRankScore: 20000,
          sRankScore: 20000,
          notes: ""
        },
        {
          id: "69034-3",
          seasonId: "69034",
          roomNumber: 3,
          roomName: "Ye Shiyuan the Thrall",
          bossName: "Ye Shiyuan the Thrall",
          primaryEnemy: "Ye Shiyuan the Thrall",
          enemyNames: ["Ye Shiyuan the Thrall"],
          weaknesses: ["Ice", "Physical"],
          resistances: [],
          hp: {
            total: "",
            boss: "",
            adds: ""
          },
          fullScore: 65000,
          highestRankScore: 20000,
          sRankScore: 20000,
          notes: ""
        }
      ]
    },
    {
      id: "69035",
      mode: "Deadly Assault",
      status: "upcoming",
      start: "2026-04-24 04:00:00",
      end: "2026-05-08 03:59:59",
      notes: "Placeholder rotation. Replace room names, weaknesses, resistances, and HP later.",
      rooms: [
        {
          id: "69035-1",
          seasonId: "69035",
          roomNumber: 1,
          roomName: "Boss 1",
          bossName: "Boss 1",
          primaryEnemy: "Boss 1",
          enemyNames: [],
          weaknesses: [],
          resistances: [],
          hp: {
            total: "",
            boss: "",
            adds: ""
          },
          fullScore: 65000,
          highestRankScore: 20000,
          sRankScore: 20000,
          notes: ""
        },
        {
          id: "69035-2",
          seasonId: "69035",
          roomNumber: 2,
          roomName: "Boss 2",
          bossName: "Boss 2",
          primaryEnemy: "Boss 2",
          enemyNames: [],
          weaknesses: [],
          resistances: [],
          hp: {
            total: "",
            boss: "",
            adds: ""
          },
          fullScore: 65000,
          highestRankScore: 20000,
          sRankScore: 20000,
          notes: ""
        },
        {
          id: "69035-3",
          seasonId: "69035",
          roomNumber: 3,
          roomName: "Boss 3",
          bossName: "Boss 3",
          primaryEnemy: "Boss 3",
          enemyNames: [],
          weaknesses: [],
          resistances: [],
          hp: {
            total: "",
            boss: "",
            adds: ""
          },
          fullScore: 65000,
          highestRankScore: 20000,
          sRankScore: 20000,
          notes: ""
        }
      ]
    },
    {
      id: "62046",
      mode: "Shiyu Defense",
      status: "active",
      start: "2026-04-17 04:00:00",
      end: "2026-05-01 03:59:59",
      notes: "Fifth Frontier rooms seeded from the Nanoka Shiyu page. Room labels stay as Room 1, Room 2, and Room 3.",
      rooms: [
        {
          id: "62046-room-1",
          seasonId: "62046",
          roomNumber: 1,
          roomName: "Room 1",
          bossName: "Miasmic - Thracian",
          primaryEnemy: "Miasmic - Thracian",
          enemyNames: [
            "Miasmic - Thracian",
            "Ionized - Dullahan",
            "Ionized - Farbauti"
          ],
          weaknesses: ["Ether"],
          resistances: [],
          hp: {
            total: "",
            boss: "",
            adds: ""
          },
          fullScore: 50000,
          highestRankScore: 25000,
          sRankScore: 25000,
          notes: ""
        },
        {
          id: "62046-room-2",
          seasonId: "62046",
          roomNumber: 2,
          roomName: "Room 2",
          bossName: "Sacrifice - Heretic Jester",
          primaryEnemy: "Sacrifice - Heretic Jester",
          enemyNames: [
            "Sacrifice - Heretic Jester",
            "Heavy Striker MK II",
            "Lightfoot Rover MK II"
          ],
          weaknesses: ["Electric", "Physical"],
          resistances: [],
          hp: {
            total: "",
            boss: "",
            adds: ""
          },
          fullScore: 50000,
          highestRankScore: 25000,
          sRankScore: 25000,
          notes: ""
        },
        {
          id: "62046-room-3",
          seasonId: "62046",
          roomNumber: 3,
          roomName: "Room 3",
          bossName: "Haytor",
          primaryEnemy: "Haytor",
          enemyNames: [
            "Haytor",
            "Dullahan",
            "Alpeca",
            "Huskron"
          ],
          weaknesses: ["Fire", "Ice"],
          resistances: [],
          hp: {
            total: "",
            boss: "",
            adds: ""
          },
          fullScore: 50000,
          highestRankScore: 25000,
          sRankScore: 25000,
          notes: ""
        }
      ]
    },
    {
      id: "62047",
      mode: "Shiyu Defense",
      status: "upcoming",
      start: "2026-05-01 04:00:00",
      end: "2026-05-15 03:59:59",
      notes: "Placeholder Fifth Frontier rotation. Fill the room boss, weaknesses, resistances, and HP values later.",
      rooms: [
        {
          id: "62047-room-1",
          seasonId: "62047",
          roomNumber: 1,
          roomName: "Room 1",
          bossName: "",
          primaryEnemy: "",
          enemyNames: [],
          weaknesses: [],
          resistances: [],
          hp: {
            total: "",
            boss: "",
            adds: ""
          },
          fullScore: 50000,
          highestRankScore: 25000,
          sRankScore: 25000,
          notes: ""
        },
        {
          id: "62047-room-2",
          seasonId: "62047",
          roomNumber: 2,
          roomName: "Room 2",
          bossName: "",
          primaryEnemy: "",
          enemyNames: [],
          weaknesses: [],
          resistances: [],
          hp: {
            total: "",
            boss: "",
            adds: ""
          },
          fullScore: 50000,
          highestRankScore: 25000,
          sRankScore: 25000,
          notes: ""
        },
        {
          id: "62047-room-3",
          seasonId: "62047",
          roomNumber: 3,
          roomName: "Room 3",
          bossName: "",
          primaryEnemy: "",
          enemyNames: [],
          weaknesses: [],
          resistances: [],
          hp: {
            total: "",
            boss: "",
            adds: ""
          },
          fullScore: 50000,
          highestRankScore: 25000,
          sRankScore: 25000,
          notes: ""
        }
      ]
    }
  ]
};
