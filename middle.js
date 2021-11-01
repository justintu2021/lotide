const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
  
const middle = function(array) {
  let result =[]
  if (array.length === 1 || array.length === 2) {
    result;
  }
  else {
    if (array.length % 2 !== 0) {
      result.push(array[(array.length + 1) / 2 - 1]);
    }
    else {
      result.push(array[(array.length / 2) - 1]);
      result.push(array[(array.length) / 2]);
    }
  }
return result;  
} 

module.exports = middle;
