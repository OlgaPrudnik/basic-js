const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let array = [];
  let add = options.hasOwnProperty('addition') ? String(options.addition) : '';

  let calc = options.repeatTimes || 1;
  let innerCalc = options.additionRepeatTimes;
  let sum = options.separator || '+';
  let innerSum = options.additionSeparator  || '|';


  for (let i = 0; i < calc; i++) {
      const innerArray = [];

      for (let j = 0; j < innerCalc; j++) {
          innerArray.push(add);
      }

      array.push(str + (innerCalc ? innerArray.join(innerSum) : add));
  }


  return array.join(sum);
}

module.exports = {
  repeater
};
