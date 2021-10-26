const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log("✅✅✅Assertion Passed:" + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑Assertion Failed:" + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("justin tu 123","justin tu 123");
assertEqual("justin tu 123","justin tu 12");
assertEqual(55,55);
assertEqual(55,65);