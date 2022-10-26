/*

 - Поелементо перебирає оригінальний масив.
 - Не змінює оригінальний масив.
 - Результат роботи колбек-функції записується у новий масив.
 - Повертає новий масив однакової довжини.

*/
let array = [1, 6, 1, 5, 8, 2, 1];

let users = [
  {
    name: '1',
    age: 23,
  },
  {
    name: '2',
    age: 23,
  },
  {
    name: '3',
    age: 23,
  },
];

const newArray = users.map((value, index, array) => {
  const copyObj = { ...value };
  copyObj.index = index;
  return value;
});

console.table(users);
console.table(newArray);
