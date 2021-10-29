const takeUntil = function(array, callback) {
  const newarr=[]
  for (let elem of array) {
    if (callback(elem) === false) {
      newarr.push(elem)
    } else {
      break;
    }
  }   
return newarr
};

 const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);


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


assertArraysEqual(takeUntil(data1, x => x >3 ), [ 1, 2 ])
assertArraysEqual(takeUntil(data2, x => x === 'to'), [ 'I\'ve', 'been'])