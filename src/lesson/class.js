/* //Класи
/* 
  -Оголошення класу
  -Конструктор класу
  -Об'єкт параметрів
  -Методи класу
  -Приватні властивості (Інкапсуляція)
  -Геттери і сеттери
  -Статичні властивості
  -Статичні методи
  -Наслідування класів
  -Конструктор дочірнього класу
  -Методи дочірнього класу

*/

// class Animal {
//   age = 1;

//   constructor({ name: newName = '___', age: newAge = 10 }) {
//     if (newAge > 0) this.age = newAge;
//     this.name = newName;
//   }
// }

// const obj = {
//   name: 'aawdserg',
//   age: 20,
// };

// const animal1 = new Animal(obj);
// const animal2 = new Animal('animal2 Name', 30);
// const animal3 = new Animal('animal3 Name', 40);

// console.log(animal1);
// console.log(animal2);
// console.log(animal3);

/* 
Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте, часто потрібно створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями і методами для взаємодії з ними. Все це потрібно робити динамічно, під час виконання програми. З цією метою використовують класи - спеціальний синтаксис оголошення функції для створення об'єктів.
*/

//Оголошення класу

//Результат виклику new User() - це об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом.

//Конструктор класу

/* 
Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта. Тобто this всередині конструктора буде посилатися на новостворений об'єкт. Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.
*/

//Об'єкт параметрів

// =======================================

// class User {
//   name;
//   phoneNumber;
//   age;
//   #rgb = [1, 2, 3];

//   constructor({ name = '', phone = '', age = 0 } = {}) {
//     this.name = name;
//     this.age = age;
//     this.phoneNumber = phone;
//   }

//   canIBuy(price, count) {
//     return this.#money > 0;
//   }

//   get rgb() {
//     return this.#rgb;
//   }

//   set rgb([r, g, b]) {
//     if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
//       this.#rgb[0] = r;
//       this.#rgb[1] = g;
//       this.#rgb[2] = b;
//     }
//   }
// }

// const user1 = new User({ name: 'Vasya', phone: '+2345612', age: 22 });

// user1.rgb = [0, 200, 200];
// user1.rgb = [-25, 255, 300];

// =========================================

// class User {
//   static #count = 0;
//   name = '';

//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     User.#count++;
//     return this.name;
//   }

//   static getCount() {
//     console.log(User.#count);
//   }
// }

// const user1 = new User('awd1');
// const user2 = new User('awd2');
// const user3 = new User('awd3');

// user1.getName();
// user1.getName();

// user2.getName();
// user2.getName();

// user3.getName();
// user3.getName();

// User.getCount();

// ======================

class Animal {
  name = '';
  color = 'Black';
  #age = 1;

  constructor(name = '', color = 'Black', age = 1) {
    this.#age = age;
    this.name = name;
    this.color = color;
  }

  get age1() {
    return this.#age;
  }

  set age1(x) {
    this.#age = x;
  }
}

class Dog extends Animal {
  legs = 4;
  #age = 123;

  constructor(name, color, age) {
    super(name, color, age);
  }

  gav() {
    console.log('Гав Гав!');
  }

  get age2() {
    return this.#age;
  }

  set age2(x) {
    this.#age = x;
  }
}

const dog1 = new Dog('NAME', 2, 3);

dog1.age1 = 112;
dog1.age2 = 'TEst';

console.log(dog1.age1);
console.log(dog1.age2);
