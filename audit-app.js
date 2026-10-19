const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const appJs = fs.readFileSync(path.join(__dirname, 'js', 'app.js'), 'utf8');

// Find all getElementById in app.js
const regex = /getElementById\(['"]([^'"]+)['"]\)/g;
let match;
const usedIds = new Set();
while ((match = regex.exec(appJs)) !== null) {
  usedIds.add(match[1]);
}

console.log('Checked', usedIds.size, 'unique IDs in app.js');

const missing = [];
for (const id of usedIds) {
  const pattern1 = `id="${id}"`;
  const pattern2 = `id='${id}'`;
  if (!html.includes(pattern1) && !html.includes(pattern2)) {
    missing.push(id);
  }
}

if (missing.length > 0) {
  console.log('⚠️ Missing IDs in index.html:', missing);
} else {
  console.log('✅ All element IDs exist in index.html!');
}

// Check characters and weapons in presets
const chars = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'characters.json'), 'utf8'));
const weaps = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'weapons.json'), 'utf8'));
const boos = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'bangboos.json'), 'utf8'));
const charNames = new Set(chars.map(c => c.name));
const weapNames = new Set(weaps.map(w => w.name));
const booNames = new Set(boos.map(b => b.name));

const presetRegex = /char:\s*['"]([^'"]+)['"],\s*mind:\s*\d+,\s*weap:\s*['"]([^'"]+)['"]/g;
const missingPresetChars = [];
const missingPresetWeaps = [];
while ((match = presetRegex.exec(appJs)) !== null) {
  const c = match[1];
  const w = match[2];
  if (!charNames.has(c)) missingPresetChars.push(c);
  if (!weapNames.has(w)) missingPresetWeaps.push(w);
}

if (missingPresetChars.length > 0) {
  console.log('⚠️ Preset missing characters:', missingPresetChars);
} else {
  console.log('✅ All preset characters exist in database!');
}

if (missingPresetWeaps.length > 0) {
  console.log('⚠️ Preset missing weapons:', missingPresetWeaps);
} else {
  console.log('✅ All preset weapons exist in database!');
}
