const nums = [1, 2, 3, 4, 5];
function sum(acc, n) {
    return acc + n;

}
const result = nums.reduce(sum, 5);
console.log(result);

const nums1 = [1, 1, 1];
function sum(acc, n) {
  return acc + n;
}
const result1 = nums1.reduce(sum, -3);
console.log(result1);
//inline//
const nums2 = [1, 1, 1];
const result2 = nums2.reduce((total, num) => total + num, 0);
console.log(result2);