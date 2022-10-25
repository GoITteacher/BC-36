const button = document.querySelector('.js-button');
const button1 = document.querySelector('.js-button1');

function foo(x) {
  return () => {
    console.log(x);
  };
}

const callback = foo(100);

console.log(callback);

button.addEventListener('click', callback);
button1.addEventListener('click', callback);
