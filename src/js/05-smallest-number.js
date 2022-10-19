/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

let nums = [1, 2, 5, 6, 7, 9, 3, 9, 2, -10, 3, 6, 9];

/* 
let minNumber = nums[0];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] <= minNumber) {
    minNumber = nums[i];
  }
}
console.log(minNumber); 
*/
/* 
let minNumber = nums[0];
for (let num of nums) {
  if (num <= minNumber) {
    minNumber = num;
  }
}
console.log(minNumber); 
*/

/* 
let indexMinNumber = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] >= nums[indexMinNumber]) {
    indexMinNumber = i;
  }
}
nums[indexMinNumber] = nums[indexMinNumber] * 2;
console.log(nums);

*/
