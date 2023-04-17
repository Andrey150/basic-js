const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    return this.chain.length
  },
  addLink( value ) {
    // throw new NotImplementedError('Not implemented');
    this.chain.push(value)
    return this
  },
  removeLink( position ) {
    // throw new NotImplementedError('Not implemented');
    if (typeof position === 'number' && Number.isInteger(position) && !Number.isNaN(position) && position > 0) {
      this.chain.splice(position - 1, 1)
    } else {
      throw new Error("You can't remove incorrect link!")
    }
    return this
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
