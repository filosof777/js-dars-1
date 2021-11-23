let n = 3;
let sum = 1;

if (n == 1) {
  console.log(1)
} else if (n > 1) {
  for (let i = 1; i <= n; i++) {
    sum = i * 2
    console.log(sum);
  }
}

