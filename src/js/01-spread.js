/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

const array = [1, 2, 5, 7, 2, 7];
const array1 = [1, 2, 3, 4];
const array2 = ['-------'];
// const newArray = array.concat(['-------'], array1);
const newArray = [...array, ...array1, ...array2];

//console.log(newArray);

/*
 * Поиск самой маленькой или большой температуры (числа)
 */

// const temps = [21, 17, 29, 24, 6];
// const min = Math.min(...temps);
// console.log(min);

// ==========================

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a[0] === b[0]);
// console.log(a === b);

// a[0].x = 1000;

// console.log('a: ', a);
// console.log('b: ', b);

/*
 * Сшиваем несколько массивов в один через concat() и spread
 */

/* const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log(allTemps); */

/*
 * Распыление объектов
 * - Object.prototype.assign() и spread
 */

/* const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };
const x = { name: 'Mango' };
// const c = Object.assign({ name: 'Mango' }, a, b);
const c = { ...a, ...b, ...x };
console.log(c); */

/* const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  theme: 'light',
  showNotifications: false,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log(finalSettings); */

// const arr = [0, 1, 2, 3, 4, 5];
// const obj = { ...arr };

// const obj = {
//   a: 19,
//   b: 120,
//   c: 324,
// };

// const arr = [...obj];

// console.log(arr);
