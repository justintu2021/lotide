const letterPositions = function(sentence) {
  const results = {};
  let listOfLetter = [];
  
  for (let char of sentence) {
    if (char !== " ") {
      listOfLetter.push(char)   
    }
  }
  for (let i of listOfLetter) {
    if(results[i]) {
      results[i] += 1
    }
    else {
      results[i] =1
    }
  }
  
  for (const m in results) {
    results[m] = []
  };

  let key = Object.keys(results)
  for (var t in key) {
    for (var j in listOfLetter) {
      if (key[t] === listOfLetter[j]) {
        results[key[t]].push(Number(j))
      }
    }
  }
  return results
  };

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

console.log(letterPositions("I love you"))
assertArraysEqual(letterPositions("I love you")["e"], [4]);