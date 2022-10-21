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

// let friendName = 'Mango';

// function findFriend(friendName) {
//   for (let friend of friends) {
//     if (friend.name === friendName) {
//       console.log(`${friendName} is ${friend.online}!`);
//       return;
//     }
//   }
//   console.log('Error!');
// }

// findFriend(friendName);

/*
 * Получаем имена всех друзей
 */

// let friendsName = [];
// for (const friend of friends) {
//   friendsName.push(friend.name);
// }
// console.log(friendsName);

/*
 * Получаем имена только друзей которые онлайн
 */

let onlineFriendsName = [];
let offlineFriendsName = [];

for (const friend of friends) {
  if (friend.online) {
    onlineFriendsName.push(friend.name);
  } else {
    offlineFriendsName.push(this.name);
  }
}

console.log(onlineFriendsName);
console.log(offlineFriendsName);

// ================================

const msg = {
  update_id: 933223600,
  message: {
    message_id: 1179994,
    from: {
      id: 433982686,
      is_bot: false,
      first_name: 'Volodymyr',
      username: 'Pikimell',
      language_code: 'uk',
    },
    chat: {
      id: 433982686,
      first_name: 'Volodymyr',
      username: 'Pikimell',
      type: 'private',
    },
    date: 1662975833,
    text: 'sefsefsef',
    url: [''],
  },
};
