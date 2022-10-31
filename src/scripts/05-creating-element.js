let myBtn = document.querySelector('#testButton');
let list = document.querySelector('.usernames');

const onBtnClick = () => {};

myBtn.addEventListener('click', onBtnClick);

/* 
Створення
document.createElement(tagName);
*/

const arr = [];
for (let i = 0; i < 10; i++) {
  const elem = document.createElement('li');
  elem.textContent = i;
  arr.push(elem);
}

/* 
    Додавання
    - element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
    - element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
    - element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
    - element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.
*/

list.append(arr[0], arr[5], arr[1]);
// list.prepend(arr[0], arr[5], arr[6]);

// list.before(arr[0], arr[3]);

/* 
Видалення
elem.remove();
*/

arr[0].remove();
arr[5].remove();
arr[1].remove();
