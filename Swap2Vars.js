let a = 5;
let b = 6;

console.log(`Value before swapping a=${a} and b=${b}`);

// a = b; // a = 6
// b = a; // b = 6

// let c = b;
// b = a;
// a = c;

a = a + b; // 11
b = a - b; // 11 - 6 = 5
a = a - b; // 11 - 5 = 6

console.log(`Value after swapping a=${a} and b=${b}`);