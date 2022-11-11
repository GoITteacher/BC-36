/*
 * Промисификация:
 * - Функция которая возвращает промис
 */
// function createPromise(delay, value) {
//   let result = 50;

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value);
//     }, delay);
//   });

//   promise.then(value => {
//     result += value;
//     console.log('Value', result);
//   });

//   return result;
// }

// console.log(createPromise(1000, 100));
/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

// ===========================

// function createPromise(delay, temp) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (temp) resolve(delay);
//       reject(`Error: ${delay}`);
//     }, delay);
//   });
// }

// const promise1 = createPromise(1000, true);
// const promise2 = createPromise(1000, true);
// const promise3 = createPromise(3000, false);
// const promise4 = createPromise(1000, true);

// const promises = [promise1, promise2, promise3, promise4];

// Promise.any(promises)
//   .then(value => {
//     console.log(value);
//   })
//   .catch(err => {
//     console.log(err);
//   });
