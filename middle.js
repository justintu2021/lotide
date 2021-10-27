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
  
const middle = function(array) {
  let result =[]
  if (array.length === 1 || array.length === 2) {
    result;
  }
  else {
    if (array.length % 2 !== 0) {
      result.push(array[(array.length + 1) / 2 - 1]);
    }
    else {
      result.push(array[(array.length / 2) - 1]);
      result.push(array[(array.length) / 2]);
    }
  }
return result;  
} 

////// Test cases
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);


assertArraysEqual(middle([1,2]),[1]);
assertArraysEqual(middle([1]),[2]);
assertArraysEqual(middle([1,2,3,4,5]),[2]);
assertArraysEqual(middle([1,2,3,4,5,6]),[2,3]);