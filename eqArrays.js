const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`); 
  }
};

const eqArrays = function(arr1,arr2) {
  if (arr1.length === arr2.length) {
    let arr3 =""
    for (let i in arr1) {
      if (arr1[i] === arr2[i]) {
        arr3 += "true"
      }
      else {
        arr3 += "false";
      }
    }
    if (arr3.includes("false")) {
      return false
    }
    else {
      return true
    }
  }
  else {
    return false
  }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false


