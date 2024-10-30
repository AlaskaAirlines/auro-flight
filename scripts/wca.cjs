const fs = require('fs');
const path = require('path');
const glob = require('glob');

const { getTemplatedComponentCode }  = require('./auro-component-template.wca.cjs');
const TEMP_DIR = path.resolve(__dirname, './wca-tmp');

function globPath(sources) {
  return new Promise((res) => {
    const result = [];
    let count = 0;
    for (let i = 0; i < sources.length; i++) {
      glob(sources[i], (err, files) => {
        count++;
        if (err) {
          console.error('cannot find file: ', filePath);
        } else {
          result.push(...files);
        }
        if (sources.length === count) {
          res(result);
        }
      });
    }
  });
}

async function createTempFiles(filePaths) {
  if (!fs.existsSync(TEMP_DIR)) {
    await fs.promises.mkdir(TEMP_DIR);
  }

  const tmpPaths = [];
  for (const filePath of filePaths) {
    const resolvedPath = path.resolve(__dirname, filePath);
    const fileContent = fs.readFileSync(resolvedPath, 'utf-8');
    const newPath = path.resolve(TEMP_DIR, `${path.basename(filePath).replace('.js', '.tmp.js')}`);
    const newCode = getTemplatedComponentCode(fileContent);
    fs.writeFileSync(newPath, newCode);

    tmpPaths.push(newPath);
  }
  return tmpPaths;
}

async function main() {
  const currentPath = path.resolve(__dirname, __filename);
  const scriptIndex = process.argv.indexOf(currentPath);
  const sources = [];
  let optionStart = scriptIndex + 1;
  for (optionStart; optionStart < process.argv.length; optionStart++) {
    const arg = process.argv[optionStart];
    if (arg.includes('--')) {
      break;
    }
    sources.push(path.resolve(process.cwd(), arg));
  }
  const filePaths = await globPath(sources);
  const tmpFilePaths = (await createTempFiles(filePaths)).reduce((p, c) => `${p} '${c}'`, '');

  const options = process.argv.slice(optionStart).reduce((p, c) => `${p} ${c}`, '');
  const { exec } = require('child_process');

  const cmd = `wca analyze ${tmpFilePaths} ${options}`;
  exec(cmd, (err, stdout) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);

    // removing tmp files after analyzation
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  });
}

main();
