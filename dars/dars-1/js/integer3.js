let a = 123;

let g = a % 100 / 10;
g = Math.trunc(g);

let c = a % 10;
let b = a / 100;

b = Math.trunc(b);

let summ = (c*100) + (g*10) + b;