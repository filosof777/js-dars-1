let arr = [4, 8, 11, 2, 15, 7, 16];
let elem = arr.pop();
arr.sort(arr);
console.log(arr)

for (let i = elem; i >= 0; i--) {
  if (elem > arr[i]) {
    console.log(arr[i]);
  }
}
