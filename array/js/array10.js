let a = [1, 8, 15, 4, 10, 101, 45, 12];
let b = [];
let c = [];

for (let i = 0; i <= a.length-1; i++) {
  if (a[i] % 2 == 0) {
    c.push(a[i]);
  }
}
console.log(`Massivdagi juft sonlar ${c} va ularning soni ${c.length} ta`);

for (let i = a.length-1; i >= 0; i--) {
  if (a[i] % 2 == 0) {
    continue;
  } else {
    b.push(a[i]);
  }
}
console.log(`Massivdagi toq sonlar ${b} va ularning soni ${b.length} ta`);