const square = function(x) {
  //function with 1 parameter
  return x * x;
};
console.log(square(4));

const makeNoise = function() {
  //function without parameter
  console.log("Ding Dong!");
};
makeNoise();

const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 3));

let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40

const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

hummus(2);

console.log("The future says:", future());

function future() {
  return "You'll have flying cars";
}

function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));

// function printFarmInventory(cows, chickens) {
//   let cowStr = String(cows);
//   while(cowStr.length < 3) {
//     cowStr = '0' + cowStr;
//   }
//   console.log(`${cowStr} Cows`);
//   let chickStr = String(chickens);
//   while (chickStr.length < 3) {
//     chickStr = "0" + chickStr;
//   }
//   console.log(`${chickStr} Chickens`);
// }
// printFarmInventory(7, 11);

// function printZeroPaddedWithLabel(number, label) {
//   let numStr = String(number);
//   while(numStr.length > 3) {
//     numStr = "0" + numStr;
//   }
//   console.log(`${numStr} ${label}`);
// }

function zeroPad(number, width) {
  let Str = String(number);
  while (Str.length < width) {
    Str = "0" + Str;
  }
  return Str;
}
function printFarmInventory(cows, chickens, pigs) {
  // printZeroPaddedWithLabel(cows, "Cows");
  // printZeroPaddedWithLabel(chickens, "Chickens");
  // printZeroPaddedWithLabel(pigs, "Pigs");
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(7, 11, 3);
