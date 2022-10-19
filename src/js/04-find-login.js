/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const firstLoginToFind = 'm4ngoDoge';
const secondLoginToFind = 'k1widab3st';

let userIsFinded = false;
/* 
for (let i = 0; i < logins.length; i++) {
  if (logins[i] === firstLoginToFind || logins[i] === secondLoginToFind) {
    console.log(`Пользователь ${firstLoginToFind} найден.`);
    userIsFinded = true;
    break;
  }
}
if (!userIsFinded) {
  console.log(`Пользователь ${firstLoginToFind} не найден.`);
}
 */

/*
 for (let i = 0; i < logins.length; i += 1) {
  if (logins[i] === firstLoginToFind) {
    console.log(`Пользователь ${firstLoginToFind} найден.`);
    break;
  } else if (i === logins.length - 1) {
    console.log(`Пользователь ${firstLoginToFind} не найден.`);
  }
} 
*/

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// serfsef

/* for (const login of logins) {
  if (login === firstLoginToFind) {
    console.log(`Пользователь ${firstLoginToFind} найден.`);
    userIsFinded = true;
    break;
  }
}

if (!userIsFinded) {
  console.log(`Пользователь ${firstLoginToFind} не найден.`);
} */

/* const message = logins.includes(firstLoginToFind) ? `` : ` не`;
console.log(`Пользователь ${firstLoginToFind}${message} найден.`); */
