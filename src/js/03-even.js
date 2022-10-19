/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

const numbers = [1, 2, 8, 9, 14, 4, 15, 27, 30, 18, 14, 3, 7, 9, 10, 22];
let sum = 0;
let count = 0;

/* for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  if (num % 2 === 0) {
    sum += num;
    count++;
  }
} */

/* for (const num of numbers) {
  if (num % 2 === 0) {
    sum += num;
    count++;
  }
} */

console.log(sum);
console.log(count);
