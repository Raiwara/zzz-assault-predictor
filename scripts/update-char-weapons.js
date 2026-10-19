const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '../data');
const runs = JSON.parse(fs.readFileSync(path.join(dataDir, 'runs.json'), 'utf8'));
const chars = JSON.parse(fs.readFileSync(path.join(dataDir, 'characters.json'), 'utf8'));
const weapons = JSON.parse(fs.readFileSync(path.join(dataDir, 'weapons.json'), 'utf8'));

const weaponMap = {};
weapons.forEach(w => weaponMap[w.name.toLowerCase()] = w);

const charWeapons = {};

runs.forEach(r => {
  (r.team || []).forEach(m => {
    const cName = m.name;
    const wName = m.weapon;
    if (!cName || !wName) return;
    if (!charWeapons[cName]) charWeapons[cName] = { total: 0, weapons: {} };
    charWeapons[cName].total++;
    charWeapons[cName].weapons[wName] = (charWeapons[cName].weapons[wName] || 0) + 1;
  });
});

// A-rank BiS fallbacks by specialty
const specialtyF2pBiS = {
  'Attack': ['Starlight Engine', 'Cannon Rotor', 'Street Superstar'],
  'Stun': ['Steam Oven', 'Precious Fossilized Core', 'Demara Battery Mark II'],
  'Support': ['Kaboom the Cannon', 'Bashful Demon', 'The Vault', 'Unfettered Game Ball'],
  'Anomaly': ['Weeping Gemini', 'Electro-Lip Gloss', 'Roaring Ride'],
  'Defense': ['Spring Embrace', 'Original Transfuser', 'Big Cylinder', 'Peacekeeper - Specialized']
};

const result = {};

chars.forEach(c => {
  const stats = charWeapons[c.name] || { total: 0, weapons: {} };
  const sorted = Object.entries(stats.weapons)
    .sort((a,b) => b[1] - a[1])
    .map(([name, count]) => {
      const pct = stats.total > 0 ? Math.round((count / stats.total) * 100) : 0;
      const wObj = weaponMap[name.toLowerCase()] || {};
      const isSig = c.signatureWeapon === name;
      return {
        name,
        rarity: wObj.rarity || 'A',
        specialty: wObj.specialty || c.specialty,
        attack: wObj.attack || 600,
        count,
        pct,
        isSignature: isSig
      };
    });

  if (c.signatureWeapon && !sorted.some(w => w.name === c.signatureWeapon)) {
    const sigObj = weaponMap[c.signatureWeapon.toLowerCase()] || {};
    sorted.unshift({
      name: c.signatureWeapon,
      rarity: sigObj.rarity || (c.rarity === 'S' ? 'S' : 'A'),
      specialty: sigObj.specialty || c.specialty,
      attack: sigObj.attack || 684,
      count: 0,
      pct: 0,
      isSignature: true
    });
  }

  const f2pPool = specialtyF2pBiS[c.specialty] || [];
  f2pPool.forEach(fName => {
    if (!sorted.some(w => w.name.toLowerCase() === fName.toLowerCase())) {
      const fObj = weaponMap[fName.toLowerCase()];
      if (fObj) {
        sorted.push({
          name: fObj.name,
          rarity: fObj.rarity || 'A',
          specialty: fObj.specialty,
          attack: fObj.attack || 600,
          count: 0,
          pct: 0,
          isSignature: c.signatureWeapon === fObj.name
        });
      }
    }
  });

  sorted.forEach((item, idx) => {
    if (item.isSignature) {
      item.tier = 1;
      item.tag = 'BiS Сигнатура';
      item.reason = 'Сигнатурный амплификатор (' + item.pct + '% в архиве)';
    } else if (idx === 0 || item.pct >= 30) {
      item.tier = 1;
      item.tag = 'Топ архива';
      item.reason = 'Наиболее популярный амплификатор в архиве (' + item.pct + '%)';
    } else if (item.rarity === 'S' || item.pct >= 10) {
      item.tier = 2;
      item.tag = 'Отличная альтернатива';
      item.reason = 'Сильный S-ранг амплификатор (' + item.pct + '% в архиве)';
    } else if (item.rarity === 'A') {
      item.tier = 3;
      item.tag = 'F2P BiS';
      item.reason = item.pct > 0 ? 'Лучший A-ранг вариант (' + item.pct + '%)' : 'Рекомендованный A-ранг вариант';
    } else {
      item.tier = 4;
      item.tag = 'Бюджетный';
      item.reason = 'Базовый временный вариант';
    }
  });

  result[c.name] = {
    characterName: c.name,
    ruName: c.ruName,
    rarity: c.rarity,
    specialty: c.specialty,
    signatureWeapon: c.signatureWeapon,
    totalArchiveRuns: stats.total,
    recommendedWeapons: sorted
  };
});

fs.writeFileSync(path.join(dataDir, 'char-weapons.json'), JSON.stringify(result, null, 2), 'utf8');
console.log('Successfully written comprehensive char-weapons.json for ' + Object.keys(result).length + ' characters!');
