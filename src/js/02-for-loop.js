/*
 * Цикл while
 */

// const len = 0;
// let i = 0;

// while (i < len) {
//   console.log(`Копаю - ${i}рядок`);
//   i++;
// }

/*
 * Цикл do while
 */

// do {
//   console.log(`Копаю - ${i}рядок`);
//   i++;
// } while (i < len);

/*
 * Цикл for
 */

/* const len = 100;
for (let i = 1; i <= len; i++) {
  console.log(i);
} */

// 5 % 2 = 5-4 = 1

// 6%2 = 6-6 = 0

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

/* const employeesLength = 20;
let totalSalary = 0;

for (let i = 0; i < employeesLength; i++) {
  const salary = Math.ceil(Math.random() * 4500) + 500;
  totalSalary += salary;
}

console.log(totalSalary); */

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */
const min = 50;
const max = 100;
let total = 0;

/* 
for (let i = min; i <= max; i++) {
  if (i % 2 === 0) {
    total += i;
  }
} 
*/

/* 
if (min % 2 !== 0) min++;
for (let i = min; i <= max; i += 2) {
  total += i;
}
console.log(total);

const n = Math.floor((max - min) / 2);
const sum = (n * (2 + 2 * n)) / 2;
console.log(sum);
 */

/* let result = '';
const len = 10;
for (let y = 0; y < len; y++) {
  for (let x = 0; x < len; x++) {
    result += `${x * y}\t`;
  }

  result += '\n';
}

console.log(result); */
