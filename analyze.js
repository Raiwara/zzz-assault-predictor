const fs = require('fs');

let rotCode = fs.readFileSync('rotation-database.js', 'utf8');
let seedCode = fs.readFileSync('seed-data.js', 'utf8');
const window = {};
eval(rotCode);
eval(seedCode);

const approved = window.ZZZSeedData.defaultState.approvedSubmissions || [];
console.log('Total approved submissions:', approved.length);

const deadlyRuns = approved.filter(s => (s.mode || '').toLowerCase().includes('deadly') || (s.seasonId || '').startsWith('69'));
console.log('Deadly Assault approved runs:', deadlyRuns.length);

const currentSeason = window.ZZZRotationDatabaseSeed.seasons.find(s => s.id === '69034');
console.log('\n=== CURRENT DEADLY ASSAULT SEASON ===');
console.log('Season ID:', currentSeason.id);
console.log('Mode:', currentSeason.mode);
console.log('Start - End:', currentSeason.start, 'to', currentSeason.end);

currentSeason.rooms.forEach(r => {
  console.log(`\nRoom ${r.roomNumber}: ${r.bossName}`);
  console.log(`  Weaknesses: ${r.weaknesses.join(', ')}`);
  console.log(`  Resistances: ${r.resistances.join(', ') || 'None'}`);
  console.log(`  Target Score: ${r.fullScore} (S-Rank: ${r.highestRankScore})`);
});

console.log('\n=== RUNS ANALYSIS FOR EACH ROOM ===');
currentSeason.rooms.forEach(r => {
  const roomRuns = deadlyRuns.filter(run => run.targetId === r.id);
  console.log(`\n======================================================`);
  console.log(`Room ${r.roomNumber}: ${r.bossName} (${roomRuns.length} runs)`);
  console.log(`======================================================`);
  
  if (roomRuns.length === 0) {
    console.log('No runs recorded for this room.');
    return;
  }

  // stats
  const scores = roomRuns.map(x => x.score);
  const times = roomRuns.map(x => x.timeSeconds);
  const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  const maxScore = Math.max(...scores);
  const minScore = Math.min(...scores);
  const avgTime = Math.round(times.reduce((a, b) => a + b, 0) / times.length);
  const minTime = Math.min(...times);
  const maxTime = Math.max(...times);

  console.log(`Score stats: Min = ${minScore}, Max = ${maxScore}, Avg = ${avgScore}`);
  console.log(`Time stats: Best = ${minTime}s, Worst = ${maxTime}s, Avg = ${avgTime}s`);

  // Bangboo usage
  const bangboos = {};
  roomRuns.forEach(run => {
    const bName = run.bangbooName || 'Unknown';
    bangboos[bName] = (bangboos[bName] || 0) + 1;
  });
  console.log('Bangboo distribution:', JSON.stringify(bangboos));

  // Agents usage
  const agents = {};
  roomRuns.forEach(run => {
    (run.team || []).forEach(member => {
      const aName = member.agentName || 'Unknown';
      agents[aName] = (agents[aName] || 0) + 1;
    });
  });
  console.log('Agent popularity:', JSON.stringify(agents));

  console.log('\nTop Runs:');
  roomRuns.sort((a,b) => b.score - a.score || a.timeSeconds - b.timeSeconds);
  roomRuns.slice(0, 10).forEach((run, idx) => {
    const teamStr = (run.team || []).map(t => `${t.agentName} (M${t.cinema ?? t.mindscape ?? 0}) w/ ${t.wengineName || t.weaponName || 'No WE'} (R${t.refinement ?? 1})`).join(' + ');
    console.log(`Run #${idx+1} [${run.authorName || 'Anon'}]: Score: ${run.score}, Time: ${run.timeSeconds}s, Bangboo: ${run.bangbooName}`);
    console.log(`  Team: ${teamStr}`);
  });
});

// Also check all other seasons or runs in case there are other rotations
console.log('\n=== OTHER SEASONS WITH DEADLY RUNS ===');
const allSeasonIds = [...new Set(deadlyRuns.map(r => r.seasonId))];
console.log('All season IDs in deadly runs:', allSeasonIds);
allSeasonIds.forEach(sid => {
  if (sid !== '69034') {
    const sRuns = deadlyRuns.filter(r => r.seasonId === sid);
    console.log(`Season ${sid}: ${sRuns.length} runs`);
  }
});
