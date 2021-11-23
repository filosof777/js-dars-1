let a = [1, 8, 15, 4, 10, 101, 45, 12];
let b = [];

for (let i = a.length-1; i >= 0; i--) {
  if (a[i] % 2 == 0) {
    b.push(a[i]);
  } else {
    continue;
  }
}
console.log(`Massivdagi juft sonlar ${b} va ularning soni ${b.length} ta`);