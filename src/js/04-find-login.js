/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const logins1 = [];

const findLogin = function (allLogins, loginToFind) {
  for (const login of allLogins) {
    if (login === loginToFind) {
      console.log(` Пользователь ${loginToFind} найден.`);
      return;
    }
  }
  console.log(`Пользователь ${loginToFind} не найден.`);
};

findLogin(logins1, 'avocod3r');
findLogin(logins1, 'k1widab3st');
findLogin(logins1, 'jam4l');
findLogin(logins1, 'poly1scute');
