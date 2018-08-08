let JOURNAL = require("./journal.js");
let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH
let seq = [1, 2, 3];
seq.push(4);
seq.push(5);
console.log(seq);
console.log(seq.pop());
console.log(seq);

let d = {
    sq: false,
    eve: ["a", "b", "c", "d"]
};

console.log(d.sq);
console.log(d.f);
d.f = true;
console.log(d.f);
console.log(d);

let obj = {l: 1, r:2};
console.log(obj.l);
delete obj.l;
console.log(obj);
console.log("l" in obj);
console.log("r" in obj);
console.log(obj);

console.log(Object.keys({ x: 0, y: 0, z: 2 }));

let A = { a: 1, b: 2 };
Object.assign(A, { b: 3, c: 4 });
console.log(A);
let Arr = [1, 2, 3, 4];
console.log(typeof(A));

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10

const score = { visitors: 0, home: 0 };
score.visitors = 1;
// score = { visitors: 1, home: 1 }; //this isn't allowed

let journal = [];

function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(
  [
    "work",
    "ice cream",
    "cauliflower",
    "lasagna",
    "touched tree",
    "brushed teeth"
  ],
  false
);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));
// → 0.068599434


function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]
for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

console.log(journalEvents(JOURNAL));

for (let event of journalEvents(JOURNAL)) {
  console.log(event + ":", phi(tableFor(event, JOURNAL)));
}

for (let entry of JOURNAL) {
  if (entry.events.includes("peanuts") &&
    !entry.events.includes("brushed teeth")) {
    entry.events.push("peanut teeth");
  }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
// → 1

let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3

console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
console.log([0, 1, 2, 3, 4].slice());

function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5
console.log("one two three".indexOf("ee"));
// → 11
console.log("one two three".indexOf("o "));
console.log("  okay \n ".trim());
// → okay
console.log(String(6).padStart(3, "0"));
// → 006

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

console.log("LA".repeat(3));
// → LALALA
let string = "abc";
console.log(string.length);
// → 3
console.log(string[1]);
// → b

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9

let wwords = ["never", "fully"];
console.log(["will", ...wwords, "understand"]);
// → ["will", "never", "fully", "understand"]

function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));
// → {x: 0.3667, y: 1.966}

console.log(Math.floor(Math.random() * 10));
// → 2