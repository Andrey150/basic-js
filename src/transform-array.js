const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr) {
  // throw new NotImplementedError('Not implemented');

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (arr.length === 0) {
    return [];
  }

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'number') {
      if (arr[i] === '--double-next' && arr[i + 2] !== '--double-prev' && !!arr[i + 1]) {
        arr.push(arr[i + 1])
      }
      if (arr[i] === '--double-prev' && !!arr[i - 1]) {
        arr.push(arr[i - 1])
      }
      if (arr[i - 1] === '--discard-prev' && !!arr[i - 1]) {
        arr.pop()
      }
      if (arr[i] === '--discard-next' && arr[i + 2] !== '--discard-prev' && !!arr[i + 1]) {
        i++
      }
    }

  }
  return  newArr

}

module.exports = {
  transform
};
