let a = 241;

let b = a / 100;
b = Math.trunc(b);
let d = a % 10;

let e = a / 10 % 10;
e = Math.trunc(e);

let c1, c2;
c1 = b * e * d;
c2 = b + e + d;