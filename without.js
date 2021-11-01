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



const without = function(source, itemsToRemove) {
  let newarr =[];

  for (let i of source) {
    if (itemsToRemove.includes(i) === false) {
        newarr.push(i)
      }
    }
return newarr;
}

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);