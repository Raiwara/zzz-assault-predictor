const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../data');
const runs = JSON.parse(fs.readFileSync(path.join(dataDir, 'runs.json'), 'utf8'));
const chars = JSON.parse(fs.readFileSync(path.join(dataDir, 'characters.json'), 'utf8'));
const synergies = JSON.parse(fs.readFileSync(path.join(dataDir, 'synergies.json'), 'utf8'));

console.log(`Recomputing commonPartnersDA from ${runs.length} runs for ${chars.length} characters...`);

const commonDA = {};

chars.forEach(c => {
  const cName = c.name;
  // Runs featuring this character
  const charRuns = runs.filter(r => (r.team || []).some(m => (m.name || '').toLowerCase() === cName.toLowerCase()));
  const totalRuns = charRuns.length;

  const partnerMap = {};

  charRuns.forEach(r => {
    const isKill = r.bossKilled || (r.score >= 65000 && (r.timeSeconds ?? 180) < 180);
    const score = r.score || 0;

    (r.team || []).forEach(m => {
      const mateName = m.name;
      if (!mateName || mateName.toLowerCase() === cName.toLowerCase()) return;

      // Find canonical name from characters list
      const canonicalChar = chars.find(x => x.name.toLowerCase() === mateName.toLowerCase());
      const standardName = canonicalChar ? canonicalChar.name : mateName;

      if (!partnerMap[standardName]) {
        partnerMap[standardName] = {
          name: standardName,
          count: 0,
          score65k: 0,
          kills: 0,
          sumScore: 0
        };
      }

      partnerMap[standardName].count++;
      if (score >= 65000) partnerMap[standardName].score65k++;
      if (isKill) partnerMap[standardName].kills++;
      partnerMap[standardName].sumScore += score;
    });
  });

  const partners = Object.values(partnerMap)
    .sort((a, b) => b.count - a.count)
    .map(p => ({
      name: p.name,
      count: p.count,
      pct: totalRuns > 0 ? Math.round((p.count / totalRuns) * 1000) / 10 : 0,
      score65k: p.score65k,
      kills: p.kills,
      avgScore: p.count > 0 ? Math.round(p.sumScore / p.count) : 0
    }));

  commonDA[cName] = {
    totalRuns,
    partners
  };
});

synergies.commonPartnersDA = commonDA;

fs.writeFileSync(path.join(dataDir, 'synergies.json'), JSON.stringify(synergies, null, 2), 'utf8');
console.log(`Successfully updated commonPartnersDA in synergies.json!`);
