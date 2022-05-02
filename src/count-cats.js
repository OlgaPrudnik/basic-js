const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let countCats = arr => arr.map(item => item.filter(item => item == "^^").length).reduce((sum, current) => sum + current, 0);


module.exports = {
  countCats
};
