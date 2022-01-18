const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/elementstestbed/runtime.js',
'./dist/elementstestbed/polyfills.js',
//'./dist/elementstestbed/scripts.js',
'./dist/elementstestbed/main.js',
]
await fs.ensureDir('elements')
await concat(files, 'elements/popup.js');
await fs.copyFile('./dist/elementstestbed/styles.css', 'elements/styles.css')
//await fs.copy('./dist/elementstestbed/assets/', 'elements/assets/' )
})()