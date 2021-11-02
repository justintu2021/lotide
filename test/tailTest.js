const tail = require('../tail')
const assertEqual = require('../assertEqual');

const assert = require('chai').assert;

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const words1 = ["a"];
console.log(tail(words1));
assertEqual(tail(words1), 1);

describe('#TailTest', () => {
  it("return Labs from [\"Yo Yo\", \"Lighthouse\", \"Labs\"]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);
  });

  it("return Labs from [\"a\"]", () => {
    assert.deepEqual(tail(["a"]),[]);
  });
});

