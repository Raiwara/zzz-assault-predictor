const fs = require('fs');

async function main() {
  console.log('=== Inspecting Nexus Shiyu ===');
  const res = await fetch('https://nexus-shiyu.com/runs?tab=archive', {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const html = await res.text();
  console.log('HTML length:', html.length);

  // Look for tab names, modes, or category links
  const tabMatches = html.match(/tab=[a-zA-Z0-9_\-]+/g) || [];
  console.log('Found tab params:', [...new Set(tabMatches)]);

  const kindMatches = html.match(/kind=[a-zA-Z0-9_\-]+/g) || [];
  console.log('Found kind params:', [...new Set(kindMatches)]);

  // Check how many runs we can pull from nexus-shiyu /api/runs?tab=archive
  let offset = 0;
  let totalNexus = 0;
  const nexusRuns = [];

  while (true) {
    const apiRes = await fetch(`https://nexus-shiyu.com/api/runs?tab=archive&offset=${offset}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    if (!apiRes.ok) break;
    const data = await apiRes.json();
    const runs = data.runs || [];
    if (runs.length === 0) break;
    nexusRuns.push(...runs);
    totalNexus += runs.length;
    offset += runs.length;
    if (!data.hasMore) break;
  }
  console.log(`Nexus-Shiyu tab=archive total runs fetched: ${totalNexus}`);
  if (nexusRuns.length > 0) {
    console.log('Sample nexus run structure:');
    const s = nexusRuns[0];
    console.log({
      id: s.id,
      kind: s.kind,
      enemy: s.enemyName || s.enemy?.name,
      result: s.result,
      totalCost: s.totalCost,
      agents: (s.agents || []).map(a => `${a.character?.nameEn} M${a.mindscape} (${a.amplifier?.nameRu || 'No Amp'})`),
      bangboo: s.bangboo?.nameEn || s.bangboo?.nameRu
    });
  }
}

main().catch(console.error);
