// function valid(a, b, c) {
//   if (a + b + c == 180 && a != 0 && b != 0 && c != 0) {
//     process.stdout.write("The triangle is valid");
//   } else {
//     process.stdout.write("The triangle is invalid");
//   }
// }

// valid(30, 90, 60);

const arr = [0, 2, 3, 4, 5, 6];
const new1 = [2, 33, 44, 3, 22, 34];
const newarr = [];
const reseach = arr.forEach((d) => {
  newarr.push(new1[d]);
});
console.log(newarr);
const resmap = arr.map((d) => {
  console.log(d);
});

// console.log(reseach);
// console.log(resmap);
