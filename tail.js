const assertEqual = require ('./assertEqual')

const tail = function(arr) {
  let newarr = [];
  for (let i = 1; i < arr.length; i++) {
    newarr.push(arr[i]);
  }
  return newarr;
};

module.exports = tail;