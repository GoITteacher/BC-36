/*

    EVERY
 - Не змінює оригінальний масив.
 - Поелементо перебирає оригінальний масив.
 - Повертає true, якщо всі елементи масиву задовiльняють умову.
 - Повертає false, якщо хоча б один елемент масиву не задовiльняє умову.
 - Перебирання масиву припиняється, якщо колбек повертає false.
*/

// let array = [-1, -6, -1, -6, -1, -6, -1, -6, -1];
// const isPositiveArray = array.every(value => value > 0);
// const isNegativeArray = array.every(value => value < 0);
// console.log(isNegativeArray);

/*
    SOME
 - Не змінює оригінальний масив.
 - Поелементо перебирає оригінальний масив.
 - Повертає true, якщо хоча б один елемент масиву задовольняє умову.
 - Повертає false, якщо жоден елемент масиву не задовольняє умову.
 - Перебирання масиву припиняється, якщо колбек повертає true.
*/

// let array = [-1, -6, -1, -6, 1, -6, -1, -6, -1];

// const isPositive = array.some(value => {
//   console.log(value);

//   return value > 0;
// });

// console.log(isPositive);
