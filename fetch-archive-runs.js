const fs = require('fs');
const path = require('path');

const TARGETS = [
  // Season 69047 (Current active rotation: Oct 09 - Oct 23)
  { id: '69047-1', bossId: 'phaethon-scorched-horizon', bossName: 'Phaethon of the Scorched Horizon', bossRuName: 'Паэтон обожжённого горизонта', roomNumber: 1, rotId: 'rot-2025-10-08' },
  { id: '69047-2', bossId: 'infernal-revenant', bossName: 'Infernal Revenant', bossRuName: 'Адский призрак (Ревенант)', roomNumber: 2, rotId: 'rot-2025-10-08' },
  { id: '69047-3', bossId: 'kusarikku', bossName: 'Kusarikku', bossRuName: 'Кусарикку', roomNumber: 3, rotId: 'rot-2025-10-08' },
  { id: '690471-1', bossId: 'integrated-girtablullu', bossName: 'Integrated Girtablullu', bossRuName: 'Интегрированный Гиртаблуллу', roomNumber: 1, rotId: 'rot-2025-10-08' },
  
  // Season 69046 (Previous rotation: Sep 25 - Oct 09)
  { id: '69046-1', bossId: 'kusarikku', bossName: 'Kusarikku', bossRuName: 'Кусарикку', roomNumber: 1, rotId: 'rot-2025-09-24' },
  { id: '69046-2', bossId: 'miasmic-fiend-unfathomable', bossName: 'Miasmic Fiend: Unfathomable', bossRuName: 'Миазматический демон: Непостижимый', roomNumber: 2, rotId: 'rot-2025-09-24' },
  { id: '69046-3', bossId: 'ye-shiyuan-thrall', bossName: 'Ye Shiyuan the Thrall', bossRuName: 'Е Шиюань Порабощённый', roomNumber: 3, rotId: 'rot-2025-09-24' }
];

async function fetchAllSubmissions(maxRunsPerTarget = 200) {
  console.log(`[Archive Sync] Fetching authentic submissions across ${TARGETS.length} Deadly Assault targets...`);
  
  const allRuns = [];
  const seenIds = new Set();

  for (const t of TARGETS) {
    try {
      const url = `https://zzz-run-archive.onrender.com/api/submissions?status=approved&targetId=${t.id}&limit=${maxRunsPerTarget}`;
      console.log(`[Archive Sync] Fetching target ${t.id} (${t.bossName})...`);
      const res = await fetch(url);
      if (!res.ok) {
        console.warn(`[Archive Sync] Target ${t.id} failed with HTTP ${res.status}`);
        continue;
      }
      const data = await res.json();
      const submissions = data.submissions || [];
      console.log(`[Archive Sync] Received ${submissions.length} submissions for ${t.id}`);

      for (const s of submissions) {
        if (!s.team || s.team.length < 3) continue;
        if (seenIds.has(s.id)) continue;
        seenIds.add(s.id);

        const score = Number(s.score || 0);
        const time = Number(s.timeSeconds || 90);
        const bossKilled = s.bossKilled !== false;

        allRuns.push({
          id: s.id,
          rotationId: t.rotId,
          roomNumber: t.roomNumber,
          bossId: t.bossId,
          bossName: t.bossName,
          bossRuName: t.bossRuName,
          score: score,
          fullScore: score,
          bossKilled: bossKilled,
          timeSeconds: time,
          bangboo: s.bangbooName || 'Sharkboo',
          source: s.videoUrl && s.videoUrl.includes('youtu') ? 'YouTube' : (s.videoUrl && s.videoUrl.includes('bilibili') ? 'Bilibili' : 'ZZZ Run Archive'),
          author: s.authorName || 'Anon',
          videoUrl: s.videoUrl || null,
          team: (s.team || []).map(tm => ({
            name: tm.agentName,
            mindscape: tm.mindscape ?? 0,
            weapon: tm.weaponName || '',
            refinement: tm.phase ?? 1
          }))
        });
      }
    } catch (err) {
      console.error(`[Archive Sync] Error processing target ${t.id}:`, err);
    }
  }

  console.log(`[Archive Sync] Successfully fetched and normalized ${allRuns.length} real runs!`);

  const outputPath = path.join(__dirname, 'data', 'runs.json');
  fs.writeFileSync(outputPath, JSON.stringify(allRuns, null, 2), 'utf8');
  console.log(`[Archive Sync] Saved ${allRuns.length} authentic runs to ${outputPath}`);
  return allRuns;
}

if (require.main === module) {
  fetchAllSubmissions();
}

module.exports = { fetchAllSubmissions };
