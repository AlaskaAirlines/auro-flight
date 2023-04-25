const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const comments = require('postcss-discard-comments');
const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, '../src');

/**
 * Default postCSS run
 */
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
      return console.log('Unable to scan directory: ' + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
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
    postcss([autoprefixer, comments])
    .use(comments({
      remove: function(comment) { return comment[0] == "@"; }
    }))
    .process(css, { from: `src/${file}`, to: `src/${file}` })
    .then(result => {
      fs.writeFile(`src/${file}`, result.css, () => true)
    })
  });
}
