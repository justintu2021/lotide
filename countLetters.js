const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`); 
  }
};

const countLetters = function(str) {
  let listOfLet = [];
  let result = {};
  for (let char of str) {
    if (char !== " ") {
    listOfLet.push(char)
    }
  }
  for (let i of listOfLet) {
    if(result[i]) {
      result[i] += 1
    }
    else {
      result[i] =1
    }
  }
return result
}

console.log(countLetters("lighthouse in the house"))