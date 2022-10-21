/*
 * Функции
 * - Функциональные выражения
 * - Аргументы и параметры
 * - Возврат значения
 */

/* 
function sum(x, y, z) {
  let res = x + y + z;
  return res;
}
console.log(sum(10, 20, 30));
console.log(sum(5, 10, 15));
console.log(sum(25, 20, 10)); 
*/

/* function sum(x, y) {
  console.log('function');
  return x + y;
}

console.log('before');

console.log(sum(10, 20));

console.log('after'); */

// function foo() {
//   const args = Array.from(arguments);
//   console.log(args);
// }

/* function foo(x, y, ...args) {
  console.log(x);
  console.log(args);
}

foo(12, 234, 456); */
/* 
const logins = ['log1', 'log2', 'log3', 'log4', 'log5'];
const loginToFind = 'log1';

function findLogin(loginToFind, logins) {
  for (const login of logins) {
    if (login === loginToFind) {
      return `Логін ${login} було знайденно!`;
    }
  }

  return `Логін ${loginToFind} не знайденно!`;
}

const result = findLogin(loginToFind, logins);
console.log(result); */

/* function withdraw(amount, balance) {
  // Якщо умова виконується, викликається console.log
  // і вихід із функції. Код після тіла if не виконається.
  if (amount === 0) {
    console.log('Для проведення операції введіть суму більшу за нуль');
    return;
  }

  // Якщо умова першого if не виконалась, його тіло пропускається
  // та інтерпретатор доходе до другого if.
  // Якщо умова виконується, викликається console.log і вихід із функції.
  // Код, що знаходиться після тіла if, не виконається.
  if (amount > balance) {
    console.log('Недостатньо коштів на рахунку');
    return;
  }

  // Якщо жоден із попередніх if не виконався,
  // інтерпретатор доходить до цього коду і виконує його.
  console.log('Операція зняття коштів проведена');
} */

/* myFun();
myFun2();

function myFun() {
  console.log('FUN1');
}

let myFun2 = function () {
  console.log('FUN2');
};
 */

/* const min = 10;
function myFun() {
  let x;
  let y;
  let min = 20;
  console.log(min);
}
myFun();
 */
/*
 * - Стек вызовов
 * - Stack trace и поиск ошибок
 */
/* 
function myFun() {
  for (let i = 0; i < 100000; i++) {
    console.log(i);
  }
  return;
}

console.log('before');
console.log(myFun());
console.log('after');
 */
/* 
function bar() {
  console.log('bar');
}

function baz() {
  console.log('baz');
}

function foo() {
  console.log('foo');
  bar();
  baz();
}

foo();
foo();
foo(); */
/* 
function foo() {

}

foo(); */
