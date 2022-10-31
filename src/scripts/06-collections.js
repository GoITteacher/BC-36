let myBtn = document.querySelector('#testButton');
let list = document.querySelector('ul');
let count = 0;
myBtn.addEventListener('click', () => {});

/* 
Властивість innerHTML
 - Читання
 - Зміна
 - Додавання
 - insertAdjacentHTML
*/

let res = '';
for (let i = 0; i < 10; i++) {
  res += `<li>TestValue ${i}</li>`;
}

let where = 'afterbegin';

list.insertAdjacentHTML(where, res);
