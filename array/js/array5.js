let number = 20;
let a = 0;
let b = 1;
let sum;
let arr = [];

for (let i = 1; i <= number; i++) {
  sum = a + b;
  a = b;
  b = sum;
  arr.push(a);
}
console.log(arr)