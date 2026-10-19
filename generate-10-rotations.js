const fs = require('fs');
const path = require('path');

const runs = require('./data/runs.json');

// Map of boss metadata
const BOSS_META = {
  'phaethon-of-the-scorched-horizon': {
    id: 'phaethon-of-the-scorched-horizon',
    name: 'Phaethon of the Scorched Horizon',
    ruName: 'Паэтон обожжённого горизонта',
    weaknesses: ['Ice', 'Wind'],
    resistances: ['Physical'],
    mechanicTitle: 'Gale Scorcher & Into Flames',
    mechanicDescription: 'Босс вешает стаки Into Flames. Наложение Аномалий (Заморозка, Хаос, Цветение) быстро снимает стаки.',
    favoredSpecialty: ['Anomaly']
  },
  'infernal-revenant': {
    id: 'infernal-revenant',
    name: 'Infernal Revenant',
    ruName: 'Адский призрак (Ревенант)',
    weaknesses: ['Ice', 'Wind'],
    resistances: ['Physical'],
    mechanicTitle: 'Infernal State & Rain of Fire',
    mechanicDescription: 'Яростное состояние требует Цепных парирований. Огненный дождь тушится кристаллами кремня.',
    favoredSpecialty: ['Attack', 'Anomaly', 'Stun']
  },
  'kusarikku': {
    id: 'kusarikku',
    name: 'Kusarikku',
    ruName: 'Кусарикку',
    weaknesses: ['Fire', 'Electric'],
    resistances: ['Ice'],
    mechanicTitle: 'Corruptive Barrier & Rift Assault',
    mechanicDescription: 'Фиолетовый щит замораживает счёт. Защитная помощь из порталов сносит щит.',
    favoredSpecialty: ['Attack', 'Stun']
  },
  'ye-shiyuan-the-thrall': {
    id: 'ye-shiyuan-the-thrall',
    name: 'Ye Shiyuan the Thrall',
    ruName: 'Е Шиюань Порабощённый',
    weaknesses: ['Ice', 'Physical'],
    resistances: ['Ether'],
    mechanicTitle: 'Furious Clashes & Blade Dance',
    mechanicDescription: 'Агрессивный мечник. Ошеломление устрашителями раскрывает огромное окно для ледяных бурстов.',
    favoredSpecialty: ['Attack', 'Anomaly']
  },
  'miasmic-fiend-unfathomable': {
    id: 'miasmic-fiend-unfathomable',
    name: 'Miasmic Fiend: Unfathomable',
    ruName: 'Миазматический демон: Непостижимый',
    weaknesses: ['Electric', 'Ice'],
    resistances: ['Fire'],
    mechanicTitle: 'Abyssal Fog & Miasma Surge',
    mechanicDescription: 'Густой туман поглощает урон. Быстрое ошеломление электро-атаками сбивает призрачную форму.',
    favoredSpecialty: ['Attack', 'Stun']
  },
  'kitabulu-stagnant-aberrant-beast': {
    id: 'kitabulu-stagnant-aberrant-beast',
    name: 'Kitabulu, Stagnant Aberrant Beast',
    ruName: 'Китабулу: Застойный аберрант',
    weaknesses: ['Physical', 'Ether'],
    resistances: ['Electric'],
    mechanicTitle: 'Stone Hide & Stagnation Pulse',
    mechanicDescription: 'Тяжёлая каменная броня снижает обычный урон. Импульс тяжелых ударов крошит защиту.',
    favoredSpecialty: ['Attack', 'Stun']
  },
  'dead-end-butcher': {
    id: 'dead-end-butcher',
    name: 'Dead End Butcher',
    ruName: 'Мясник из Мёртвого тупика',
    weaknesses: ['Fire', 'Physical'],
    resistances: ['Ice'],
    mechanicTitle: 'Cleaver Frenzy & Seismic Slam',
    mechanicDescription: 'Медленные, но сокрушительные взмахи тесаком. Огненные взрывы и парирования прерывают ярость.',
    favoredSpecialty: ['Attack', 'Stun']
  },
  'notorious-dead-end-butcher': {
    id: 'notorious-dead-end-butcher',
    name: 'Notorious - Dead End Butcher',
    ruName: 'Мясник из Мёртвого тупика (Особый)',
    weaknesses: ['Fire', 'Physical'],
    resistances: ['Ice'],
    mechanicTitle: 'Unstoppable Cleave',
    mechanicDescription: 'Усиленная версия мясника с расширенными сериями ударов.',
    favoredSpecialty: ['Attack', 'Stun']
  },
  'girtablullu': {
    id: 'girtablullu',
    name: 'Girtablullu',
    ruName: 'Гиртаблуллу',
    weaknesses: ['Physical', 'Ether'],
    resistances: ['Electric'],
    mechanicTitle: 'Scorpion Shell & Stinger Barrage',
    mechanicDescription: 'Хвост скорпиона поливает ядом. Физические дробящие удары взламывают хитин.',
    favoredSpecialty: ['Attack', 'Anomaly']
  },
  'girtablullu-stagnant-aberrant': {
    id: 'girtablullu-stagnant-aberrant',
    name: 'Girtablullu - Stagnant Aberrant',
    ruName: 'Гиртаблуллу: Застойный аберрант',
    weaknesses: ['Physical', 'Ether'],
    resistances: ['Electric'],
    mechanicTitle: 'Aberrant Carapace',
    mechanicDescription: 'Усиленный панцирь. Эфирные аномалии и ошеломление лишают босса подвижности.',
    favoredSpecialty: ['Attack', 'Anomaly']
  },
  'primordial-nightmare-the-creator-': {
    id: 'primordial-nightmare-the-creator-',
    name: 'Primordial Nightmare - "The Creator"',
    ruName: 'Первородный кошмар — «Творец»',
    weaknesses: ['Ether', 'Electric'],
    resistances: ['Physical'],
    mechanicTitle: 'Reality Warp & Null Dimensions',
    mechanicDescription: 'Искажение реальности. Эфирные всплески сбивают защитные сингулярности.',
    favoredSpecialty: ['Anomaly', 'Support']
  },
  'miasma-priest': {
    id: 'miasma-priest',
    name: 'Miasma Priest',
    ruName: 'Жрец миазмов',
    weaknesses: ['Electric', 'Ice'],
    resistances: ['Physical'],
    mechanicTitle: 'Corrupt Ritual & Cursed Totems',
    mechanicDescription: 'Босс призывает ритуальные тотемы. Уничтожение тотемов повергает жреца в стан.',
    favoredSpecialty: ['Attack', 'Stun']
  },
  'unknown-corruption-complex': {
    id: 'unknown-corruption-complex',
    name: 'Unknown Corruption Complex',
    ruName: 'Неизвестный комплекс заражения',
    weaknesses: ['Electric', 'Ether'],
    resistances: ['Fire'],
    mechanicTitle: 'Corruption Core',
    mechanicDescription: 'Огромная туша, уязвимая к Электро и Эфиру. Быстро оглушается устрашителями.',
    favoredSpecialty: ['Attack', 'Stun']
  },
  'scorched-horizon': {
    id: 'scorched-horizon',
    name: 'Scorched Horizon',
    ruName: 'Обожжённый горизонт',
    weaknesses: ['Ice', 'Wind'],
    resistances: ['Fire'],
    mechanicTitle: 'Blazing Trail',
    mechanicDescription: 'Огненный фронт. Ледяные атаки гасят пламя.',
    favoredSpecialty: ['Anomaly', 'Attack']
  },
  'notorious-pompey': {
    id: 'notorious-pompey',
    name: 'Notorious - Pompey',
    ruName: 'Помпей (Особый)',
    weaknesses: ['Ice', 'Fire'],
    resistances: ['Physical'],
    mechanicTitle: 'Biker Rampage',
    mechanicDescription: 'Высокоскоростные заезды на мотоцикле. Требует точных таймингов уклонения.',
    favoredSpecialty: ['Stun', 'Attack']
  },
  'notorious-marionette': {
    id: 'notorious-marionette',
    name: 'Notorious - Marionette',
    ruName: 'Марионетка-близнец (Особая)',
    weaknesses: ['Ether', 'Electric'],
    resistances: ['Fire'],
    mechanicTitle: 'Puppet Strings & Dual Dance',
    mechanicDescription: 'Парный босс с разделением атак. Одновременный стан ускоряет залив урона.',
    favoredSpecialty: ['Attack', 'Stun']
  },
  'the-defiler': {
    id: 'the-defiler',
    name: 'The Defiler',
    ruName: 'Осквернитель',
    weaknesses: ['Ether', 'Ice'],
    resistances: ['Physical'],
    mechanicTitle: 'Defilement Aura',
    mechanicDescription: 'Периодически отравляет эфиром. Ледяная заморозка останавливает касты.',
    favoredSpecialty: ['Anomaly', 'Attack']
  }
};

// 10 seasonal rotations definition
const SEASONS_DATA = [
  {
    seasonId: '69047',
    dateRange: '9 октября – 23 октября 2026',
    startDate: '2026-10-09',
    endDate: '2026-10-23',
    status: 'active',
    description: 'Текущая ротация штурма. Упор на Лёд, Ветер и Аномалии в комнатах 1 и 2, Огонь и Электро в комнате 3.',
    buffs: [
      {
        id: 'frigidity',
        name: 'Frigidity (Оледенение)',
        ruName: 'Оледенение (Frigidity)',
        description: 'Увеличивает ледяной урон и знание аномалии. Срабатывание Цветения (Abloom) или Хаоса (Disorder) значительно повышает урон аномалий.',
        favoredAttribute: ['Ice'],
        favoredSpecialty: ['Anomaly'],
        bonusMultiplier: 0.22
      },
      {
        id: 'defense-crusher',
        name: 'Defense Crusher (Крушитель защиты)',
        ruName: 'Крушитель защиты (Defense Crusher)',
        description: 'Увеличивает наносимый импульс (Daze), силу атаки персонажей Нападения, а также дает огромный бонус к Крит. урону после применения Суперспособности.',
        favoredAttribute: [],
        favoredSpecialty: ['Attack', 'Stun'],
        bonusMultiplier: 0.20
      },
      {
        id: 'knife-edge',
        name: 'Knife Edge (Лезвие клинка)',
        ruName: 'Лезвие клинка (Knife Edge)',
        description: 'Повышает защиту, усиливает урон Электро и Ветра после Особых атак, увеличивает импульс Особых атак устрашителей.',
        favoredAttribute: ['Electric', 'Wind'],
        favoredSpecialty: ['Stun'],
        bonusMultiplier: 0.20
      }
    ]
  },
  {
    seasonId: '69046',
    dateRange: '25 сентября – 9 октября 2026',
    startDate: '2026-09-25',
    endDate: '2026-10-09',
    status: 'ended',
    description: 'Сезон 46: Кусарикку, Непостижимый демон и Е Шиюань.',
    buffs: [
      {
        id: 'disorder-storm',
        name: 'Disorder Storm (Шторм хаоса)',
        ruName: 'Шторм хаоса (Disorder Storm)',
        description: 'Увеличивает урон Хаоса на 35% и ускоряет накопление аномалии при частой смене персонажей.',
        favoredAttribute: [],
        favoredSpecialty: ['Anomaly', 'Support'],
        bonusMultiplier: 0.22
      },
      {
        id: 'defense-crusher',
        name: 'Defense Crusher (Крушитель защиты)',
        ruName: 'Крушитель защиты (Defense Crusher)',
        description: 'Увеличивает импульс и бонус к Крит. урону после Суперспособности.',
        favoredAttribute: [],
        favoredSpecialty: ['Attack', 'Stun'],
        bonusMultiplier: 0.20
      },
      {
        id: 'knife-edge',
        name: 'Knife Edge (Лезвие клинка)',
        ruName: 'Лезвие клинка (Knife Edge)',
        description: 'Усиливает урон Электро и Ветра после Особых атак.',
        favoredAttribute: ['Electric', 'Wind'],
        favoredSpecialty: ['Stun'],
        bonusMultiplier: 0.20
      }
    ]
  },
  {
    seasonId: '69045',
    dateRange: '11 сентября – 25 сентября 2026',
    startDate: '2026-09-11',
    endDate: '2026-09-25',
    status: 'ended',
    description: 'Сезон 45: Кусарикку, Китабулу и Е Шиюань.',
    buffs: [
      {
        id: 'rupture-force',
        name: 'Rupture Force (Сила пробития)',
        ruName: 'Сила пробития (Rupture Force)',
        description: 'Повышает пробивание защиты на 25% и усиливает критический урон по оглушённым целям.',
        favoredAttribute: [],
        favoredSpecialty: ['Attack', 'Stun'],
        bonusMultiplier: 0.20
      },
      {
        id: 'ether-flux',
        name: 'Ether Flux (Поток эфира)',
        ruName: 'Поток эфира (Ether Flux)',
        description: 'Усиливает эфирный и физический урон при непрерывных сериях ударов.',
        favoredAttribute: ['Ether', 'Physical'],
        favoredSpecialty: ['Attack'],
        bonusMultiplier: 0.22
      },
      {
        id: 'frigidity',
        name: 'Frigidity (Оледенение)',
        ruName: 'Оледенение (Frigidity)',
        description: 'Увеличивает ледяной урон и знание аномалии.',
        favoredAttribute: ['Ice'],
        favoredSpecialty: ['Anomaly'],
        bonusMultiplier: 0.22
      }
    ]
  },
  {
    seasonId: '69044',
    dateRange: '28 августа – 11 сентября 2026',
    startDate: '2026-08-28',
    endDate: '2026-09-11',
    status: 'ended',
    description: 'Сезон 44: Мясник из Мёртвого тупика, Гиртаблуллу и Первородный кошмар.',
    buffs: [
      {
        id: 'flame-frenzy',
        name: 'Flame Frenzy (Огненное неистовство)',
        ruName: 'Огненное неистовство (Flame Frenzy)',
        description: 'Усиливает урон огня и ускоряет накопление энергии при горении.',
        favoredAttribute: ['Fire'],
        favoredSpecialty: ['Attack', 'Anomaly'],
        bonusMultiplier: 0.22
      },
      {
        id: 'defense-crusher',
        name: 'Defense Crusher (Крушитель защиты)',
        ruName: 'Крушитель защиты (Defense Crusher)',
        description: 'Увеличивает импульс и бонус к Крит. урону.',
        favoredAttribute: [],
        favoredSpecialty: ['Attack', 'Stun'],
        bonusMultiplier: 0.20
      },
      {
        id: 'ether-flux',
        name: 'Ether Flux (Поток эфира)',
        ruName: 'Поток эфира (Ether Flux)',
        description: 'Усиливает эфирный урон.',
        favoredAttribute: ['Ether'],
        favoredSpecialty: ['Anomaly'],
        bonusMultiplier: 0.20
      }
    ]
  },
  {
    seasonId: '69043',
    dateRange: '14 августа – 28 августа 2026',
    startDate: '2026-08-14',
    endDate: '2026-08-28',
    status: 'ended',
    description: 'Сезон 43: Гиртаблуллу (Застойный), Е Шиюань и Жрец миазмов.',
    buffs: [
      {
        id: 'frigidity',
        name: 'Frigidity (Оледенение)',
        ruName: 'Оледенение (Frigidity)',
        description: 'Увеличивает ледяной урон и знание аномалии.',
        favoredAttribute: ['Ice'],
        favoredSpecialty: ['Anomaly'],
        bonusMultiplier: 0.22
      },
      {
        id: 'knife-edge',
        name: 'Knife Edge (Лезвие клинка)',
        ruName: 'Лезвие клинка (Knife Edge)',
        description: 'Усиливает урон Электро и Ветра.',
        favoredAttribute: ['Electric', 'Wind'],
        favoredSpecialty: ['Stun'],
        bonusMultiplier: 0.20
      },
      {
        id: 'defense-crusher',
        name: 'Defense Crusher (Крушитель защиты)',
        ruName: 'Крушитель защиты (Defense Crusher)',
        description: 'Увеличивает импульс персонажей Нападения.',
        favoredAttribute: [],
        favoredSpecialty: ['Attack'],
        bonusMultiplier: 0.20
      }
    ]
  },
  {
    seasonId: '69042',
    dateRange: '29 июля – 14 августа 2026',
    startDate: '2026-07-29',
    endDate: '2026-08-14',
    status: 'ended',
    description: 'Сезон 42: Гиртаблуллу (Застойный), Особый Мясник и Комплекс заражения.',
    buffs: [
      {
        id: 'defense-crusher',
        name: 'Defense Crusher (Крушитель защиты)',
        ruName: 'Крушитель защиты (Defense Crusher)',
        description: 'Увеличивает импульс и крит. урон.',
        favoredAttribute: [],
        favoredSpecialty: ['Attack', 'Stun'],
        bonusMultiplier: 0.20
      },
      {
        id: 'flame-frenzy',
        name: 'Flame Frenzy (Огненное неистовство)',
        ruName: 'Огненное неистовство (Flame Frenzy)',
        description: 'Усиливает урон Огня и Электро.',
        favoredAttribute: ['Fire', 'Electric'],
        favoredSpecialty: ['Attack'],
        bonusMultiplier: 0.22
      },
      {
        id: 'ether-flux',
        name: 'Ether Flux (Поток эфира)',
        ruName: 'Поток эфира (Ether Flux)',
        description: 'Усиливает эфирный урон.',
        favoredAttribute: ['Ether'],
        favoredSpecialty: ['Anomaly'],
        bonusMultiplier: 0.20
      }
    ]
  },
  {
    seasonId: '69041',
    dateRange: '17 июля – 31 июля 2026',
    startDate: '2026-07-17',
    endDate: '2026-07-31',
    status: 'ended',
    description: 'Сезон 41: Обожжённый горизонт, Особый Помпей и Непостижимый демон.',
    buffs: [
      {
        id: 'frigidity',
        name: 'Frigidity (Оледенение)',
        ruName: 'Оледенение (Frigidity)',
        description: 'Увеличивает ледяной урон и знание аномалии.',
        favoredAttribute: ['Ice'],
        favoredSpecialty: ['Anomaly'],
        bonusMultiplier: 0.22
      },
      {
        id: 'knife-edge',
        name: 'Knife Edge (Лезвие клинка)',
        ruName: 'Лезвие клинка (Knife Edge)',
        description: 'Усиливает урон Электро и Ветра.',
        favoredAttribute: ['Electric', 'Wind'],
        favoredSpecialty: ['Stun'],
        bonusMultiplier: 0.20
      },
      {
        id: 'disorder-storm',
        name: 'Disorder Storm (Шторм хаоса)',
        ruName: 'Шторм хаоса (Disorder Storm)',
        description: 'Увеличивает урон Хаоса на 35%.',
        favoredAttribute: [],
        favoredSpecialty: ['Anomaly'],
        bonusMultiplier: 0.20
      }
    ]
  },
  {
    seasonId: '69040',
    dateRange: '3 июля – 17 июля 2026',
    startDate: '2026-07-03',
    endDate: '2026-07-17',
    status: 'ended',
    description: 'Сезон 40: Гиртаблуллу, Первородный кошмар и Е Шиюань.',
    buffs: [
      {
        id: 'ether-flux',
        name: 'Ether Flux (Поток эфира)',
        ruName: 'Поток эфира (Ether Flux)',
        description: 'Усиливает эфирный и физический урон.',
        favoredAttribute: ['Ether', 'Physical'],
        favoredSpecialty: ['Attack', 'Anomaly'],
        bonusMultiplier: 0.22
      },
      {
        id: 'frigidity',
        name: 'Frigidity (Оледенение)',
        ruName: 'Оледенение (Frigidity)',
        description: 'Увеличивает ледяной урон.',
        favoredAttribute: ['Ice'],
        favoredSpecialty: ['Attack'],
        bonusMultiplier: 0.20
      },
      {
        id: 'defense-crusher',
        name: 'Defense Crusher (Крушитель защиты)',
        ruName: 'Крушитель защиты (Defense Crusher)',
        description: 'Увеличивает импульс персонажей Нападения.',
        favoredAttribute: [],
        favoredSpecialty: ['Attack', 'Stun'],
        bonusMultiplier: 0.20
      }
    ]
  },
  {
    seasonId: '69039',
    dateRange: '19 июня – 3 июля 2026',
    startDate: '2026-06-19',
    endDate: '2026-07-03',
    status: 'ended',
    description: 'Сезон 39: Гиртаблуллу, Особая Марионетка и Е Шиюань.',
    buffs: [
      {
        id: 'defense-crusher',
        name: 'Defense Crusher (Крушитель защиты)',
        ruName: 'Крушитель защиты (Defense Crusher)',
        description: 'Увеличивает импульс и крит. урон.',
        favoredAttribute: [],
        favoredSpecialty: ['Attack', 'Stun'],
        bonusMultiplier: 0.20
      },
      {
        id: 'knife-edge',
        name: 'Knife Edge (Лезвие клинка)',
        ruName: 'Лезвие клинка (Knife Edge)',
        description: 'Усиливает урон Электро и Эфира.',
        favoredAttribute: ['Electric', 'Ether'],
        favoredSpecialty: ['Attack'],
        bonusMultiplier: 0.20
      },
      {
        id: 'frigidity',
        name: 'Frigidity (Оледенение)',
        ruName: 'Оледенение (Frigidity)',
        description: 'Увеличивает ледяной урон.',
        favoredAttribute: ['Ice'],
        favoredSpecialty: ['Anomaly'],
        bonusMultiplier: 0.20
      }
    ]
  },
  {
    seasonId: '69038',
    dateRange: '5 июня – 19 июня 2026',
    startDate: '2026-06-05',
    endDate: '2026-06-19',
    status: 'ended',
    description: 'Сезон 38: Непостижимый демон, Е Шиюань и Осквернитель.',
    buffs: [
      {
        id: 'frigidity',
        name: 'Frigidity (Оледенение)',
        ruName: 'Оледенение (Frigidity)',
        description: 'Увеличивает ледяной урон и знание аномалии.',
        favoredAttribute: ['Ice'],
        favoredSpecialty: ['Anomaly'],
        bonusMultiplier: 0.22
      },
      {
        id: 'ether-flux',
        name: 'Ether Flux (Поток эфира)',
        ruName: 'Поток эфира (Ether Flux)',
        description: 'Усиливает эфирный урон.',
        favoredAttribute: ['Ether'],
        favoredSpecialty: ['Attack', 'Anomaly'],
        bonusMultiplier: 0.20
      },
      {
        id: 'defense-crusher',
        name: 'Defense Crusher (Крушитель защиты)',
        ruName: 'Крушитель защиты (Defense Crusher)',
        description: 'Увеличивает импульс и крит. урон.',
        favoredAttribute: [],
        favoredSpecialty: ['Attack', 'Stun'],
        bonusMultiplier: 0.20
      }
    ]
  }
];

// Determine rooms for each season from runs
const seasonsMap = {};
runs.forEach(r => {
  if (!seasonsMap[r.seasonId]) seasonsMap[r.seasonId] = {};
  const room = r.roomNumber || 1;
  if (!seasonsMap[r.seasonId][room] || seasonsMap[r.seasonId][room].count < 1) {
    seasonsMap[r.seasonId][room] = { bossId: r.bossId, bossName: r.bossName, bossRuName: r.bossRuName, count: 0 };
  }
  seasonsMap[r.seasonId][room].count++;
});

const finalRotations = SEASONS_DATA.map(s => {
  const rooms = [1, 2, 3].map(roomNum => {
    const rInfo = seasonsMap[s.seasonId]?.[roomNum] || { bossId: 'kusarikku', bossName: 'Kusarikku', bossRuName: 'Кусарикку' };
    const meta = BOSS_META[rInfo.bossId] || {
      id: rInfo.bossId,
      name: rInfo.bossName,
      ruName: rInfo.bossRuName || rInfo.bossName,
      weaknesses: ['Ice', 'Wind'],
      resistances: ['Physical'],
      mechanicTitle: 'Endgame Assault',
      mechanicDescription: 'Босс высокого уровня сложности.',
      favoredSpecialty: ['Attack', 'Anomaly']
    };

    return {
      roomNumber: roomNum,
      bossId: meta.id,
      bossName: meta.name,
      bossRuName: meta.ruName,
      weaknesses: meta.weaknesses,
      resistances: meta.resistances,
      mechanicTitle: meta.mechanicTitle,
      mechanicDescription: meta.mechanicDescription,
      favoredSpecialty: meta.favoredSpecialty,
      targetScore: 20000,
      avgScore: 24000
    };
  });

  return {
    id: `rot-season-${s.seasonId}`,
    seasonId: s.seasonId,
    name: `Сезон ${s.seasonId} (${s.dateRange})`,
    dateRange: s.dateRange,
    startDate: s.startDate,
    endDate: s.endDate,
    status: s.status,
    mode: 'Deadly Assault (Опасный штурм)',
    description: s.description,
    buffs: s.buffs,
    rooms
  };
});

fs.writeFileSync(path.join(__dirname, 'data', 'rotations.json'), JSON.stringify(finalRotations, null, 2), 'utf8');
console.log(`Successfully generated rotations.json with all ${finalRotations.length} rotations!`);
