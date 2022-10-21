/*
 * Работа с коллекцией (массивом объектов)
 */

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

console.table(friends);

/*
 * Ищем друга по имени
 */

let friendName = 'Mango';

/*
 * Получаем имена всех друзей
 */

let friendsName = [];

/*
 * Получаем имена только друзей которые онлайн
 */

let onlineFriendsName = [];
let offlineFriendsName = [];

console.log(onlineFriendsName);
console.log(offlineFriendsName);
