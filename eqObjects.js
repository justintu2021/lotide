// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1).sort(); // list key of obj1
  let key2 = Object.keys(object2).sort(); // list key of obj2
  let result;

  if (eqArrays(key1,key2)) {  // check if amount of keys is the same ?
    for (let i of key1) {
      if (typeof object1[i] === typeof object2[i]) { // compare type of key's values

        if (typeof object1[i] === "object") {      // if key's values are array
          if (eqArrays(object1[i],object2[i])) {
            result = true
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

const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`); 
  }
};

////////////////////////////////////////
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// assertEqual(eqObjects(ab,ba),true)
// assertEqual(eqObjects(ab,abc),false)

//////////////////////////////////////////
const cd = { c: "1", d: ["2", 3,] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd,dc),true)
assertEqual(eqObjects(cd,cd2),false)