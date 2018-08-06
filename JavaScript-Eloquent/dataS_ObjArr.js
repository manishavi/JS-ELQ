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