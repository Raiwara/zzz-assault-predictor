async function main() {
  const res = await fetch('https://zzz-run-archive.onrender.com/data/asset-manifest.js');
  const code = await res.text();
  const window = {};
  eval(code);
  console.log('Bosses in manifest:');
  for (const b of window.ZZZAssetManifest.bosses) {
    console.log(b.baseName, '->', 'https://zzz-run-archive.onrender.com' + b.relativePath.replace('./', '/'));
  }
}
main();
