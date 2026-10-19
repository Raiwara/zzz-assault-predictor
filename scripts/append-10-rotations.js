const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../data');
const rotationsPath = path.join(dataDir, 'rotations.json');
const rotations = JSON.parse(fs.readFileSync(rotationsPath, 'utf8'));

const existingIds = new Set(rotations.map(r => r.id));

const newRotations = [
  {
    id: 'rot-season-690471',
    seasonId: '690471',
    name: 'Сезон 69047-Adv (Октябрь 2026, Режим невзгод)',
    dateRange: 'Октябрь 2026',
    startDate: '2026-10-09',
    endDate: '2026-10-23',
    status: 'archived',
    mode: 'Deadly Assault: Adversity Mode',
    description: 'Особый хардкорный режим невзгод с усиленным Интегрированным Гиртаблуллу.',
    buffs: [
      {
        id: 'adversity-overdrive',
        name: 'Adversity Overdrive',
        ruName: 'Перегрузка невзгод',
        description: 'Урон Аномалий и Крит. урон увеличены на 25%, но сопротивление босса растёт со временем.',
        favoredAttribute: ['Ice', 'Ether'],
        favoredSpecialty: ['Anomaly', 'Attack'],
        bonusMultiplier: 0.25
      }
    ],
    rooms: [
      {
        roomNumber: 1,
        bossId: 'integrated-girtablullu',
        bossName: 'Integrated Girtablullu',
        bossRuName: 'Интегрированный Гиртаблуллу',
        weaknesses: ['Ice', 'Ether'],
        resistances: ['Physical'],
        mechanicTitle: 'Corruptive Overload',
        mechanicDescription: 'Усиленная броня и двойные миазматические лужи.',
        favoredSpecialty: ['Anomaly', 'Stun'],
        targetScore: 20000,
        avgScore: 24000
      }
    ]
  },
  {
    id: 'rot-season-69046A',
    seasonId: '69046A',
    name: 'Сезон 69046-Adv (Сентябрь – Октябрь 2026)',
    dateRange: 'Сентябрь – Октябрь 2026',
    startDate: '2026-09-25',
    endDate: '2026-10-09',
    status: 'archived',
    mode: 'Deadly Assault: Adversity Mode',
    description: 'Режим невзгод: Integrated Scorched Horizon.',
    buffs: [
      {
        id: 'flame-frenzy',
        name: 'Flame Frenzy',
        ruName: 'Пламенное неистовство',
        description: 'Урон Льда и Ветра повышен на 20%.',
        favoredAttribute: ['Ice', 'Wind'],
        favoredSpecialty: ['Anomaly'],
        bonusMultiplier: 0.20
      }
    ],
    rooms: [
      {
        roomNumber: 1,
        bossId: 'integrated-scorched-horizon',
        bossName: 'Integrated · Scorched Horizon',
        bossRuName: 'Интегрированный Горизонт',
        weaknesses: ['Ice', 'Wind'],
        resistances: ['Physical'],
        mechanicTitle: 'Infernal Heatwave',
        mechanicDescription: 'Постоянный урон от жары, снимаемый наложением аномалий.',
        favoredSpecialty: ['Anomaly'],
        targetScore: 20000,
        avgScore: 24000
      }
    ]
  },
  {
    id: 'rot-season-69045A',
    seasonId: '69045A',
    name: 'Сезон 69045-Adv (Сентябрь 2026)',
    dateRange: 'Сентябрь 2026',
    startDate: '2026-09-11',
    endDate: '2026-09-25',
    status: 'archived',
    mode: 'Deadly Assault: Adversity Mode',
    description: 'Режим невзгод: Integrated Scorched Horizon.',
    buffs: [
      {
        id: 'shatter-frost',
        name: 'Shatter Frost',
        ruName: 'Морозный раскол',
        description: 'Урон при Заморозке и Расколе повышен на 25%.',
        favoredAttribute: ['Ice'],
        favoredSpecialty: ['Attack', 'Anomaly'],
        bonusMultiplier: 0.25
      }
    ],
    rooms: [
      {
        roomNumber: 1,
        bossId: 'integrated-scorched-horizon',
        bossName: 'Integrated · Scorched Horizon',
        bossRuName: 'Интегрированный Горизонт',
        weaknesses: ['Ice', 'Wind'],
        resistances: ['Physical'],
        mechanicTitle: 'Frost Vulnerability',
        mechanicDescription: 'Быстрый стан от ледяных атак.',
        favoredSpecialty: ['Anomaly', 'Stun'],
        targetScore: 20000,
        avgScore: 24000
      }
    ]
  },
  {
    id: 'rot-season-69044A',
    seasonId: '69044A',
    name: 'Сезон 69044-Adv (Август – Сентябрь 2026)',
    dateRange: 'Август – Сентябрь 2026',
    startDate: '2026-08-28',
    endDate: '2026-09-11',
    status: 'archived',
    mode: 'Deadly Assault: Adversity Mode',
    description: 'Режим невзгод: Переписанный Багровый Чистильщик.',
    buffs: [
      {
        id: 'kinetic-burst',
        name: 'Kinetic Burst',
        ruName: 'Кинетический взрыв',
        description: 'Урон Электро и Физический повышен на 22%.',
        favoredAttribute: ['Electric', 'Physical'],
        favoredSpecialty: ['Attack', 'Stun'],
        bonusMultiplier: 0.22
      }
    ],
    rooms: [
      {
        roomNumber: 1,
        bossId: 'rewritten-sanguine-sweeper',
        bossName: 'Rewritten - Sanguine Sweeper',
        bossRuName: 'Переписанный Багровый Чистильщик',
        weaknesses: ['Electric', 'Physical'],
        resistances: ['Fire'],
        mechanicTitle: 'Sanguine Cleave',
        mechanicDescription: 'Парирование цепных атак сносит барьер.',
        favoredSpecialty: ['Attack', 'Stun'],
        targetScore: 20000,
        avgScore: 24000
      }
    ]
  },
  {
    id: 'rot-season-69043A',
    seasonId: '69043A',
    name: 'Сезон 69043-Adv (Август 2026)',
    dateRange: 'Август 2026',
    startDate: '2026-08-14',
    endDate: '2026-08-28',
    status: 'archived',
    mode: 'Deadly Assault: Adversity Mode',
    description: 'Режим невзгод: Sanguine Sweeper.',
    buffs: [
      {
        id: 'shockwave-surge',
        name: 'Shockwave Surge',
        ruName: 'Ударная волна',
        description: 'Урон Электро и Эфира повышен на 20%.',
        favoredAttribute: ['Electric', 'Ether'],
        favoredSpecialty: ['Attack'],
        bonusMultiplier: 0.20
      }
    ],
    rooms: [
      {
        roomNumber: 1,
        bossId: 'rewritten-sanguine-sweeper',
        bossName: 'Rewritten - Sanguine Sweeper',
        bossRuName: 'Переписанный Багровый Чистильщик',
        weaknesses: ['Electric', 'Ether'],
        resistances: ['Fire'],
        mechanicTitle: 'High Voltage',
        mechanicDescription: 'Шок снижает защиту босса на 30%.',
        favoredSpecialty: ['Attack', 'Stun'],
        targetScore: 20000,
        avgScore: 24000
      }
    ]
  },
  {
    id: 'rot-season-69042A',
    seasonId: '69042A',
    name: 'Сезон 69042-Adv (Июль – Август 2026)',
    dateRange: 'Июль – Август 2026',
    startDate: '2026-07-29',
    endDate: '2026-08-14',
    status: 'archived',
    mode: 'Deadly Assault: Adversity Mode',
    description: 'Режим невзгод: Integrated Girtablullu.',
    buffs: [
      {
        id: 'stagnant-chill',
        name: 'Stagnant Chill',
        ruName: 'Застойный холод',
        description: 'Урон Льда и Эфира повышен на 25%.',
        favoredAttribute: ['Ice', 'Ether'],
        favoredSpecialty: ['Anomaly'],
        bonusMultiplier: 0.25
      }
    ],
    rooms: [
      {
        roomNumber: 1,
        bossId: 'integrated-girtablullu',
        bossName: 'Integrated Girtablullu',
        bossRuName: 'Интегрированный Гиртаблуллу',
        weaknesses: ['Ice', 'Ether'],
        resistances: ['Physical'],
        mechanicTitle: 'Stagnant Mire',
        mechanicDescription: 'Босс замедляет передвижение. Разрушается аномалиями.',
        favoredSpecialty: ['Anomaly'],
        targetScore: 20000,
        avgScore: 24000
      }
    ]
  },
  {
    id: 'rot-season-69037',
    seasonId: '69037',
    name: 'Сезон 69037 (22 мая – 5 июня 2026)',
    dateRange: '22 мая – 5 июня 2026',
    startDate: '2026-05-22',
    endDate: '2026-06-05',
    status: 'archived',
    mode: 'Deadly Assault (Опасный штурм)',
    description: 'Классическая ротация штурма с Мясником, Е Шиюанем и Веспером.',
    buffs: [
      {
        id: 'butcher-crusher',
        name: 'Butcher Crusher',
        ruName: 'Крушитель Мясника',
        description: 'Урон Огня и Льда повышен на 20%.',
        favoredAttribute: ['Fire', 'Ice'],
        favoredSpecialty: ['Attack', 'Stun'],
        bonusMultiplier: 0.20
      },
      {
        id: 'thrall-breaker',
        name: 'Thrall Breaker',
        ruName: 'Сокрушитель Порабощённого',
        description: 'Урон Физический и Эфир повышен на 20%.',
        favoredAttribute: ['Physical', 'Ether'],
        favoredSpecialty: ['Attack', 'Stun'],
        bonusMultiplier: 0.20
      },
      {
        id: 'vesper-tempo',
        name: 'Vesper Tempo',
        ruName: 'Темп Веспера',
        description: 'Урон Электро и Ветра повышен на 20%.',
        favoredAttribute: ['Electric', 'Wind'],
        favoredSpecialty: ['Anomaly'],
        bonusMultiplier: 0.20
      }
    ],
    rooms: [
      {
        roomNumber: 1,
        bossId: 'notorious-dead-end-butcher',
        bossName: 'Notorious: Dead End Butcher',
        bossRuName: 'Мясник из Мёртвого тупика',
        weaknesses: ['Fire', 'Ice'],
        resistances: ['Ether'],
        mechanicTitle: 'Chop & Cleave',
        mechanicDescription: 'Огромный урон в окне стана.',
        favoredSpecialty: ['Attack', 'Stun'],
        targetScore: 20000,
        avgScore: 24000
      },
      {
        roomNumber: 2,
        bossId: 'ye-shiyuan-the-thrall',
        bossName: 'Ye Shiyuan the Thrall',
        bossRuName: 'Е Шиюань Порабощённый',
        weaknesses: ['Physical', 'Ether'],
        resistances: ['Fire'],
        mechanicTitle: 'Thrall Armor',
        mechanicDescription: 'Пробивание щита уязвимости.',
        favoredSpecialty: ['Attack', 'Stun'],
        targetScore: 20000,
        avgScore: 24000
      },
      {
        roomNumber: 3,
        bossId: 'discordant-solo-vesper',
        bossName: 'Discordant Solo: Vesper',
        bossRuName: 'Дисгармоничное соло — Веспер',
        weaknesses: ['Electric', 'Wind'],
        resistances: ['Physical'],
        mechanicTitle: 'Resonant Notes',
        mechanicDescription: 'Аномалии наносят повышенный урон.',
        favoredSpecialty: ['Anomaly'],
        targetScore: 20000,
        avgScore: 24000
      }
    ]
  },
  {
    id: 'rot-season-690361',
    seasonId: '690361',
    name: 'Сезон 69036 (8 мая – 22 мая 2026)',
    dateRange: '8 мая – 22 мая 2026',
    startDate: '2026-05-08',
    endDate: '2026-05-22',
    status: 'archived',
    mode: 'Deadly Assault (Опасный штурм)',
    description: 'Ротация штурма: Scorched Horizon, Wandering Hunter, The Defiler.',
    buffs: [
      {
        id: 'hunter-hunt',
        name: 'Hunter Hunt',
        ruName: 'Охотничий азарт',
        description: 'Урон Льда и Физический повышен на 22%.',
        favoredAttribute: ['Ice', 'Physical'],
        favoredSpecialty: ['Attack', 'Stun'],
        bonusMultiplier: 0.22
      }
    ],
    rooms: [
      {
        roomNumber: 1,
        bossId: 'scorched-horizon',
        bossName: 'Scorched Horizon',
        bossRuName: 'Обожжённый горизонт',
        weaknesses: ['Ice', 'Wind'],
        resistances: ['Physical'],
        mechanicTitle: 'Solar Flare',
        mechanicDescription: 'Снятие стаков огня.',
        favoredSpecialty: ['Anomaly'],
        targetScore: 20000,
        avgScore: 24000
      },
      {
        roomNumber: 2,
        bossId: 'wandering-hunter',
        bossName: 'Wandering Hunter',
        bossRuName: 'Блуждающий охотник',
        weaknesses: ['Ice', 'Physical'],
        resistances: ['Fire'],
        mechanicTitle: 'Phantom Ambush',
        mechanicDescription: 'Парирование из невидимости.',
        favoredSpecialty: ['Attack', 'Stun'],
        targetScore: 20000,
        avgScore: 24000
      },
      {
        roomNumber: 3,
        bossId: 'the-defiler',
        bossName: 'The Defiler',
        bossRuName: 'Осквернитель',
        weaknesses: ['Fire', 'Electric'],
        resistances: ['Ether'],
        mechanicTitle: 'Blighted Spores',
        mechanicDescription: 'Очищение спор огненным уроном.',
        favoredSpecialty: ['Attack', 'Anomaly'],
        targetScore: 20000,
        avgScore: 24000
      }
    ]
  },
  {
    id: 'rot-season-69035',
    seasonId: '69035',
    name: 'Сезон 69035 (24 апреля – 8 мая 2026)',
    dateRange: '24 апреля – 8 мая 2026',
    startDate: '2026-04-24',
    endDate: '2026-05-08',
    status: 'archived',
    mode: 'Deadly Assault (Опасный штурм)',
    description: 'Весенняя ротация штурма с Осквернителем.',
    buffs: [
      {
        id: 'purifying-light',
        name: 'Purifying Light',
        ruName: 'Очищающий свет',
        description: 'Урон Эфира и Огня повышен на 20%.',
        favoredAttribute: ['Fire', 'Ether'],
        favoredSpecialty: ['Attack'],
        bonusMultiplier: 0.20
      }
    ],
    rooms: [
      {
        roomNumber: 1,
        bossId: 'deadly-assault-boss-1',
        bossName: 'The Defiler (Осквернитель)',
        bossRuName: 'Осквернитель',
        weaknesses: ['Fire', 'Ether'],
        resistances: ['Ice'],
        mechanicTitle: 'Miasma Bloom',
        mechanicDescription: 'Быстрое рассеивание миазмов.',
        favoredSpecialty: ['Attack'],
        targetScore: 20000,
        avgScore: 24000
      }
    ]
  },
  {
    id: 'rot-season-69034',
    seasonId: '69034',
    name: 'Сезон 69034 (10 апреля – 24 апреля 2026)',
    dateRange: '10 апреля – 24 апреля 2026',
    startDate: '2026-04-10',
    endDate: '2026-04-24',
    status: 'archived',
    mode: 'Deadly Assault (Опасный штурм)',
    description: 'Ранняя ротация штурма с Веспером, Комплексом заражения и Е Шиюанем.',
    buffs: [
      {
        id: 'acoustic-vibe',
        name: 'Acoustic Vibe',
        ruName: 'Акустический резонанс',
        description: 'Урон Электро и Физический повышен на 20%.',
        favoredAttribute: ['Electric', 'Physical'],
        favoredSpecialty: ['Stun', 'Attack'],
        bonusMultiplier: 0.20
      }
    ],
    rooms: [
      {
        roomNumber: 1,
        bossId: 'discordant-solo-vesper',
        bossName: 'Discordant Solo - Vesper',
        bossRuName: 'Дисгармоничное соло — Веспер',
        weaknesses: ['Electric', 'Wind'],
        resistances: ['Physical'],
        mechanicTitle: 'Vesper Discord',
        mechanicDescription: 'Сбивание ритмических атак.',
        favoredSpecialty: ['Anomaly', 'Stun'],
        targetScore: 20000,
        avgScore: 24000
      },
      {
        roomNumber: 2,
        bossId: 'unknown-corruption-complex',
        bossName: 'Unknown Corruption Complex',
        bossRuName: 'Неизвестный комплекс заражения',
        weaknesses: ['Ice', 'Fire'],
        resistances: ['Ether'],
        mechanicTitle: 'Barrier Matrix',
        mechanicDescription: 'Разрушение защитной матрицы.',
        favoredSpecialty: ['Attack', 'Stun'],
        targetScore: 20000,
        avgScore: 24000
      },
      {
        roomNumber: 3,
        bossId: 'ye-shiyuan-the-thrall',
        bossName: 'Ye Shiyuan the Thrall',
        bossRuName: 'Е Шиюань Порабощённый',
        weaknesses: ['Physical', 'Ether'],
        resistances: ['Fire'],
        mechanicTitle: 'Thrall Suppression',
        mechanicDescription: 'Бурст-урон в оглушении.',
        favoredSpecialty: ['Attack', 'Stun'],
        targetScore: 20000,
        avgScore: 24000
      }
    ]
  }
];

newRotations.forEach(r => {
  if (!existingIds.has(r.id)) {
    rotations.push(r);
    existingIds.add(r.id);
  }
});

fs.writeFileSync(rotationsPath, JSON.stringify(rotations, null, 2), 'utf8');
console.log(`Successfully updated rotations.json! Total rotations: ${rotations.length}`);
