function deepEqual(obj1, obj2) {

  if (obj1 === obj2) return true;

  if (obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 != "object") return false;

  let propsInobj1 = 0;
  let propsInobj2 = 0;

  for(let prop in obj1) {
    propsInobj1 += 1;
  }

  for (let prop in obj2) {
    propsInobj2 += 1;
    if(!(prop in obj1) || !deepEqual(obj1[prop], obj2[prop]))
      return false;
  }
  return propsInobj1 == propsInobj2;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true