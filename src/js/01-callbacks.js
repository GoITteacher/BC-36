/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

/*
 * функция doMath(a, b, callback)
 */

function doMath(a, b, callback) {}

//doMath(5, 5, pow);

/*
 * Отложенный вызов: регистрация событий
 */

// const buttonRef = document.querySelector('.js-button');

// function handleBtnClick() {
//     console.log('Callback');
// }

// buttonRef.addEventListener('click', handleBtnClick);

/*
 * Отложенный вызов: интервалы
 */

function callback() {
  console.log('Через 2 секунды внутри колбека в таймауте');
}

// console.log('В коде перед таймаутом');

// setTimeout(function () {
//     console.log('test');
// }, 2000);

// console.log('В коде после таймаута');

// ================================================

const array = [1, 2, 3, 10, 5, 6, 7, 8];
