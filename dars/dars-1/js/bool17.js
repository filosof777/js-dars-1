let a = 100;
let b = Math.trunc(a / 100);
let d = Math.trunc(a % 100 / 10);
let e = a % 10;

console.log((b + d + e) % 2 != 0)