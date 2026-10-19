/**
 * Database Update and Automation CLI
 * Allows adding new characters, weapons, rotations, syncing archive runs, and retraining neural network.
 *
 * Usage:
 *   node update-database.js list-bosses
 *   node update-database.js list-runs
 *   node update-database.js add-character "Hugo" "Хьюго" "S" "Attack" "Ice" "Winter Song"
 *   node update-database.js add-weapon "Winter Song" "S" "Attack"
 *   node update-database.js add-boss "corrupted-titan" "Corrupted Titan" "Осквернённый Титан" "Ice,Fire" "Ether"
 *   node update-database.js add-rotation "rot-2026-10-22" "Ротация 22 октября – 5 ноября" "22 октября – 5 ноября" "phaethon-scorched-horizon" "infernal-revenant" "kusarikku"
 *   node update-database.js sync-archive 180
 *   node update-database.js train-neural
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const charsPath = path.join(dataDir, 'characters.json');
const weapsPath = path.join(dataDir, 'weapons.json');
const boosPath = path.join(dataDir, 'bangboos.json');
const bossesPath = path.join(dataDir, 'bosses.json');
const buffsPath = path.join(dataDir, 'buffs.json');
const rotationsPath = path.join(dataDir, 'rotations.json');
const runsPath = path.join(dataDir, 'runs.json');

const loadJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const saveJson = (p, data) => fs.writeFileSync(p, JSON.stringify(data, null, 2), 'utf8');

const args = process.argv.slice(2);
const command = args[0] || 'help';

switch (command) {
  case 'list-bosses': {
    const bosses = loadJson(bossesPath);
    console.log(`\n=== БАЗА БОССОВ (${bosses.length}) ===`);
    bosses.forEach((b, i) => {
      console.log(`${i + 1}. [${b.id}] ${b.ruName || b.name} (Комната ${b.room || '?'})`);
      console.log(`   Уязвимости: ${(b.weaknesses || []).join(', ') || 'Нет'} | Сопротивления: ${(b.resistances || []).join(', ') || 'Нет'}`);
      console.log(`   Механика: ${b.mechanics?.title || b.mechanicTitle || '-'} | Ср. скор: ${b.avgScore || '-'}`);
    });
    break;
  }

  case 'list-runs': {
    const runs = loadJson(runsPath);
    console.log(`\n=== АРХИВ ПРОХОДОК (${runs.length} забегов) ===`);
    runs.slice(0, 20).forEach((r, i) => {
      const teamStr = (r.team || []).map(t => `${t.name} (M${t.mindscape})`).join(' + ');
      console.log(`${i + 1}. Ротация: ${r.rotationId} | Босс: ${r.bossRuName || r.bossName} | Счёт: ${r.score}`);
      console.log(`   Команда: ${teamStr} | Банбу: ${r.bangboo} | Источник: ${r.source}`);
    });
    if (runs.length > 20) console.log(`... и ещё ${runs.length - 20} забегов.`);
    break;
  }

  case 'add-character': {
    // node update-database.js add-character <name> <ruName> <rarity> <specialty> <attribute> [signature]
    const name = args[1];
    const ruName = args[2] || name;
    const rarity = args[3] || 'S';
    const specialty = args[4] || 'Attack';
    const attribute = args[5] || 'Physical';
    const signatureWeapon = args[6] || null;

    if (!name) {
      console.log('Использование: node update-database.js add-character <name> <ruName> <rarity> <specialty> <attribute> [signature]');
      break;
    }

    const chars = loadJson(charsPath);
    const existingIdx = chars.findIndex(c => c.name.toLowerCase() === name.toLowerCase());
    const newChar = {
      id: `${Date.now()}`,
      name,
      ruName,
      rarity,
      specialty,
      attribute,
      attackType: 'Slash',
      signatureWeapon
    };

    if (existingIdx >= 0) {
      chars[existingIdx] = { ...chars[existingIdx], ...newChar };
      console.log(`✅ Персонаж ${name} (${ruName}) успешно обновлен!`);
    } else {
      chars.unshift(newChar);
      console.log(`✅ Персонаж ${name} (${ruName}) успешно добавлен в базу!`);
    }
    saveJson(charsPath, chars);
    break;
  }

  case 'add-weapon': {
    // node update-database.js add-weapon <name> <rarity> <specialty>
    const name = args[1];
    const rarity = args[2] || 'S';
    const specialty = args[3] || 'Attack';

    if (!name) {
      console.log('Использование: node update-database.js add-weapon <name> <rarity> <specialty>');
      break;
    }

    const weaps = loadJson(weapsPath);
    const existingIdx = weaps.findIndex(w => w.name.toLowerCase() === name.toLowerCase());
    const newWeap = {
      id: `${Date.now()}`,
      name,
      rarity,
      specialty
    };

    if (existingIdx >= 0) {
      weaps[existingIdx] = { ...weaps[existingIdx], ...newWeap };
      console.log(`✅ Амплификатор ${name} успешно обновлен!`);
    } else {
      weaps.unshift(newWeap);
      console.log(`✅ Амплификатор ${name} успешно добавлен в базу!`);
    }
    saveJson(weapsPath, weaps);
    break;
  }

  case 'add-boss': {
    const id = args[1];
    const name = args[2];
    const ruName = args[3] || name;
    const weaknesses = (args[4] || '').split(',').map(s => s.trim()).filter(Boolean);
    const resistances = (args[5] || '').split(',').map(s => s.trim()).filter(Boolean);

    if (!id || !name) {
      console.log('Использование: node update-database.js add-boss <id> <name> <ruName> <weaknesses> <resistances>');
      break;
    }

    const bosses = loadJson(bossesPath);
    const existing = bosses.findIndex(b => b.id === id);
    const newBoss = {
      id,
      name,
      ruName,
      mode: "Deadly Assault",
      room: 1,
      weaknesses,
      resistances,
      mechanics: {
        title: "Особая механика",
        description: "Механика ротации штурма."
      },
      targetScore: { sRank: 20000, full: 65000 },
      avgScore: 23500,
      topScore: 27500
    };

    if (existing >= 0) {
      bosses[existing] = { ...bosses[existing], ...newBoss };
      console.log(`✅ Босс ${name} успешно обновлен!`);
    } else {
      bosses.push(newBoss);
      console.log(`✅ Босс ${name} успешно добавлен в базу!`);
    }
    saveJson(bossesPath, bosses);
    break;
  }

  case 'add-rotation': {
    // node update-database.js add-rotation <id> <name> <dateRange> <boss1Id> <boss2Id> <boss3Id>
    const id = args[1];
    const name = args[2];
    const dateRange = args[3] || name;
    const b1 = args[4] || 'phaethon-scorched-horizon';
    const b2 = args[5] || 'infernal-revenant';
    const b3 = args[6] || 'kusarikku';

    if (!id || !name) {
      console.log('Использование: node update-database.js add-rotation <id> <name> <dateRange> <boss1Id> <boss2Id> <boss3Id>');
      break;
    }

    const rotations = loadJson(rotationsPath);
    const bosses = loadJson(bossesPath);
    const buffs = loadJson(buffsPath);

    const getBoss = (bId) => bosses.find(b => b.id === bId) || { id: bId, name: bId, ruName: bId, weaknesses: [] };

    const newRot = {
      id,
      name,
      dateRange,
      startDate: new Date().toISOString().slice(0, 10),
      endDate: new Date(Date.now() + 14 * 86400000).toISOString().slice(0, 10),
      status: 'active',
      mode: 'Deadly Assault (Опасный штурм)',
      description: `Двухнедельная ротация: ${dateRange}.`,
      buffs: buffs.slice(0, 3),
      rooms: [
        { roomNumber: 1, bossId: b1, ...getBoss(b1) },
        { roomNumber: 2, bossId: b2, ...getBoss(b2) },
        { roomNumber: 3, bossId: b3, ...getBoss(b3) }
      ]
    };

    // Mark previous active as ended
    rotations.forEach(r => { if (r.status === 'active') r.status = 'ended'; });
    rotations.unshift(newRot);
    saveJson(rotationsPath, rotations);
    console.log(`✅ Новая двухнедельная ротация '${name}' успешно создана и установлена активной!`);
    break;
  }

  case 'sync-archive': {
    const count = parseInt(args[1], 10) || 180;
    const { fetchAllSubmissions } = require('./fetch-archive-runs.js');
    const { train } = require('./train-neural-network.js');
    console.log(`🔄 Синхронизация с zzz-run-archive (${count} проходок)...`);
    fetchAllSubmissions(count).then(() => {
      console.log('🧠 Переобучение нейросети на обновленных данных...');
      train();
      console.log('🎉 Синхронизация и обучение завершены!');
    });
    break;
  }

  case 'train-neural': {
    const { train } = require('./train-neural-network.js');
    console.log('🧠 Запуск обучения нейросети...');
    train();
    break;
  }

  default:
    console.log(`
Команды CLI update-database.js:
  node update-database.js list-bosses
  node update-database.js list-runs
  node update-database.js add-character <name> <ruName> <rarity> <specialty> <attribute> [signature]
  node update-database.js add-weapon <name> <rarity> <specialty>
  node update-database.js add-boss <id> <name> <ruName> <weaknesses> <resistances>
  node update-database.js add-rotation <id> <name> <dateRange> <boss1> <boss2> <boss3>
  node update-database.js sync-archive [count]
  node update-database.js train-neural
    `);
}
