const tail = require('../tail')
const assertEqual = require('../assertEqual');



const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const words1 = ["a"];
console.log(tail(words1));
assertEqual(tail(words1), 1);