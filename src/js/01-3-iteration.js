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
feedback.test = 'myTest';

let totalFeedback = 0;
