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