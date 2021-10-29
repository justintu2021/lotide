const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);


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
    console.log(`✅✅✅ Two arrays are equal: ${[arr1]} === ${[arr2]}`);
  } else {
    console.log(`🛑🛑🛑Two arrays are NOT equal: ${[arr1]} !== ${[arr2]}`); 
  }
};

assertArraysEqual(map(words,word => word[2]), ["o", "n","o","m"])


assertArraysEqual(map(words,word => word.length +1 ), [7, 8, 3,6,4])