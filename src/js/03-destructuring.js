/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */
/* 
const playlist = {
  name1: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
  lastName: 'lastName',
  year: undefined,
};

console.log(playlist);

// const rating = playlist.rating;
// const trackCount = playlist.trackCount;
// const lastName = playlist.lastName;
const { year = 'test', trackCount, lastName: newLastName = 'Test' } = playlist;

console.log(year); */

// console.log(newLastName);

/*
 * Глубокая деструктуризация
 */

/* const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  stats: {
    views: 4827,
    likes: {
      myLikes: 1000,
      otherLikes: 2000,
    },
  },
}; */

// const followers = profile.stats.followers;
/* 
const {
  stats: { followers = 200 } = {},
} = profile; */

// const newStats = profile.stats
// const {followers} = newStats;
// const followers = newStats.followers;

/*
 * Деструктуризация массивов
 */

/* const rgb = [null, 100, 200];

const [myName = 'Test'] = rgb;

console.log(red);
 */
// -----

// let x = 1;
// let y = 2;
/* 
const array = [x,y];// [1,2] 
// [h1,h2] = array;
h1 = array[0];
h2 = array[1];
console.log(h1,h2); */

// [x, y] = [y, x];
// x = array[0] //2
// y = array[1] //1

// console.log(x, y);
// ============================

/* const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

const entries = Object.entries(authors);

for (const [name, rating] of entries) {
  console.log(name, rating);
}
 */

/* const users = [
  { name: 'Test1', age: 23 },
  { name: 'Test2', age: 23 },
  { name: 'Test3', age: 23 },
  { name: 'Test4', age: 23 },
  { name: 'Test5', age: 23 },
  { name: 'Test6', age: 23 },
];

for (let { name, age } of users) {
  console.log(name, age);
} */

/*
 * Операция rest (сбор)
 */

/* const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const { name, tag, location, ...restProps } = profile;

console.log(name, tag, location);
console.log(restProps);
console.log(profile); */

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */

/* function showProfileInfo(userProfile) {
  const { name, tag, location, ...restProps } = userProfile;

  console.log(name, tag, location);
  console.log(restProps);
}

const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

showProfileInfo(profile); */
/* 
function myFoo({ phonenumber, lastname='Test', firstName, age, patromymic }) {
  console.log(phonenumber, lastname, firstName, age, patromymic);
}

const phonenumber = 'test';
const firstName = 'test';
const lastname = 'test';
const patromymic = 'test';
const age = 'test';

myFoo({ phonenumber, lastname, firstName, patromymic, age });
myFoo({firstName, lastname, patromymic,age ,phonenumber}) */

/* const array = [
  { x: 11, y: 21, z: 31 },
  { x: 12, y: 22, z: 32 },
  { y: 23, z: 33 },
  { x: 14, y: 24, z: 34 },
  { y: 25, z: 35 },
  { x: 16, y: 26, z: 36 },
  { y: 27, z: 37 },
];

for (let { x, y, z } of array) {
  console.log(x, y, z);
} */

// function showDataMsg(msg) {}
