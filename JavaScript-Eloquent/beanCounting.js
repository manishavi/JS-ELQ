// function countBs(str) {
//   let count = 0;
//   for(let i in str) {
//     if(str[i] === 'B')
//       count++;
//   }
//   return count;
// }

function countChar(str, ch) {
  let count = 0;
  for (let i in str) {
    if (str[i] === ch) count++;
  }
  return count;
}

function countBs(str) {
  return countChar(str, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));