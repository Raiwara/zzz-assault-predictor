async function discoverSeasons() {
  // Let's sample submissions or iterate backwards from 69047
  // Let's check seasonId by querying limit=50 with mode=Deadly Assault
  console.log('Discovering seasons for Deadly Assault...');
  
  // Let's test seasonIds around 69047 downwards
  const seasonsFound = [];
  for (let s = 69047; s >= 69030; s--) {
    const url = `https://zzz-run-archive.onrender.com/api/submissions?mode=Deadly%20Assault&seasonId=${s}&limit=5`;
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        const count = data.pagination?.total || (data.submissions || []).length;
        if (count > 0 && data.submissions && data.submissions.length > 0) {
          const sample = data.submissions[0];
          console.log(`Season ${s}: total = ${count}, targetLabel = "${sample.targetLabel}", targetId = "${sample.targetId}"`);
          seasonsFound.push({
            seasonId: s,
            total: count,
            targetLabel: sample.targetLabel,
            sample
          });
        }
      }
    } catch(e) {
      console.error(`Error season ${s}:`, e.message);
    }
  }
  console.log(`Discovered ${seasonsFound.length} seasons.`);
}

discoverSeasons();
