const path = require('path');
const fs = require('fs');

if (!process.env.INIT_CWD) {
  throw new Error('This script should be run as postinstall script\n');
}

const projectRoot = path.resolve(process.env.INIT_CWD);

if (fs.existsSync(path.join(projectRoot, 'copy-default-files.js'))) {
  console.log('This script should be run only as a dependency postinstall script\n');
  return;
}

// __dirname is the location of the source file
const defaultFilesDir = path.join(__dirname, '/default-files');

const files = fs.readdirSync(defaultFilesDir);

for (const file of files) {
  const fromPath = path.join(defaultFilesDir, file)
  const toPath = path.join(projectRoot, file);
  if (!fs.existsSync(toPath)) {
    fs.copyFileSync(fromPath, toPath);
  }
}