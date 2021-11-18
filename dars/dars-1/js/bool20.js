let a = 12345;

let b = Math.trunc(a / 10000);
let c = Math.trunc(a / 1000 % 10);
let e = Math.trunc(a / 100 % 10); 
let f = Math.trunc(a / 10 % 10);
let g = a % 10;

console.log(b < c && b < e && b < f && b < g)