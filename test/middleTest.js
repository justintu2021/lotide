const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');



////// Test cases
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);


assertArraysEqual(middle([1,2]),[1]);
assertArraysEqual(middle([1]),[2]);
assertArraysEqual(middle([1,2,3,4,5]),[2]);
assertArraysEqual(middle([1,2,3,4,5,6]),[2,3]);


const myObject = {
  a: 6,     
  b: "abc", 
  c: true,  
  d: null,  
};