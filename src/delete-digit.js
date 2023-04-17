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
function deleteDigit( n ) {
  // throw new NotImplementedError('Not implemented');
  const minimum = n
    .toString()
    .split('')
    .sort()
    .shift();
  const splited = n.toString().split('');

  const deletedNum = splited.indexOf(minimum);
  splited.splice(deletedNum, 1);
  return +splited.join('');
}

module.exports = {
  deleteDigit
};
