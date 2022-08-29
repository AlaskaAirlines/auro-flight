const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const removeRules = require('postcss-remove-rules');
const comments = require('postcss-discard-comments');
const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, '../src');

/**
 * Default postCSS run.
 */
fs.readdir(directoryPath, (err, files) => {
  // handling error
  if (err) {
    return console.log(`Unable to scan directory: ${err}`);
  }
  // listing all files using forEach
  files.forEach((file) => {
    if (file.includes(".css")) {
      standardProcessor(file);
    }
  });
});

/**
 * The standardProcessor function applies tokens for fallback selectors
 * and completes a post cleanup.
 * @param {string} file
 */
function standardProcessor(file) {
  fs.readFile(`src/${file}`, (err, css) => {
    postcss([
      autoprefixer,
      comments
    ]).
      use(comments({
        remove(comment) {
          return comment[0] == "@";
        }
      })).
      use(removeRules({
        rulesToRemove: {
          ':root': '*'
        }
      })).
      process(css, { from: `src/${file}`,
        to: `src/${file}` }).
      then((result) => {
        fs.writeFile(`src/${file}`, result.css, () => true);
      });
  });
}
