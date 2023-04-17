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
function repeater( str, options ) {
  // throw new NotImplementedError('Not implemented');
  console.debug('str', str)
  console.debug('options', options)
  let arr = [];
  let [repeatTimes, separator, addition, additionRepeatTimes, additionSeparator ] = options

  if (options) {
    separator = separator|| '+';
    additionSeparator = additionSeparator || '|';
    repeatTimes = repeatTimes || 1;
    addition = addition || '';
    additionRepeatTimes = additionRepeatTimes || 1;
  }

  let newStr = String(str) + addition.repeat(additionRepeatTimes)

  for (let i = 0; i < repeatTimes; i++) {
    arr.push(newStr)
  }

}

module.exports = {
  repeater
};
