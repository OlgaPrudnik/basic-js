const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let max = 0;
  let result = 0;
  const number = String(n);
  for (let i = 0; i < number.length; i++) {
    result = number.slice(0, i) + number.slice(i + 1);
    if (max < result) {
      max = +result;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
