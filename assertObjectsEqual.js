const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1).sort(); // list key of obj1
  let key2 = Object.keys(object2).sort(); // list key of obj2
  let result;

  if (eqArrays(key1,key2)) {  // check if amount of keys is the same ?
    for (let i of key1) {
      if (typeof object1[i] === typeof object2[i]) { // compare type of key's values

        if (typeof object1[i] === "object") {      // if key's values are array
          if (eqArrays(object1[i],object2[i])) {
            result = true;
          }
          else {
            return false;
          }
        }

        else {                                  // if key's values are primitive
        if (object1[i] === object2[i]) {
          result = true;
        } else {
          return false;
          }
        }
      }  
      
      else {                            // if type of key's values is not the same 
        return false;
      }
    } 
  } else {                  // if numer of keys is different
    return false
  }
   
return result
};

const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i in arr1) {
      if(arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }    
  return true;
  }


  // FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
 if (eqObjects(object1,object2) === true) {
    console.log(`✅✅✅ Two objects are equal: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑Two objects are NOT equal: ${inspect(object1)} !== ${inspect(object2)}`); 
  }
};

const cd = { c: "1", d: ["2", 3,] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertObjectsEqual(cd,dc)

