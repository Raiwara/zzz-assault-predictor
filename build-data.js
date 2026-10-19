const fs = require('fs');
const path = require('path');

// 1. Read seed-data.js from parent dir
const seedCode = fs.readFileSync(path.join(__dirname, '..', 'seed-data.js'), 'utf8');
global.window = {};
eval(seedCode);
const rawData = global.window.ZZZSeedData;

// Russian translations & nicknames
const ruNames = {
  "Miyabi": "Мияби",
  "Ellen": "Эллен (Акула)",
  "Lycaon": "Ликаон",
  "Pyrois": "Пироис",
  "Vivian": "Вивиан",
  "Promeia": "Промея",
  "Yuzuha": "Юдзуха",
  "Astra Yao": "Астра",
  "Lucia": "Люсия",
  "Dialyn": "Диалинь",
  "Soldier 11": "Солдат 11",
  "Grace": "Грейс",
  "Koleda": "Коляда",
  "Rina": "Рина",
  "Nekomata": "Некомата",
  "Nicole": "Николь",
  "Lucy": "Люси",
  "Soukaku": "Сокаку",
  "Piper": "Пайпер",
  "Anby": "Энби",
  "Anton": "Антон",
  "Billy": "Билли",
  "Ben": "Бен",
  "Corin": "Корин",
  "Seth": "Сет",
  "Pan Yinhu": "Пань Иньху",
  "Pulchra": "Пульхра",
  "Qingyi": "Цинъи",
  "Caesar": "Цезарь",
  "Burnice": "Бернис",
  "Yanagi": "Янаги",
  "Lighter": "Лайтер",
  "Zhu Yuan": "Чжу Юань",
  "Jane": "Джейн Доу",
  "Harumasa": "Харумаса",
  "Hugo": "Хьюго",
  "Evelyn": "Эвелин",
  "Ju Fufu": "Фуфу",
  "Trigger": "Гашетка",
  "Zhao": "Джао",
  "Alice": "Алиса",
  "Aria": "Ария",
  "Remielle": "Рами (Ремиэль)",
  "Seed": "Сид",
  "Ye Shunguang": "Шунь",
  "Yixuan": "Исюань",
  "Banyue": "Баньюэ",
  "Claret": "Кларет",
  "Nangong Yu": "Наньгун Юй",
  "Soldier 0 - Anby": "Солдат 0 - Энби"
};

// Signatures mapping (Agent name -> Weapon name)
const signatureMap = {
  "Miyabi": "Hailstorm Shrine",
  "Ellen": "Deep Sea Visitor",
  "Lycaon": "The Restrained",
  "Soldier 11": "The Brimstone",
  "Grace": "Fusion Compiler",
  "Rina": "Weeping Cradle",
  "Pyrois": "Sol Exuvia",
  "Vivian": "Timeweaver",
  "Lucia": "Heartstring Nocturne",
  "Astra Yao": "Elegant Vanity",
  "Qingyi": "Ice-Jade Teapot",
  "Zhu Yuan": "Riot Suppressor Mark VI",
  "Jane": "Sharpened Stinger",
  "Caesar": "Tusks of Fury",
  "Burnice": "Flamemaker Shaker",
  "Lighter": "Blazing Laurel",
  "Koleda": "Hellfire Gears",
  "Nekomata": "Steel Cushion",
  "Nangong Yu": "Neon Fantasies",
  "Soldier 0 - Anby": "Severed Innocence"
};

// Process Characters
const characters = Object.values(rawData.characters || {}).map(c => ({
  id: c.id,
  name: c.name,
  ruName: ruNames[c.name] || c.name,
  zhName: c.zhName || '',
  rarity: c.rarity,
  specialty: c.specialty, // Attack, Stun, Support, Anomaly, Defense, Rupture
  attribute: c.attribute, // Fire, Ice, Electric, Physical, Ether, Wind
  attackType: c.attackType || 'Slash',
  signatureWeapon: signatureMap[c.name] || null
})).sort((a, b) => {
  if (a.rarity !== b.rarity) return a.rarity === 'S' ? -1 : 1;
  return a.name.localeCompare(b.name);
});

// Process Weapons
const weapons = Object.values(rawData.weapons || {}).map(w => ({
  id: w.id,
  name: w.name,
  zhName: w.zhName || '',
  rarity: w.rarity,
  specialty: w.specialty,
  attack: w.attack || 0,
  subStat: w.subStat || ''
})).sort((a, b) => {
  if (a.rarity !== b.rarity) {
    const rOrder = { 'S': 0, 'A': 1, 'B': 2 };
    return (rOrder[a.rarity] ?? 9) - (rOrder[b.rarity] ?? 9);
  }
  return a.name.localeCompare(b.name);
});

// Process Bangboos
const bangboos = Object.values(rawData.bangboos || {}).map(b => ({
  id: b.id,
  name: b.name,
  zhName: b.zhName || '',
  rarity: b.rarity
})).sort((a, b) => {
  if (a.rarity !== b.rarity) return a.rarity === 'S' ? -1 : 1;
  return a.name.localeCompare(b.name);
});

// Bosses Database
const bosses = [
  {
    id: "phaethon-scorched-horizon",
    name: "Phaethon of the Scorched Horizon",
    ruName: "Паэтон обожжённого горизонта",
    mode: "Deadly Assault",
    room: 1,
    weaknesses: ["Ice", "Wind"],
    resistances: ["Physical"],
    mechanics: {
      type: "into_flames",
      title: "Gale Scorcher & Into Flames",
      description: "Босс вешает 5 стаков Into Flames (+урон босса, -крит. урон команды). Наложение Аномалий атрибута снимает стаки и кратно повышает урон Цветения (Abloom) и Хаоса (Disorder).",
      favoredSpecialty: ["Anomaly"],
      favoredAttributes: ["Ice", "Wind"],
      penalizedAttributes: ["Physical"],
      mechanicBonusAnomaly: 0.30,
      mechanicPenaltyCrit: -0.20
    },
    targetScore: { sRank: 20000, full: 65000 },
    avgScore: 23500,
    topScore: 27800
  },
  {
    id: "infernal-revenant",
    name: "Infernal Revenant",
    ruName: "Адский призрак (Ревенант)",
    mode: "Deadly Assault",
    room: 2,
    weaknesses: ["Ice", "Wind"],
    resistances: ["Physical"],
    mechanics: {
      type: "infernal_state",
      title: "Infernal State & Rain of Fire",
      description: "Яростные атаки в Infernal State требуют Цепного парирования (Chain Parry). Огненный дождь наносит периодический урон отряду. Уничтожение 3 кристаллов кремня гасит огонь, дает щит и энергию.",
      favoredSpecialty: ["Attack", "Anomaly", "Stun"],
      favoredAttributes: ["Ice", "Wind"],
      penalizedAttributes: ["Physical"],
      mechanicBonusChainParry: 0.20,
      mechanicBonusIceFreeze: 0.15
    },
    targetScore: { sRank: 20000, full: 65000 },
    avgScore: 23100,
    topScore: 26900
  },
  {
    id: "kusarikku",
    name: "Kusarikku",
    ruName: "Кусарикку",
    mode: "Deadly Assault",
    room: 3,
    weaknesses: ["Fire", "Electric"],
    resistances: ["Ice"],
    mechanics: {
      type: "corruptive_barrier",
      title: "Corruptive Barrier & Rift Assault",
      description: "Фиолетовый барьер замораживает набор очков. Босс имеет -40% входящего урона от чистой Аномалии. Защитная помощь (Defensive Assist) при атаках из порталов мгновенно крошит щит. После сбития щита/стана — окно взрывного урона.",
      favoredSpecialty: ["Attack", "Stun"],
      favoredAttributes: ["Fire", "Electric"],
      penalizedAttributes: ["Ice"],
      mechanicBonusDefensiveAssist: 0.25,
      mechanicBonusStunBurst: 0.20,
      mechanicPenaltyPureAnomaly: -0.20,
      mechanicPenaltyIce: -0.25
    },
    targetScore: { sRank: 20000, full: 65000 },
    avgScore: 22800,
    topScore: 27200
  },
  {
    id: "discordant-solo-vesper",
    name: "Discordant Solo - Vesper",
    ruName: "Дисгармоничное соло — Веспер",
    mode: "Deadly Assault",
    room: 1,
    weaknesses: ["Ether"],
    resistances: [],
    mechanics: {
      type: "aerial_burst",
      title: "Sonic Distortions",
      description: "Уязвимость к Эфирному урону. Высокая мобильность, требует быстрого ошеломления.",
      favoredSpecialty: ["Attack", "Support"],
      favoredAttributes: ["Ether"],
      penalizedAttributes: []
    },
    targetScore: { sRank: 20000, full: 65000 },
    avgScore: 24200,
    topScore: 28500
  },
  {
    id: "unknown-corruption-complex",
    name: "Unknown Corruption Complex",
    ruName: "Неизвестный комплекс заражения",
    mode: "Deadly Assault",
    room: 2,
    weaknesses: ["Electric", "Ether"],
    resistances: [],
    mechanics: {
      type: "construct_shields",
      title: "Corruption Core",
      description: "Огромная туша, уязвимая к Электро и Эфиру. Быстро оглушается устрашителями с последующим заливом урона.",
      favoredSpecialty: ["Attack", "Stun"],
      favoredAttributes: ["Electric", "Ether"],
      penalizedAttributes: []
    },
    targetScore: { sRank: 20000, full: 65000 },
    avgScore: 23600,
    topScore: 26800
  },
  {
    id: "ye-shiyuan-thrall",
    name: "Ye Shiyuan the Thrall",
    ruName: "Е Шиюань Порабощённый",
    mode: "Deadly Assault",
    room: 3,
    weaknesses: ["Ice", "Physical"],
    resistances: [],
    mechanics: {
      type: "thrall_blade",
      title: "Furious Clashes",
      description: "Агрессивный мечник, слабый ко Льду и Физическому урону. Прекрасно контрится ледяными гиперкерри (Мияби, Эллен).",
      favoredSpecialty: ["Attack", "Anomaly"],
      favoredAttributes: ["Ice", "Physical"],
      penalizedAttributes: []
    },
    targetScore: { sRank: 20000, full: 65000 },
    avgScore: 24500,
    topScore: 29100
  }
];

// Seasonal Buffs Database
const buffs = [
  {
    id: "frigidity",
    name: "Frigidity (Оледенение)",
    ruName: "Оледенение (Frigidity)",
    description: "Увеличивает ледяной урон и знание аномалии. Срабатывание Цветения (Abloom) или Хаоса (Disorder) значительно повышает урон аномалий.",
    favoredAttribute: ["Ice"],
    favoredSpecialty: ["Anomaly"],
    bonusMultiplier: 0.22
  },
  {
    id: "defense-crusher",
    name: "Defense Crusher (Крушитель защиты)",
    ruName: "Крушитель защиты (Defense Crusher)",
    description: "Увеличивает наносимый импульс (Daze), силу атаки персонажей Нападения, а также дает огромный бонус к Крит. урону после применения Суперспособности.",
    favoredAttribute: [],
    favoredSpecialty: ["Attack", "Stun"],
    bonusMultiplier: 0.20
  },
  {
    id: "knife-edge",
    name: "Knife Edge (Лезвие клинка)",
    ruName: "Лезвие клинка (Knife Edge)",
    description: "Повышает защиту, усиливает урон Электро и Ветра после Особых атак, увеличивает импульс Особых атак устрашителей.",
    favoredAttribute: ["Electric", "Wind"],
    favoredSpecialty: ["Stun"],
    bonusMultiplier: 0.20
  },
  {
    id: "disorder-storm",
    name: "Disorder Storm (Шторм хаоса)",
    ruName: "Шторм хаоса (Disorder Storm)",
    description: "Увеличивает урон Хаоса на 35% и ускоряет накопление аномалии при частой смене персонажей.",
    favoredAttribute: [],
    favoredSpecialty: ["Anomaly", "Support"],
    bonusMultiplier: 0.20
  },
  {
    id: "none",
    name: "None / Neutral (Без баффа)",
    ruName: "Без особого баффа",
    description: "Базовые условия боя без усилений этапа.",
    favoredAttribute: [],
    favoredSpecialty: [],
    bonusMultiplier: 0.0
  }
];

// Benchmark runs from Archives & YouTube
const benchmarkRuns = [
  {
    id: "run-001",
    bossId: "phaethon-scorched-horizon",
    bossName: "Phaethon of the Scorched Horizon",
    score: 26850,
    timeSeconds: 76,
    buff: "frigidity",
    bangboo: "Sharkboo",
    source: "ZZZ Run Archive",
    author: "IceQueen_CN",
    team: [
      { name: "Miyabi", mindscape: 0, weapon: "Hailstorm Shrine", refinement: 1 },
      { name: "Promeia", mindscape: 0, weapon: "Frostfall Sickle", refinement: 1 },
      { name: "Yuzuha", mindscape: 0, weapon: "Thoughtbop", refinement: 1 }
    ]
  },
  {
    id: "run-002",
    bossId: "phaethon-scorched-horizon",
    bossName: "Phaethon of the Scorched Horizon",
    score: 25100,
    timeSeconds: 88,
    buff: "frigidity",
    bangboo: "Sharkboo",
    source: "Nexus Shiyu",
    author: "FrostFang",
    team: [
      { name: "Ellen", mindscape: 0, weapon: "Deep Sea Visitor", refinement: 1 },
      { name: "Lycaon", mindscape: 1, weapon: "The Restrained", refinement: 1 },
      { name: "Soukaku", mindscape: 6, weapon: "Bashful Demon", refinement: 5 }
    ]
  },
  {
    id: "run-003",
    bossId: "infernal-revenant",
    bossName: "Infernal Revenant",
    score: 25900,
    timeSeconds: 82,
    buff: "frigidity",
    bangboo: "Butler",
    source: "YouTube / HighEndClears",
    author: "AstraCarry",
    team: [
      { name: "Vivian", mindscape: 0, weapon: "Timeweaver", refinement: 1 },
      { name: "Lucia", mindscape: 0, weapon: "Heartstring Nocturne", refinement: 1 },
      { name: "Astra Yao", mindscape: 0, weapon: "Elegant Vanity", refinement: 1 }
    ]
  },
  {
    id: "run-004",
    bossId: "infernal-revenant",
    bossName: "Infernal Revenant",
    score: 24700,
    timeSeconds: 93,
    buff: "knife-edge",
    bangboo: "Sharkboo",
    source: "Prydwen Endgame",
    author: "Z-Proxy",
    team: [
      { name: "Miyabi", mindscape: 0, weapon: "Hailstorm Shrine", refinement: 1 },
      { name: "Lycaon", mindscape: 2, weapon: "The Restrained", refinement: 1 },
      { name: "Rina", mindscape: 1, weapon: "Weeping Cradle", refinement: 1 }
    ]
  },
  {
    id: "run-005",
    bossId: "kusarikku",
    bossName: "Kusarikku",
    score: 26400,
    timeSeconds: 79,
    buff: "defense-crusher",
    bangboo: "Resonaboo",
    source: "ZZZ Run Archive",
    author: "EtherNuke",
    team: [
      { name: "Pyrois", mindscape: 0, weapon: "Sol Exuvia", refinement: 1 },
      { name: "Dialyn", mindscape: 0, weapon: "Incarcerating Grip", refinement: 1 },
      { name: "Nicole", mindscape: 6, weapon: "The Vault", refinement: 5 }
    ]
  },
  {
    id: "run-006",
    bossId: "kusarikku",
    bossName: "Kusarikku",
    score: 24800,
    timeSeconds: 94,
    buff: "defense-crusher",
    bangboo: "Rocketboo",
    source: "YouTube / S11Mains",
    author: "FlameCore",
    team: [
      { name: "Soldier 11", mindscape: 2, weapon: "The Brimstone", refinement: 1 },
      { name: "Koleda", mindscape: 1, weapon: "Hellfire Gears", refinement: 1 },
      { name: "Lucy", mindscape: 6, weapon: "Kaboom the Cannon", refinement: 5 }
    ]
  },
  {
    id: "run-007",
    bossId: "kusarikku",
    bossName: "Kusarikku",
    score: 23900,
    timeSeconds: 102,
    buff: "knife-edge",
    bangboo: "Plugboo",
    source: "Nexus Shiyu",
    author: "ElectricShock",
    team: [
      { name: "Grace", mindscape: 3, weapon: "Fusion Compiler", refinement: 1 },
      { name: "Trigger", mindscape: 0, weapon: "Severed Innocence", refinement: 1 },
      { name: "Rina", mindscape: 3, weapon: "Weeping Cradle", refinement: 1 }
    ]
  }
];

// Write to files
const outDir = path.join(__dirname, 'data');
fs.writeFileSync(path.join(outDir, 'characters.json'), JSON.stringify(characters, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'weapons.json'), JSON.stringify(weapons, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'bangboos.json'), JSON.stringify(bangboos, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'bosses.json'), JSON.stringify(bosses, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'buffs.json'), JSON.stringify(buffs, null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'runs.json'), JSON.stringify(benchmarkRuns, null, 2), 'utf8');

console.log('Successfully generated JSON files in data/:');
console.log(`- characters.json (${characters.length})`);
console.log(`- weapons.json (${weapons.length})`);
console.log(`- bangboos.json (${bangboos.length})`);
console.log(`- bosses.json (${bosses.length})`);
console.log(`- buffs.json (${buffs.length})`);
console.log(`- runs.json (${benchmarkRuns.length})`);
