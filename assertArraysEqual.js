const eqArrays = require('./eqArrays')
    
const assertArraysEqual = function(arr1,arr2) {
  if (eqArrays(arr1,arr2) === true) {
    console.log(`✅✅✅ Two arrays are equal: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑Two arrays are NOT equal: ${arr1} !== ${arr2}`); 
  }
};

module.exports = assertArraysEqual;



