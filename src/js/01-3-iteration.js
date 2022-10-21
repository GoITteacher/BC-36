/*
 * Перебор через for...in и Object.keys|values|entries
 * метод hasOwnProperty
 */

let feed = {
  bad: 3,
  good: 5,
  neutral: 10,
};

let feedback = Object.create(feed);
feedback.test = 'myTest1';
feedback.test1 = 'myTest2';
feedback.test2 = 'myTest3';

// console.log(feedback);
// console.log(feedback.hasOwnProperty('test'));
// console.log(feedback);
// console.log(feedback.__proto__.__proto__);
// console.log(feed);

// for (let key in feedback) {
//   if (feedback.hasOwnProperty(key)) console.log(key, feedback[key]);
// }

// let totalFeedback = 0;

// =============================

// const keys = Object.keys(feedback);
// const values = Object.values(feedback);
// const entries = Object.entries(feedback);

for (const key of Object.keys(feedback)) {
  console.log(feedback[key]);
}

for (const value of Object.values(feedback)) {
  console.log(value);
}

console.log('-------------');
for (const arr of Object.entries(feedback)) {
  let x1 = arr[0];
  let y1 = arr[1];
  console.log(x1, y1);
}
