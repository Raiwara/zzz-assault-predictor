const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const testHtml = path.join(__dirname, '..', 'docs', 'test.html');
const testPdf = path.join(__dirname, '..', 'docs', 'test.pdf');
fs.writeFileSync(testHtml, '<h1>Hello World</h1><p>Test PDF generation</p>');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
execFileSync(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--print-to-pdf=' + testPdf,
  '--no-pdf-header-footer',
  testHtml
]);

if (fs.existsSync(testPdf)) {
  console.log('PDF created successfully! Size:', fs.statSync(testPdf).size, 'bytes');
  fs.unlinkSync(testHtml);
  fs.unlinkSync(testPdf);
} else {
  console.error('PDF creation failed');
}
