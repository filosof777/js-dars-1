let x = 0.5;
let sum;

if (x > 0) {
  sum = 2 * Math.sin(x)  
} else if (x <= 0) {
  sum = x - 6;
}

console.log(sum);