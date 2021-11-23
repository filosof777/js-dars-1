let weekDay = 3;
let sum = weekDay % 7;

switch (sum) {
  case 1:
    console.log("Juma");
    break;
  case 2:
    console.log("Shanba");
    break;
  case 3:
    console.log("Yakshanba");
    break;
  case 4:
    console.log("Dushanba");
    break;
  case 5:
    console.log("Seshanba");
    break;
  case 6:
    console.log("Chorshanba");
    break;
  case 0:
    console.log("Payshanba");
    break;
}