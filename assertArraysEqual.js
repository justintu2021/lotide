const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  else {
    for (let i in arr1) {
      if(arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }    
  return true;
  }
    

const assertArraysEqual = function(arr1,arr2) {
  if (eqArrays(arr1,arr2) === true) {
    console.log(`✅✅✅ Two arrays are equal: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑Two arrays are NOT equal: ${arr1} !== ${arr2}`); 
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1], false); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3],false) // => false