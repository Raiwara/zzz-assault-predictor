/**
 * Comprehensive Archive Sync Script
 * Fetches 20 Deadly Assault seasons from zzz-run-archive and nexus-shiyu.com/runs?tab=archive.
 */

const fs = require('fs');
const path = require('path');

const SEASONS = [
  '69047', '690471', '69046', '69046A', '69045', '69045A',
  '69044', '69044A', '69043', '69043A', '69042', '69042A',
  '69041', '69040', '69039', '69038', '69037', '690361',
  '69035', '69034'
];

// Clean Russian boss names mapping
const BOSS_RU_NAMES = {
  'phaethon-scorched-horizon': 'Паэтон обожжённого горизонта',
  'phaethon-of-the-scorched-horizon': 'Паэтон обожжённого горизонта',
  'infernal-revenant': 'Адский призрак (Ревенант)',
  'kusarikku': 'Кусарикку',
  'integrated-girtablullu': 'Интегрированный Гиртаблуллу',
  'girtablullu': 'Гиртаблуллу',
  'girtablullu - stagnant aberrant': 'Гиртаблуллу: Застойный аберрант',
  'girtablullu-stagnant-aberrant': 'Гиртаблуллу: Застойный аберрант',
  'miasmic-fiend-unfathomable': 'Миазматический демон: Непостижимый',
  'miasmic fiend - unfathomable': 'Миазматический демон: Непостижимый',
  'ye-shiyuan-thrall': 'Е Шиюань Порабощённый',
  'ye shiyuan the thrall': 'Е Шиюань Порабощённый',
  'dead end butcher': 'Мясник из Мёртвого тупика',
  'dead-end-butcher': 'Мясник из Мёртвого тупика',
  'notorious-dead-end-butcher': 'Мясник из Мёртвого тупика',
  'miasma priest': 'Жрец миазмов',
  'miasma-priest': 'Жрец миазмов',
  'discordant-solo-vesper': 'Дисгармоничное соло — Веспер',
  'unknown-corruption-complex': 'Неизвестный комплекс заражения'
};

const NEXUS_CHAR_MAP = {
  "Sigrid de L'Azur": 'Sigrid',
  'Roxy Ifrita Pryce': 'Roxy',
  'Zhao': 'Zhao',
  'Sunna': 'Sunna',
  'Yidhari Murphy': 'Yidhari',
  'Jane Doe': 'Jane',
  'Astra Yao': 'Astra Yao',
  'Hugo Vlad': 'Hugo',
  'Nicole Demara': 'Nicole',
  'Soldier 0 - Anby': 'Soldier 0 - Anby',
  'Trigger': 'Trigger',
  'Orphie Magnusson & Magus': 'Orphie & Magus',
  'Claret Flint': 'Claret',
  'Alexandrina Sebastiane': 'Rina',
  'Yixuan': 'Yixuan',
  'Norma Hollowell': 'Norma',
  'Lucia Elowen': 'Lucia',
  'Pyrois': 'Pyrois',
  'Dialyn': 'Dialyn',
  'Von Lycaon': 'Lycaon',
  'Remielle Dan': 'Remielle',
  'Promeia': 'Promeia',
  'Velina Airgid': 'Velina',
  'Koleda Belobog': 'Koleda',
  'Ellen Joe': 'Ellen',
  'Cissia': 'Cissia',
  'Nekomiya Mana': 'Nekomata',
  'Burnice White': 'Burnice',
  'Aria': 'Aria',
  'Ye Shunguang': 'Ye Shunguang',
  'Lighter': 'Lighter',
  'Hoshimi Miyabi': 'Miyabi',
  'Vivian Banshee': 'Vivian',
  'Nangong Yu': 'Nangong Yu',
  'Ukinami Yuzuha': 'Yuzuha',
  'Soukaku': 'Soukaku',
  'Tsukishiro Yanagi': 'Yanagi',
  'Zhu Yuan': 'Zhu Yuan',
  'Evelyn Chevalier': 'Evelyn',
  'Qingyi': 'Qingyi',
  'Ben Bigger': 'Ben',
  'Banyue': 'Banyue',
  'Alice Thymefield': 'Alice',
  'Luciana de Montefio': 'Lucy',
  'Asaba Harumasa': 'Harumasa',
  'Starlight - Billy': 'Starlight - Billy',
  'Piper': 'Piper',
  'Komano Manato': 'Manato',
  'Pan Yinhu': 'Pan Yinhu',
  'Ju Fufu': 'Ju Fufu',
  'Grace Howard': 'Grace',
  'Anby Demara': 'Anby',
  'Pulchra Fellini': 'Pulchra',
  'Soldier 11': 'Soldier 11'
};

const NEXUS_AMP_MAP = {
  'Ход конём': "Spectral Gaze",
  'Багряный гроб': 'Scarlet Sarcophagus',
  'Сладковатая зайка': 'Sweet Bunny',
  'Мысли в бит': 'Thoughts in Beat',
  'Колыбель кракена': "Kraken's Cradle",
  'Полёт среди грёз': 'Flight of Fancy',
  'Стильная штучка': 'Elegant Vanity',
  'Солярный экзувий': 'Sol Exuvia',
  'Пароварка': 'Steam Oven',
  'Бум-пушка': 'Kaboom the Cannon',
  'Чистота утраты': 'Purity of Loss',
  'Призрачный взор': 'Spectral Gaze',
  'Пламя брани': 'Bellicose Blaze',
  'Алая Жажда': 'Marcato Desire',
  'Колыбель плача': 'Weeping Cradle',
  'Клетка Небесной птицы': 'Birdcage of Heaven',
  'Старший ассистент': 'Chief Sidekick',
  'Очаг грёз': 'Heartstring Nocturne',
  'Сундук сокровищ': 'The Vault',
  'Тысяча затмений': 'Myriad Eclipse',
  'Шестерни адского пламени': 'Hellfire Gears',
  'Драгоценная окаменелость': 'Precious Fossilized Core',
  'Ода о возвращении крыльев': 'Ode of Resurrected Wings',
  'Неоновое наваждение': 'Neon Fantasies',
  'Драгоценная прохлада': 'Joyau Dore',
  'Оригинальный трансформатор': 'Original Transfuser',
  'Рептилокатор': 'Reptilocator',
  'Стальная лапа': 'Steel Cushion',
  'Шейкер-огнемейкер': 'Flamemaker Shaker',
  'Душа в доспехах': 'Angel in the Shell',
  'Звонок из прошлого': 'Yesterday Calls',
  'Бур — красная ось': 'Cannon Rotor',
  'Проблеск в облаках': 'Cloudcleave Radiance',
  'Пламенный венец': 'Blazing Laurel',
  'Храм вьюги': 'Hailstorm Shrine',
  'Ледяное новолуние': 'Frostfall Sickle',
  'Плачущие близнецы': 'Weeping Gemini',
  'Электроблеск для губ': 'Electro-Lip Gloss',
  'Чайник нефритовой чистоты': 'Ice-Jade Teapot',
  'Тадам-барабан': 'Boisterous Echoes',
  'Сдержанность': 'The Restrained',
  'Сера': 'The Brimstone',
  'Струны ночи': 'Heartstring Nocturne',
  'Семь уловок тануки': 'Metanukimorphosis',
  'Ткач времени': 'Timeweaver',
  'Заячья корзинка': 'Big Cylinder',
  'Встроенный компилятор': 'Fusion Compiler',
  'Котик удачи': 'Housekeeper',
  'Треножник поднебесья': 'Tripod of Heaven',
  'Всесторонняя отточенность': 'Sharpened Edge',
  'Рукотворное сердце': 'Riot Suppressor Mark VI',
  'Мяч для игры без правил': 'Unfettered Game Ball',
  'Звёздное забрало': 'Starlight Visor',
  'Заострённые шипы': 'Sharpened Fang',
  'Жарево заката': 'Sunset Sizzle',
  'Триграмма Гром': 'Trigram Thunder',
  'Ревущая тачка': 'Roaring Ride',
  'Звёздный двигатель': 'Starlight Engine',
  'Грозный страж': 'Formidable Guard'
};

function normalizeBossName(rawLabel, targetId) {
  let name = '';
  if (rawLabel && rawLabel.includes('|')) {
    name = rawLabel.split('|')[1].trim();
  } else if (rawLabel) {
    name = rawLabel.trim();
  } else {
    name = 'Deadly Assault Boss';
  }
  name = name.replace(/^[^\w\s\-:]+/, '').trim();
  if (!name) name = 'Deadly Assault Boss';

  const cleanKey = name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  const ruName = BOSS_RU_NAMES[cleanKey] || BOSS_RU_NAMES[name.toLowerCase()] || name;
  return { name, ruName, key: cleanKey };
}

function parseRoomNumber(targetId) {
  if (!targetId) return 1;
  const parts = targetId.split('-');
  if (parts.length >= 2) {
    const num = parseInt(parts[parts.length - 1], 10);
    if (!isNaN(num) && num >= 1 && num <= 3) return num;
  }
  return 1;
}

async function syncAll() {
  console.log('=== Starting Master Sync of 20 Deadly Assault Rotations + Nexus Shiyu ===');
  const allRuns = [];
  const seenIds = new Set();
  const seenVideoUrls = new Set();

  // 1. Fetch from zzz-run-archive.onrender.com for all 20 seasons
  for (const seasonId of SEASONS) {
    let cursor = 0;
    let hasMore = true;
    const limit = 200;
    let countSeason = 0;

    console.log(`Fetching season ${seasonId}...`);

    while (hasMore) {
      const url = `https://zzz-run-archive.onrender.com/api/submissions?seasonId=${seasonId}&limit=${limit}&cursor=${cursor}`;
      try {
        const res = await fetch(url);
        if (!res.ok) break;

        const data = await res.json();
        const subs = data.submissions || [];
        if (subs.length === 0) {
          hasMore = false;
          break;
        }

        for (const s of subs) {
          if (!s.team || s.team.length < 3) continue;
          if (seenIds.has(s.id)) continue;
          seenIds.add(s.id);
          if (s.videoUrl) seenVideoUrls.add(s.videoUrl.trim());

          const { name: bossName, ruName: bossRuName, key: bossKey } = normalizeBossName(s.targetLabel, s.targetId);
          const roomNum = parseRoomNumber(s.targetId);

          const timeSec = s.timeSeconds !== undefined && s.timeSeconds !== null
            ? s.timeSeconds
            : (s.score === 65000 ? 175 : 180);

          allRuns.push({
            id: s.id,
            seasonId: String(seasonId),
            rotationId: `rot-season-${seasonId}`,
            targetId: s.targetId || `${seasonId}-${roomNum}`,
            roomNumber: roomNum,
            bossId: bossKey || 'deadly-assault-boss',
            bossName,
            bossRuName,
            score: s.score || 0,
            fullScore: s.score || 0,
            bossKilled: s.score === 65000 && timeSec < 180,
            timeSeconds: timeSec,
            bangboo: s.bangboo || 'Sharkboo',
            source: s.source || 'Bilibili',
            author: s.author || 'Anonymous',
            videoUrl: s.videoUrl || '',
            team: s.team.map(m => ({
              name: m.agentName || m.name || '',
              mindscape: m.mindscape || 0,
              weapon: m.weaponName || m.weapon || '',
              refinement: m.phase || m.refinement || 1
            })),
            cost: typeof s.cost === 'number' ? s.cost : 5
          });
          countSeason++;
        }

        cursor += subs.length;
        if (cursor >= (data.pagination?.total || 0)) {
          hasMore = false;
        }
      } catch (e) {
        console.error(`Error season ${seasonId}:`, e.message);
        break;
      }
    }
    console.log(`  -> Season ${seasonId}: synced ${countSeason} runs.`);
  }

  console.log(`\n=== Total runs from zzz-run-archive: ${allRuns.length} ===`);

  // 2. Fetch from nexus-shiyu.com /api/runs?tab=archive
  console.log('\n=== Fetching from nexus-shiyu.com/runs?tab=archive ===');
  let nexusOffset = 0;
  let nexusAdded = 0;

  while (true) {
    try {
      const res = await fetch(`https://nexus-shiyu.com/api/runs?tab=archive&offset=${nexusOffset}`, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      if (!res.ok) break;

      const data = await res.json();
      const runs = data.runs || [];
      if (runs.length === 0) break;

      for (const nr of runs) {
        if (!nr.agents || nr.agents.length < 3) continue;
        if (seenIds.has(nr.id)) continue;
        if (nr.videoUrl && seenVideoUrls.has(nr.videoUrl.trim())) continue;

        seenIds.add(nr.id);
        if (nr.videoUrl) seenVideoUrls.add(nr.videoUrl.trim());

        const bossRawName = nr.enemyName || nr.enemy?.name || 'Deadly Assault Boss';
        const { name: bossName, ruName: bossRuName, key: bossKey } = normalizeBossName(bossRawName, '');
        const roomNum = nr.room || 1;

        const score = typeof nr.result === 'number' ? nr.result : 65000;
        const timeSec = typeof nr.clearTime === 'number' && nr.clearTime > 0
          ? nr.clearTime
          : (score >= 64000 ? 175 : 180);

        const bangboo = nr.bangboo?.nameEn || nr.bangboo?.nameRu || 'Sharkboo';

        const team = nr.agents.map(a => {
          const rawChar = a.character?.nameEn || a.character?.nameRu || '';
          const cleanChar = NEXUS_CHAR_MAP[rawChar] || rawChar.split(' ')[0];
          const rawAmp = a.amplifier?.nameRu || a.amplifier?.nameEn || '';
          const cleanAmp = NEXUS_AMP_MAP[rawAmp] || rawAmp;
          return {
            name: cleanChar,
            mindscape: a.mindscape || 0,
            weapon: cleanAmp,
            refinement: 1
          };
        });

        allRuns.push({
          id: nr.id,
          seasonId: 'nexus-archive',
          rotationId: 'rot-nexus-archive',
          targetId: `nexus-${roomNum}`,
          roomNumber: roomNum,
          bossId: bossKey || 'deadly-assault-boss',
          bossName,
          bossRuName,
          score,
          fullScore: score,
          bossKilled: score >= 65000 && timeSec < 180,
          timeSeconds: timeSec,
          bangboo,
          source: nr.videoUrl?.includes('youtu') ? 'YouTube' : 'Nexus Shiyu',
          author: nr.user?.displayName || 'Nexus Runner',
          videoUrl: nr.videoUrl || '',
          team,
          cost: typeof nr.totalCost === 'number' ? nr.totalCost : 5
        });
        nexusAdded++;
      }

      nexusOffset += runs.length;
      if (!data.hasMore) break;
    } catch (e) {
      console.error('Error fetching nexus-shiyu:', e.message);
      break;
    }
  }

  console.log(`  -> Added ${nexusAdded} runs from Nexus Shiyu.`);
  console.log(`\n=================================================`);
  console.log(`GRAND TOTAL RUNS: ${allRuns.length}`);
  console.log(`=================================================`);

  // Save to data/runs.json
  const runsPath = path.join(__dirname, '../data/runs.json');
  fs.writeFileSync(runsPath, JSON.stringify(allRuns, null, 2), 'utf8');
  console.log(`Saved ${allRuns.length} runs to ${runsPath}.`);

  return allRuns;
}

syncAll().catch(console.error);
