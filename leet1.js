const n1 = [3];
const n2 = [-2, -1];
//best way to sort negative value in javascript usong function (a,b){return a-b}
const array = n1.concat(n2).sort(function (a, b) {
  return a - b;
});
// console.log(array[array.length / 2]);
let med = 0;
if (array.length % 2 === 0) {
  const ev1 = array.length / 2;
  med = (array[ev1] + array[ev1 - 1]) / 2;
  console.log(med);
} else {
  const od = array.length / 2 - 0.5;
  med = array[od];
  console.log(med);
}

//best way to sort negative value in javascript
const arr2 = [1, 2, 3];
const st = arr2.length - 1;

console.log((arr2[st] = arr2[st] + 1));
console.log(arr2);

var plusOne = function (digits) {
  const last = digits[digits.length - 1];
  console.log(last);

  //   if (last === 9) {
  //     digits[digits.length - 1] = 1;
  //     digits[digits.length] = 0;
  //   } else {
  //     digits[digits.length - 1] = digits[digits.length - 1] + 1;
  //     console.log("a");
  //   }

  while (last === 0) {}
  return digits;
};

console.log(plusOne([9]));

console.log(12 % 10);

function merge(num1, m, num2, n) {
  num1.splice(m);
  num2.splice(n);
  console.log(num1);
  console.log(num2);
  return num1.concat(num2).sort();
}
console.log("merge", merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

//count range sum

const countRange = (num, l, u) => {
  let count = 0;
  let res = 0;
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (i === j) {
        res = num[j];
      } else {
        res = res + num[j];
      }
      if (res >= l || res <= u) {
        count++;
      }
    }
  }
};

countRange([-2, 5, -1], -2, 2);

// find duplicate

const duplicate = (nums1) => {
  let arr = nums1;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = i + 1; j < nums1.length; j++) {
      if (nums1[i] === nums1[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
};

console.log("array value", duplicate([1, 2, 2, 3, 2, 1]));

var arr = [1, 2, 2, 1, 2, 3, 4, 4, 4, 2, 1, 4];

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log("using filter", removeDuplicates(arr));
