/* 
Створення об'єкта
Вкладені властивості
Звернення до властивостей через крапку
Звернення до вкладених властивостей
Звернення до властивостей через квадратні дужки
Зміна значення властивості
Додавання властивостей
Короткі властивості
Обчислювальні властивості
Методи об'єкта
Доступ до властивостей об'єкта в методах
*/

const user = {
  phoneNumber: 'awdawd1',
  age: 23,
  name: 'Volodymyr',
  adress: {
    street: '',
    city: '',
    country: 'Ukraine',
  },

  sayHello() {
    this.phoneNumber = 'new Value';
    this.newKey = 'new Value';
    delete this.name;
  },
};

user.sayHello();
delete user.phoneNumber;
console.log(user);

/* 
user.name = 'new Name';

user['name2'] = 'test';

const name = 123;
const key = 'phone';

const arr = [];
for (let i = 0; i < 3; i++) {
  user[i] = 'new Value';
  arr[i];
} 
*/

/*
 * Ссылочный тип {} === {}
 */

/*
 * Массивы и функции это объекты
 */
