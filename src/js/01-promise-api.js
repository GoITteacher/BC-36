/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

const promise = new Promise((resolve, reject) => {
  let rand = Math.random();
  setTimeout(() => {
    if (rand > 1) {
      resolve('OK');
    } else {
      reject('Hello Wolrd');
    }
  }, 1000);
});

function onFulfilled(result) {
  console.log('onFulfilled -> onFulfilled');
  console.log(`✅ ${result}`);
}

function onRejected(error) {
  console.log('onRejected -> onRejected');
  console.log(`❌ ${error}`);
}

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

const result = promise
  .catch(error => {
    console.log('ERROR');
    throw new Error('error');
  })
  .then(value => {
    console.log(value);
    return;
  })
  .then(value => {
    console.log(value);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {})
  .then();
console.log(result);
