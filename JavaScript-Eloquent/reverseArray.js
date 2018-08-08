function reverseArray(arr) {
  let newArr = [];
  for(let i = arr.length -1; i >= 0 ; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function reverseArrayInPlace(arr) {
  let len = arr.length -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    arr.push(arr[i]);
  }
  while (arr.length-1 > len) {
    arr.shift();
  }
  return arr;
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);