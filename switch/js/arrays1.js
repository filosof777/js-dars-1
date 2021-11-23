let nums = [54, 53, 47, 18, 100, 45];
let num = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 == 0) {
    num[num.length] = nums[i];
  }
}

console.log(num);