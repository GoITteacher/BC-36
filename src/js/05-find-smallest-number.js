/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

function findSmallesNumber(numbers) {
  let minNumber = -Infinity;
  for (let number of numbers) {
    if (number > minNumber) {
      minNumber = number;
    }
  }
  return minNumber;
}

console.log(findSmallesNumber([-2, -2, -2, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4
