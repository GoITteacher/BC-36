/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

/* function foo(len, callback) {
  for (let i = 0; i < len; i++) {
    callback();
  }
}

function x() {
  console.log('Саджаю');
}

function y() {
  console.log('Поливаю');
}

function z() {
  console.log('Збираю');
}

foo(10, x);

foo(10, y);
foo(10, y);
foo(10, y);

foo(10, z); */

/*
 * функция doMath(a, b, callback)
 */

/* function doMath(a, b, callback) {
  const res = callback(a, b);
  console.log(res);
}

function multiply(x, y) {
  return x * y;
}

function sum(x, y) {
  return x + y;
}

function pow1(x, y) {
  if (x < 10) return x ** y;

  return 0;
}

function pow2(x, y) {
  if (x > 10) return x ** y;

  return 0;
}

doMath(40, 5, pow1); */

/*
 * Отложенный вызов: регистрация событий
 */

// const buttonRef = document.querySelector('.js-button');

// function handleBtnClick() {
//   console.log('Callback');
// }

// buttonRef.addEventListener('click', handleBtnClick);

// buttonRef.addEventListener('click', e => {});

/*
 * Отложенный вызов: интервалы
 */

// function callback() {
//   console.log('Через 2 секунды внутри колбека в таймауте');
// }

// console.log('В коде перед таймаутом');

// setTimeout(()=>{

// }, 5000);

// console.log('В коде после таймаута');

// ================================================

/* function foo(x, callback1, callback2) {
  callback2();
  x();
  callback1();
}

foo(
  function () {
    console.log(0);
  },

  function () {
    console.log(1);
  },
); */
