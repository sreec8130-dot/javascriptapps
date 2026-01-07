const nums = [1, 2, 3, 4, 5];
function isEven(n) {
    return n % 2 === 0;
}
const result = nums.filter(isEven);
console.log(result);
//map function//
const nums1 = [1, 2, 3, 4, 5];
const result1 = nums1.filter((n) => {
    return n % 2 === 0;
});
console.log(result1);