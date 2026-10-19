const path = require('path');
const fs = require('fs');

// Mock localStorage and window if running in Node
global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
};

const NeuralAssaultPredictor = require('../js/neural-predictor.js');

async function testPredictions() {
  const dataDir = path.join(__dirname, '../data');
  const db = {
    characters: JSON.parse(fs.readFileSync(path.join(dataDir, 'characters.json'), 'utf8')),
    weapons: JSON.parse(fs.readFileSync(path.join(dataDir, 'weapons.json'), 'utf8')),
    bosses: JSON.parse(fs.readFileSync(path.join(dataDir, 'bosses.json'), 'utf8')),
    buffs: JSON.parse(fs.readFileSync(path.join(dataDir, 'buffs.json'), 'utf8')),
    runs: JSON.parse(fs.readFileSync(path.join(dataDir, 'runs.json'), 'utf8')),
    synergies: JSON.parse(fs.readFileSync(path.join(dataDir, 'synergies.json'), 'utf8')),
    charWeapons: JSON.parse(fs.readFileSync(path.join(dataDir, 'char-weapons.json'), 'utf8'))
  };

  const weights = JSON.parse(fs.readFileSync(path.join(dataDir, 'neural-weights.json'), 'utf8'));

  const predictor = new NeuralAssaultPredictor(db);
  predictor.model = weights;
  predictor.isLoaded = true;

  console.log('Model loaded! Trained at:', weights.meta?.trainedAt, 'Accuracy:', weights.meta?.accuracy, 'MAE Score:', weights.meta?.maeScore);

  const phaethon = db.bosses.find(b => b.id.includes('phaethon') || b.name.toLowerCase().includes('phaethon')) || {
    id: 'corrupted-overlord-phaethon',
    name: 'Corrupted Overlord - Phaethon',
    room: 1,
    weaknesses: ['Ether', 'Fire'],
    resistances: ['Physical', 'Ice']
  };

  const buff = db.buffs[0];

  // Test 1: Ellen (Ice, T1) + Dialyn + Astra Yao at Cost 3 (M0, no signa) vs Phaethon (Resists Ice)
  const lowCostTeam = [
    { character: db.characters.find(c => c.name === 'Ellen'), weapon: db.weapons.find(w => w.name === 'Cannon Rotor'), mindscape: 0, refinement: 1 },
    { character: db.characters.find(c => c.name === 'Dialyn'), weapon: db.weapons.find(w => w.name === 'Steam Oven'), mindscape: 0, refinement: 1 },
    { character: db.characters.find(c => c.name === 'Astra Yao'), weapon: db.weapons.find(w => w.name === 'Kaboom the Cannon'), mindscape: 0, refinement: 1 }
  ];

  const resLow = predictor.predict({ team: lowCostTeam, boss: phaethon, buff, bangboo: { name: 'Sharkboo' } });
  console.log('\n--- Test 1: Ellen + Dialyn + Astra Yao (Cost 3) vs Phaethon ---');
  console.log('Cost:', resLow.cost, 'Predicted Score:', resLow.score, 'Time:', resLow.estimatedTimeSeconds, 'Timeout:', resLow.isTimeout, 'Verdict:', resLow.clearVerdict);

  // Test 2: Promeia (Fire/Ether carry) + Remielle + Vivian at Cost 3 vs Phaethon (Weak to Fire/Ether)
  const promTeamLow = [
    { character: db.characters.find(c => c.name === 'Promeia') || { name: 'Promeia', specialty: 'Attack', attribute: 'Fire', rarity: 'S', tier: 'T0' }, weapon: { name: 'Starlight Engine', rarity: 'A' }, mindscape: 0, refinement: 1 },
    { character: db.characters.find(c => c.name === 'Remielle') || { name: 'Remielle', specialty: 'Stun', attribute: 'Ether', rarity: 'S', tier: 'T0.5' }, weapon: { name: 'Steam Oven', rarity: 'A' }, mindscape: 0, refinement: 1 },
    { character: db.characters.find(c => c.name === 'Vivian') || { name: 'Vivian', specialty: 'Support', attribute: 'Fire', rarity: 'S', tier: 'T0.5' }, weapon: { name: 'The Vault', rarity: 'A' }, mindscape: 0, refinement: 1 }
  ];
  const resPromLow = predictor.predict({ team: promTeamLow, boss: phaethon, buff, bangboo: { name: 'Rocketboo' } });
  console.log('\n--- Test 2: Promeia + Remielle + Vivian (Cost 3) vs Phaethon ---');
  console.log('Cost:', resPromLow.cost, 'Predicted Score:', resPromLow.score, 'Time:', resPromLow.estimatedTimeSeconds, 'Timeout:', resPromLow.isTimeout, 'Verdict:', resPromLow.clearVerdict);

  // Test 3: High Cost Team (Cost 9: Miyabi M2R1 + Yanagi M2R1 + Astra Yao M0R1)
  const highCostTeam = [
    { character: db.characters.find(c => c.name === 'Miyabi'), weapon: db.weapons.find(w => w.name === 'Hailstorm Shrine') || { name: 'Hailstorm Shrine', rarity: 'S' }, mindscape: 2, refinement: 1 },
    { character: db.characters.find(c => c.name === 'Yanagi'), weapon: db.weapons.find(w => w.name === 'Timeweaver') || { name: 'Timeweaver', rarity: 'S' }, mindscape: 2, refinement: 1 },
    { character: db.characters.find(c => c.name === 'Astra Yao'), weapon: db.weapons.find(w => w.name === 'Elegant Vanity') || { name: 'Elegant Vanity', rarity: 'S' }, mindscape: 0, refinement: 1 }
  ];
  const resHigh = predictor.predict({ team: highCostTeam, boss: phaethon, buff, bangboo: { name: 'Resonaboo' } });
  console.log('\n--- Test 3: High Cost (Cost 9) vs Phaethon ---');
  console.log('Cost:', resHigh.cost, 'Predicted Score:', resHigh.score, 'Time:', resHigh.estimatedTimeSeconds, 'Timeout:', resHigh.isTimeout, 'Verdict:', resHigh.clearVerdict);
}

testPredictions().catch(console.error);
