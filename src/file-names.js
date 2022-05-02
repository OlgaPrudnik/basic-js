const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!names.length) return []
  let reverseResult = [];
  let stek = [];
  let counter = 0;
  for (let i = 0; i < names.length; i++) {
      if (names.indexOf(names[i]) !== names.lastIndexOf(names[i])) {
          counter++
          stek.push(names[i])
      }
  } if (counter) {
      let count = counter;
      let reversNames = names.reverse();
      for (let i = 0; i < reversNames.length; i++) {
          if (reversNames[i] == stek[0]) {
              if (count - 1) {
                  reverseResult.push(reversNames[i] + `(${count - 1})`)
                  count--
              } else {
                  reverseResult.push(reversNames[i])
              }
          } else if ((stek[0] + `(1)` == reversNames[i])) {
              reverseResult.push(reversNames[i] + `(1)`)
          } else {
              reverseResult.push(reversNames[i])
          }
      }
  }
  const result = reverseResult.reverse();
  return counter ? result : names;
}

module.exports = {
  renameFiles
};
