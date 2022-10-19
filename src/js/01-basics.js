/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

//const arr = [10, 20, 30, 40, 50, 23, 45, 1, 56, 2, 5, 1, 45, 1, 5, 7];
// console.log(arr[3]);
//console.log(arr.length);
// arr[arr.length - 1] = 'TEST';
// console.log(arr[arr.length - 1]);
// console.log(arr);

/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

// num, string, bool, null, undefined, symbol

// let x = 10;
// let y = x;
// y = 30;
// console.log(x, y);

// const arr1 = [10];
// const arr2 = arr1;

// arr2[0] = 'Test';

// console.log(arr1[0]);
// console.log(arr2[0]);

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

const newFriends = ['Mango', 'Kiwi', 'Poly', 'Ajax1', 'Ajax2', 'Ajax3', 'end'];

// for (let i = 0; i < newFriends.length; i++) {
//   newFriends[i] += '!!!!';
// }
// console.log(newFriends);

// for (let value of newFriends) {
//   console.log(value + '!');
// }

//split, join, indexOf, includes, push, pop, shift, unshift;

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax', 'ajax', 'Ajax', 'end'];

// ==========================

// const str = 'awd sef awdh rd gk awddgh drgfth';
// const arr = str.split(' ');
// console.log(arr);

// ==========================

// const str = friends.join('!\n');
// console.log(str);

// ==========================

// console.log(friends);
// const index = friends.lastIndexOf('Ajax');
// console.log(index);

// ==========================

// console.log(friends.includes('ajax'));

// ==========================
// push, pop, shift, unshift

// console.log(friends.length);

// friends.push('TEST');
// friends.unshift('Second');
// friends.push('123');
// friends.unshift('FIRST');
// friends.push('END!');

// console.log(friends);

// console.log(friends.shift());
// console.log(friends.shift());
// console.log(friends.shift());
// console.log(friends.shift());

// console.log(friends);

// =========================
