const https = require('https');

async function testApi() {
  const endpoints = [
    '/api/targets',
    '/api/seasons',
    '/api/submissions?limit=5',
    '/api/submissions/summary',
    '/api/rotations',
    '/api/meta'
  ];

  for (const ep of endpoints) {
    try {
      const res = await fetch('https://zzz-run-archive.onrender.com' + ep);
      console.log(ep, 'Status:', res.status, res.headers.get('content-type'));
      if (res.ok) {
        const text = await res.text();
        console.log(ep, 'Preview:', text.slice(0, 300));
      }
    } catch (e) {
      console.log(ep, 'ERR:', e.message);
    }
  }
}

testApi();
