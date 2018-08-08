function range(start, end, step=1) {
  let arr = []
  if(step >= 0) {
    for (let i = start; i <= end; i = i + step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i = i + step) {
      arr.push(i);
    }
  }
  return arr;
}


function sum(arr) {
  let sum = 0;
  for(let i of arr) {
    sum = sum +i;
  }
  return sum;
}
console.log((range(1, 10)));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

