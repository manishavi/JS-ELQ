// prompt("Enter passcode"); <--- Run in browser(node)
// let theNumber = Number(prompt("Pick a number"));
let theNumber = Number(String(7));
console.log("Your number is the square root of " + theNumber * theNumber);
// console.log(prompt('Enter a number'));
let x = 30;
console.log('X =', x);
console.log(Math.max(2, 5));

let num;
// num = Number(5);
num = Number('A');
if (! Number.isNaN(num)) {
    console.log('Your number is square root of '+ num*num);
}