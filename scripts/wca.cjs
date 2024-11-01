const fs = require('fs');
const path = require('path');
const glob = require('glob');
const util = require('util');
const promisifiedGlob = util.promisify(glob);

const { getTemplatedComponentCode }  = require('./auro-component-template.wca.cjs');
const WAC_DIR = path.resolve(process.cwd(), './docs/wca');

async function globPath(sources) {
  try {
    const fileArrays = await Promise.all(
      sources.map(source => promisifiedGlob(source))
    );
    return fileArrays.flat();
  } catch (err) {
    console.error('Error processing glob patterns:', err);
    throw err; // Re-throw to handle failure at caller
  }
}

async function createExtendsFile(filePaths) {
  if (!fs.existsSync(WAC_DIR)) {
    await fs.promises.mkdir(WAC_DIR, { recursive: true });
  }

  for (const filePath of filePaths) {
    const resolvedPath = path.resolve(process.cwd(), filePath);
    const fileContent = await fs.promises.readFile(resolvedPath, 'utf-8',);
    const newPath = path.resolve(WAC_DIR, `${path.basename(filePath)}`);
    const newCode = getTemplatedComponentCode(fileContent, path.relative(WAC_DIR, filePath));
    fs.writeFileSync(newPath, newCode);
  }
}

async function main() {
  const currentPath = path.resolve(__dirname, __filename);
  const scriptIndex = process.argv.indexOf(currentPath);

  // files to analyze
  const filePaths = await globPath(process.argv.slice(scriptIndex + 1));

  await createExtendsFile(filePaths);
}

main();
