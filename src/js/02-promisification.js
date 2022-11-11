/*
 * Промисификация:
 * - Функция которая возвращает промис
 */
function createPromise(delay, value) {
  let result = 50;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });

  promise.then(value => {
    result += value;
    console.log('Value', result);
  });

  return result;
}

console.log(createPromise(1000, 100));
/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

// ===========================
