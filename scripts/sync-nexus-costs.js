const fs = require('fs');
const path = require('path');

async function syncNexusCosts() {
  console.log('Fetching Nexus Cost System (Assault Classic)...');
  const costRes = await fetch('https://nexus-shiyu.com/api/costs/cmscfm22b0001jkvtw9jdsaip');
  const charsRes = await fetch('https://nexus-shiyu.com/api/characters');
  const ampsRes = await fetch('https://nexus-shiyu.com/api/amplifiers');

  const costData = await costRes.json();
  const nexusChars = await charsRes.json();
  const nexusAmps = await ampsRes.json();

  const dataDir = path.join(__dirname, '../data');
  const localChars = JSON.parse(fs.readFileSync(path.join(dataDir, 'characters.json'), 'utf8'));
  const localWeaps = JSON.parse(fs.readFileSync(path.join(dataDir, 'weapons.json'), 'utf8'));

  // Maps
  const nexusCharById = {};
  nexusChars.forEach(c => nexusCharById[c.id] = c);

  const nexusAmpById = {};
  nexusAmps.forEach(a => nexusAmpById[a.id] = a);

  // Map Nexus character name to local canonical character name
  function mapToLocalChar(nameEn, nameRu) {
    const targetEn = (nameEn || '').toLowerCase();
    const targetRu = (nameRu || '').toLowerCase();
    for (const c of localChars) {
      const cEn = c.name.toLowerCase();
      const cRu = (c.ruName || '').toLowerCase();
      if (cEn === targetEn || cRu === targetRu) return c.name;
      if (targetEn.startsWith(cEn) || cEn.startsWith(targetEn.split(' ')[0])) return c.name;
    }
    // Partial matches
    if (targetEn.includes('jane')) return 'Jane';
    if (targetEn.includes('promeia')) return 'Promeia';
    if (targetEn.includes('ellen')) return 'Ellen';
    if (targetEn.includes('miyabi')) return 'Miyabi';
    if (targetEn.includes('yanagi')) return 'Yanagi';
    if (targetEn.includes('astra')) return 'Astra Yao';
    if (targetEn.includes('dialyn')) return 'Dialyn';
    if (targetEn.includes('lycaon')) return 'Lycaon';
    if (targetEn.includes('claret')) return 'Claret';
    if (targetEn.includes('velina')) return 'Velina';
    if (targetEn.includes('remielle')) return 'Remielle';
    if (targetEn.includes('evelyn')) return 'Evelyn';
    if (targetEn.includes('lighter')) return 'Lighter';
    if (targetEn.includes('burnice')) return 'Burnice';
    if (targetEn.includes('caesar')) return 'Caesar';
    if (targetEn.includes('qingyi')) return 'Qingyi';
    if (targetEn.includes('zhu yuan')) return 'Zhu Yuan';
    if (targetEn.includes('billy')) return 'Billy';
    if (targetEn.includes('anby')) return 'Anby';
    if (targetEn.includes('nicole')) return 'Nicole';
    if (targetEn.includes('soukaku')) return 'Soukaku';
    if (targetEn.includes('lucy') || targetEn.includes('luciana')) return 'Lucy';
    if (targetEn.includes('piper')) return 'Piper';
    if (targetEn.includes('corin')) return 'Corin';
    if (targetEn.includes('anton')) return 'Anton';
    if (targetEn.includes('ben')) return 'Ben';
    if (targetEn.includes('rina') || targetEn.includes('alexandrina')) return 'Rina';
    if (targetEn.includes('soldier 11')) return 'Soldier 11';
    if (targetEn.includes('nekomata') || targetEn.includes('nekomiya')) return 'Nekomata';
    if (targetEn.includes('koleda')) return 'Koleda';
    if (targetEn.includes('grace')) return 'Grace';
    return nameEn || nameRu;
  }

  // Map Nexus amp to local canonical weapon name
  function mapToLocalAmp(nameEn, nameRu) {
    const targetEn = (nameEn || '').toLowerCase();
    const targetRu = (nameRu || '').toLowerCase();
    for (const w of localWeaps) {
      const wEn = w.name.toLowerCase();
      const wRu = (w.ruName || '').toLowerCase();
      if (wEn === targetEn || wRu === targetRu) return w.name;
    }
    return nameEn || nameRu;
  }

  const characterCosts = {};
  (costData.latestCosts || []).forEach(item => {
    const nc = nexusCharById[item.characterId];
    if (!nc) return;
    const localName = mapToLocalChar(nc.nameEn, nc.nameRu);
    if (!characterCosts[localName]) {
      characterCosts[localName] = {
        name: localName,
        ruName: nc.nameRu,
        rank: nc.rank,
        standard: nc.standard,
        mindscapes: {}
      };
    }
    // Only store practical levels M0, M1, M2, M3
    if (item.mindscapeLevel <= 3 && item.cost < 9999) {
      characterCosts[localName].mindscapes['M' + item.mindscapeLevel] = item.cost;
    }
  });

  const baseAmplifierCosts = {};
  (costData.latestAmplifierBaseCosts || []).forEach(item => {
    const na = nexusAmpById[item.amplifierId];
    if (!na) return;
    const localName = mapToLocalAmp(na.nameEn, na.nameRu);
    if (!baseAmplifierCosts[localName]) {
      baseAmplifierCosts[localName] = {
        name: localName,
        ruName: na.nameRu,
        rank: na.rank,
        ranks: {}
      };
    }
    if (item.cost < 9999) {
      baseAmplifierCosts[localName].ranks['R' + (item.rankLevel || 1)] = item.cost;
    }
  });

  const specificAmplifierCosts = {};
  (costData.latestAmplifierCosts || []).forEach(item => {
    const na = nexusAmpById[item.amplifierId];
    const nc = nexusCharById[item.characterId];
    if (!na || !nc) return;
    const localChar = mapToLocalChar(nc.nameEn, nc.nameRu);
    const localAmp = mapToLocalAmp(na.nameEn, na.nameRu);
    const key = `${localChar}__${localAmp}`;
    if (!specificAmplifierCosts[key]) {
      specificAmplifierCosts[key] = {};
    }
    if (item.cost < 9999) {
      specificAmplifierCosts[key]['R' + (item.rankLevel || 1)] = item.cost;
    }
  });

  const output = {
    id: costData.id,
    name: costData.name,
    description: "Nexus Tournament Assault Classic Cost System (individual agent & amplifier power rating)",
    syncedAt: new Date().toISOString(),
    characterCosts,
    baseAmplifierCosts,
    specificAmplifierCosts
  };

  fs.writeFileSync(path.join(dataDir, 'nexus-costs.json'), JSON.stringify(output, null, 2), 'utf8');
  console.log(`Successfully synced Nexus Cost System to data/nexus-costs.json!`);
  console.log(`Mapped ${Object.keys(characterCosts).length} characters and ${Object.keys(baseAmplifierCosts).length} base amplifiers.`);
}

syncNexusCosts().catch(console.error);
