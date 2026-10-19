/**
 * Sync authentic runs from zzz-run-archive across the last 10 Deadly Assault rotations
 * Seasons: 69047, 69046, 69045, 69044, 69043, 69042, 69041, 69040, 69039, 69038
 */

const fs = require('fs');
const path = require('path');

const SEASONS = [
  69047, 69046, 69045, 69044, 69043,
  69042, 69041, 69040, 69039, 69038
];

// Clean Russian boss names mapping
const BOSS_RU_NAMES = {
  'phaethon-scorched-horizon': 'Паэтон обожжённого горизонта',
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
  'miasma priest': 'Жрец миазмов',
  'miasma-priest': 'Жрец миазмов',
  'discordant-solo-vesper': 'Дисгармоничное соло — Веспер',
  'unknown-corruption-complex': 'Неизвестный комплекс заражения'
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

  // Remove Chinese prefixes if present
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

async function syncAll10Seasons() {
  console.log(`[Archive Sync] Starting download of approved runs for ${SEASONS.length} rotations...`);
  const allRuns = [];
  const seenIds = new Set();
  const seasonStats = {};

  for (const seasonId of SEASONS) {
    seasonStats[seasonId] = 0;
    let cursor = 0;
    let hasMore = true;
    const limit = 200;

    console.log(`\n--- Fetching Season ${seasonId} ---`);

    while (hasMore) {
      const url = `https://zzz-run-archive.onrender.com/api/submissions?mode=Deadly%20Assault&seasonId=${seasonId}&limit=${limit}&cursor=${cursor}`;
      try {
        const res = await fetch(url);
        if (!res.ok) {
          console.warn(`Season ${seasonId} cursor ${cursor} returned HTTP ${res.status}`);
          break;
        }

        const data = await res.json();
        const submissions = data.submissions || [];
        if (submissions.length === 0) {
          hasMore = false;
          break;
        }

        for (const s of submissions) {
          if (!s.team || s.team.length < 3) continue;
          if (seenIds.has(s.id)) continue;
          seenIds.add(s.id);

          const { name: bossName, ruName: bossRuName, key: bossKey } = normalizeBossName(s.targetLabel, s.targetId);
          const roomNumber = parseRoomNumber(s.targetId);
          const score = Number(s.score || 0);
          const time = Number(s.timeSeconds || 90);
          const bossKilled = s.bossKilled !== false;

          let source = 'ZZZ Run Archive';
          if (s.videoUrl) {
            if (s.videoUrl.includes('youtu')) source = 'YouTube';
            else if (s.videoUrl.includes('bilibili')) source = 'Bilibili';
          }

          allRuns.push({
            id: s.id,
            seasonId: String(seasonId),
            rotationId: `rot-season-${seasonId}`,
            targetId: s.targetId || `${seasonId}-${roomNumber}`,
            roomNumber,
            bossId: bossKey,
            bossName,
            bossRuName,
            score,
            fullScore: score,
            bossKilled,
            timeSeconds: time,
            bangboo: s.bangbooName || 'Sharkboo',
            source,
            author: s.authorName || 'Anon',
            videoUrl: s.videoUrl || null,
            team: (s.team || []).map(tm => ({
              name: tm.agentName,
              mindscape: tm.mindscape ?? 0,
              weapon: tm.weaponName || '',
              refinement: tm.phase ?? 1
            }))
          });

          seasonStats[seasonId]++;
        }

        cursor = data.pagination?.nextCursor;
        hasMore = Boolean(data.pagination?.hasMore && cursor);
        console.log(`Season ${seasonId}: fetched ${submissions.length} runs (total so far: ${seasonStats[seasonId]})`);
      } catch (err) {
        console.error(`Error in season ${seasonId} at cursor ${cursor}:`, err.message);
        break;
      }
    }
  }

  console.log(`\n======================================================`);
  console.log(`[Archive Sync] Total unique authentic runs fetched: ${allRuns.length}`);
  console.log('Breakdown by season:');
  for (const s of SEASONS) {
    console.log(`  Season ${s}: ${seasonStats[s]} runs`);
  }
  const kills = allRuns.filter(r => r.bossKilled).length;
  const nonKills = allRuns.filter(r => !r.bossKilled).length;
  console.log(`  Kills (score ~65k): ${kills}`);
  console.log(`  Non-kills / Timeouts (score <65k): ${nonKills}`);
  console.log(`======================================================\n`);

  const outputPath = path.join(__dirname, 'data', 'runs.json');
  fs.writeFileSync(outputPath, JSON.stringify(allRuns, null, 2), 'utf8');
  console.log(`Saved ${allRuns.length} runs to ${outputPath}`);
  return allRuns;
}

if (require.main === module) {
  syncAll10Seasons().then(() => {
    console.log('Sync process completed successfully!');
    process.exit(0);
  }).catch(err => {
    console.error('Fatal sync error:', err);
    process.exit(1);
  });
}

module.exports = { syncAll10Seasons };
