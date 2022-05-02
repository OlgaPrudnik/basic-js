const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = '';
  let count = 1;
  for (let i = 0; i < domains.length; i++) {
    if (domains[i] === domains[i + 1]) {
      count++;
    } else if (count > 1) {
      result += `${count}${domains[i]}`;
      count = 1;
    } else {
      result += `${domains[i]}`;
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
