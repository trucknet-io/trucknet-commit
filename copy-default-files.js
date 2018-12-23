const path = require('path');
const projectRoot = process.cwd();
const fs = require('fs');

if (fs.existsSync(path.join(projectRoot, 'copy-default-files.js'))) {
  console.log('This script should be run only as a dependency postinstall script');
  return;
}

const defaultFilesDir = path.join('./default-files');

const files = fs.readdirSync(defaultFilesDir);

for (const file of files) {
  const fromPath = path.join(defaultFilesDir, file)
  const toPath = path.join(projectRoot, file);
  if (!fs.existsSync(toPath)) {
    fs.copyFileSync(fromPath, toPath);
  }
}