const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const outDir = path.join(__dirname, '..', 'docs', 'screenshots');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const targets = [
  {
    name: '01_main_calculator.png',
    url: 'http://localhost:3000/?tab=tab-calc',
    delay: 2000
  },
  {
    name: '02_overview_3rooms.png',
    url: 'http://localhost:3000/?tab=tab-overview',
    delay: 2000
  },
  {
    name: '03_boss_dossier.png',
    url: 'http://localhost:3000/?tab=tab-bosses&boss=infernal-revenant',
    delay: 2500
  },
  {
    name: '04_bosses_database.png',
    url: 'http://localhost:3000/?tab=tab-bosses',
    delay: 2000
  },
  {
    name: '05_runs_visual_filter.png',
    url: 'http://localhost:3000/?tab=tab-runs&filterModal=1',
    delay: 2500
  },
  {
    name: '06_runs_archive_table.png',
    url: 'http://localhost:3000/?tab=tab-runs',
    delay: 2000
  },
  {
    name: '07_my_roster_modal.png',
    url: 'http://localhost:3000/?modal=roster',
    delay: 2500
  }
];

console.log(`Starting capture of ${targets.length} high-resolution screenshots...`);

for (const target of targets) {
  const outFile = path.join(outDir, target.name);
  console.log(`Capturing: ${target.name} from ${target.url}...`);
  try {
    execFileSync(chromePath, [
      '--headless=new',
      '--disable-gpu',
      `--screenshot=${outFile}`,
      '--window-size=1680,1050',
      `--virtual-time-budget=${target.delay}`,
      target.url
    ], { stdio: 'inherit' });

    if (fs.existsSync(outFile)) {
      const sz = fs.statSync(outFile).size;
      console.log(` -> Saved: ${target.name} (${(sz / 1024).toFixed(1)} KB)`);
    } else {
      console.error(` -> Failed: ${target.name} was not created`);
    }
  } catch (err) {
    console.error(` -> Error capturing ${target.name}:`, err.message);
  }
}

console.log('Capture process completed!');
