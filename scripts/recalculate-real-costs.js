const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../data');
const charsPath = path.join(dataDir, 'characters.json');
const weapsPath = path.join(dataDir, 'weapons.json');
const runsPath = path.join(dataDir, 'runs.json');

const characters = JSON.parse(fs.readFileSync(charsPath, 'utf8'));
const weapons = JSON.parse(fs.readFileSync(weapsPath, 'utf8'));
const runs = JSON.parse(fs.readFileSync(runsPath, 'utf8'));

const STANDARD_S_AGENTS = ['grace', 'koleda', 'lycaon', 'nekomata', 'rina', 'soldier 11', 'soldier11'];
const STANDARD_S_WEAPONS = [
  'weeping cradle', 'fusion compiler', 'the restrained', 'steel cushion',
  'the brimstone', 'brimstone', 'hellfire gears'
];

function calculateCost(team) {
  if (!Array.isArray(team)) return 0;
  let cost = 0;

  for (const m of team) {
    const rawName = (m.name || m.character?.name || '').toLowerCase();
    const cObj = characters.find(c => c.name.toLowerCase() === rawName);
    const isARank = (cObj && cObj.rarity === 'A');
    const isStandardS = STANDARD_S_AGENTS.includes(rawName);
    const isLimitedS = !isStandardS && !isARank;

    if (isLimitedS) {
      cost += 1 + (m.mindscape || 0);
    }

    const rawWeap = (m.weapon?.name || (typeof m.weapon === 'string' ? m.weapon : '')).toLowerCase();
    const wObj = weapons.find(w => w.name.toLowerCase() === rawWeap);
    const isSWeap = wObj && wObj.rarity === 'S';
    const isStandardWeap = STANDARD_S_WEAPONS.includes(rawWeap);
    const isLimitedWeap = isSWeap && !isStandardWeap;

    if (isLimitedWeap) {
      cost += (m.refinement || 1);
    }
  }
  return cost;
}

let updated = 0;
const costHist = {};

runs.forEach(r => {
  const realCost = calculateCost(r.team);
  r.cost = realCost;
  costHist[realCost] = (costHist[realCost] || 0) + 1;
  updated++;
});

fs.writeFileSync(runsPath, JSON.stringify(runs, null, 2), 'utf8');

console.log(`Successfully recalculated exact tournament costs for all ${updated} runs!`);
console.log('Cost Distribution:');
Object.keys(costHist).sort((a,b) => Number(a) - Number(b)).forEach(c => {
  console.log(`  Cost ${c}: ${costHist[c]} runs`);
});

const lowCostCount = Object.keys(costHist)
  .filter(c => Number(c) <= 6)
  .reduce((sum, c) => sum + costHist[c], 0);

console.log(`Total runs with Cost <= 6: ${lowCostCount} (${(lowCostCount / runs.length * 100).toFixed(1)}%)`);
