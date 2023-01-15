const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/lr-slider/runtime.js',
    './dist/lr-slider/polyfills.js',
    './dist/lr-slider/main.js'
  ];
  await fs.ensureDir('lrslider-build');
  await fs.removeSync('lrslider-build/lr-slider.js');
  await concat(files, 'lrslider-build/lr-slider.js');

  await fs.copy('./src/app/app.component.css', 'lrslider-build/styles.css');
})();
