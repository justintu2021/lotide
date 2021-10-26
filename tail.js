const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`); 
  }
};

const tail = function(arr) {
  let newarr = [];
  for (let i = 1; i < arr.length; i++) {
    newarr.push(arr[i]);
  }
  return newarr;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const words1 = ["a"];
console.log(tail(words1));
assertEqual(tail(words1), 1);