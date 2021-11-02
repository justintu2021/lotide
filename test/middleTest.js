const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const assert = require('chai').assert;

////// Test cases
// assertArraysEqual(middle([1,2]),[]);
// assertArraysEqual(middle([1]),[]);
// assertArraysEqual(middle([1,2,3,4,5]),[3]);
// assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);


// assertArraysEqual(middle([1,2]),[1]);
// assertArraysEqual(middle([1]),[2]);
// assertArraysEqual(middle([1,2,3,4,5]),[2]);
// assertArraysEqual(middle([1,2,3,4,5,6]),[2,3]);


describe("#middleTest", () => {
  it("return [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]),[]);
  });

  it("return [] for [1]", () => {
    assert.deepEqual(middle([1]),[]);
  });

  it("return [3] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]),[3]);
  });

  it("return [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
  });

  it("return [1] for [1,2]", () => {
    assert.deepEqual(middle([1,2]),[1]);
  });

  it("return [2] for [1]", () => {
    assert.deepEqual(middle([1]),[2]);
  });

  it("return [2] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]),[2]);
  });

})