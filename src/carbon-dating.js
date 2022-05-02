const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if( !Boolean( Number(sampleActivity ) ) || sampleActivity  === undefined || Number(sampleActivity ) < 0 || Number(sampleActivity ) > 15 || typeof sampleActivity  !== "string" ){
    return false;
  }
  
  const activity = Number(sampleActivity );

  return Math.ceil( Math.log2( MODERN_ACTIVITY / activity ) * HALF_LIFE_PERIOD );
}


module.exports = {
  dateSample
};
