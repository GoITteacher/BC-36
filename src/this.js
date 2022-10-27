/* 
Контекст виконання функції
*/

/* 
Правила визначення this
    - this у глобальній області видимості
    - this в методі об'єкта
    - this в callback-функціях
    - this у стрілочних функціях
*/

// this у глобальній області видимості

// function foo() {
//   console.log(this);
// }
// foo();

// const foo1 = () => {
//   console.log(this);
// };
// foo1();

// this в методі об'єкта
// console.log(obj);
// const obj = {
//   name: 'awdawd',
//   model: 'sefsef',
//   foo() {
//     console.log(this);
//   },

//   foo1: () => {
//     console.log(this);
//   },
// };

// obj.foo2 = () => {
//   console.log(this);
// };

// const obj1 = {
//   foo2: obj.foo1,
// };

// obj1.foo2();

// ===================

/* 
1. Який тип функції

- якщо стрілчата, дивимось момент створення (якщо контекст не готовий - дивимось батьківський контектс)

- якщо звичайна, дивимось момент виклику (якщо контекст не готовий)
*/

//- this у callback функціях
// function myFun(callback) {
//   const obj = {
//     testFun: callback,
//   };
//   obj.testFun();
// }

// function foo() {
//   console.log(this);
// }

// const foo1 = () => {
//   console.log(this);
// };

// myFun(foo);
// myFun(foo1);

// =======================
//- this у стрілочних функціях
// function myFun() {
//   console.log(this);
//   const arrow = () => {
//     console.log(this);
//   };
//   arrow();
// }
// const obj = {
//   testFun: myFun,
// };
// obj.testFun();

/* 
Методи функцій
    - Метод call()
    - Метод apply()
    - Метод bind()
*/

// const user = {
//   name: 'Vasya',
// };
// const user1 = {
//   name: 'Petya',
// };

// function foo(msg, msg1) {
//   console.log(this, msg, msg1);
// }

// foo.call(user, 'sefsef', 'sefsef');
// foo.apply(user, ['msg', 'msg1']);

// function foo(msg, msg1) {
//   console.log(this, msg, msg1);
// }

// const copyFoo = foo.bind(user, '123', '234');

// const copyFoo1 = copyFoo.bind(user1, '234', '345');

// copyFoo1();

// const foo = (msg, msg1) => {
//   console.log(this, msg, msg1);
// };

// const copyFoo = foo.bind(user, '123', 'awdawd');

// copyFoo();
