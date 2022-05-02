const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let encStr = '';
  let account = 0;

  for (let i = 0; i < str.length; i++) {
      account++;
      if (str[i] !== str[i + 1]) {
        encStr += `${account > 1 ? account : ''}${str[i]}`;
          account = 0;
      }
  }

  return encStr;
}

module.exports = {
  encodeLine
};
