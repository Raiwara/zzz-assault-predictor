const fs = require('fs');
const path = require('path');

const bossesFilePath = path.join(__dirname, '..', 'data', 'bosses.json');
const bosses = JSON.parse(fs.readFileSync(bossesFilePath, 'utf-8'));

// Map boss id or name to webp asset path
const bossImageMap = {
  'phaethon-of-the-scorched-horizon': 'https://zzz-run-archive.onrender.com/assets/boss_webp/deadly_assault/Monster_HoloMutant.webp',
  'scorched-horizon': 'https://zzz-run-archive.onrender.com/assets/boss_webp/deadly_assault/Monster_HoloMutant.webp',
  'infernal-revenant': 'https://zzz-run-archive.onrender.com/assets/boss_webp/deadly_assault/Monster_HollowVenger.webp',
  'kusarikku': 'https://zzz-run-archive.onrender.com/assets/boss_webp/deadly_assault/Monster_TyphonDestroyer.webp',
  'discordant-solo-vesper': 'https://zzz-run-archive.onrender.com/assets/boss_webp/deadly_assault/Monster_Vesper.webp',
  'unknown-corruption-complex': 'https://zzz-run-archive.onrender.com/assets/boss_webp/deadly_assault/Monster_ComplexCorrupted.webp',
  'ye-shiyuan-the-thrall': 'https://zzz-run-archive.onrender.com/assets/boss_webp/deadly_assault/Monster_YeShiyuanTheThrall.webp',
  'miasmic-fiend-unfathomable': 'https://zzz-run-archive.onrender.com/assets/boss_webp/deadly_assault/Monster_NamelessOne_Unfathomable.webp',
  'kitabulu-stagnant-aberrant-beast': 'https://zzz-run-archive.onrender.com/assets/boss_webp/deadly_assault/Monster_Girtablu_HC.webp',
  'dead-end-butcher': 'https://zzz-run-archive.onrender.com/assets/boss_webp/deadly_assault/Monster_Dead_End_Butcher.webp',
  'notorious-dead-end-butcher': 'https://zzz-run-archive.onrender.com/assets/boss_webp/deadly_assault/Monster_NotoriousDeadEndButcher.webp',
  'girtablullu': 'https://zzz-run-archive.onrender.com/assets/boss_webp/deadly_assault/Monster_Girtablu.webp',
  'girtablullu-stagnant-aberrant': 'https://zzz-run-archive.onrender.com/assets/boss_webp/deadly_assault/Monster_Girtablu_HC.webp',
  'primordial-nightmare-the-creator-': 'https://zzz-run-archive.onrender.com/assets/boss_webp/deadly_assault/Monster_Primordial_nightmare.webp',
  'miasma-priest': 'https://zzz-run-archive.onrender.com/assets/boss_webp/deadly_assault/Monster_MiasmaPriest.webp',
  'notorious-pompey': 'https://zzz-run-archive.onrender.com/assets/boss_webp/deadly_assault/Monster_NotoriousPompey.webp',
  'notorious-marionette': 'https://zzz-run-archive.onrender.com/assets/boss_webp/deadly_assault/Monster_NotoriousMarionette.webp',
  'the-defiler': 'https://zzz-run-archive.onrender.com/assets/boss_webp/deadly_assault/Monster_IsoldetheDefiler.webp'
};

const defaultBossImg = 'https://zzz-run-archive.onrender.com/assets/boss_webp/deadly_assault/Monster_Dead_End_Butcher.webp';

let updatedCount = 0;
for (const b of bosses) {
  const img = bossImageMap[b.id] || bossImageMap[b.id.toLowerCase()] || defaultBossImg;
  b.imageUrl = img;
  updatedCount++;
}

fs.writeFileSync(bossesFilePath, JSON.stringify(bosses, null, 2), 'utf-8');
console.log(`Updated ${updatedCount} bosses with imageUrl in ${bossesFilePath}`);
