let myBtn = document.querySelector('#testButton');
let list = document.querySelector('ul');

const callback = () => {};

myBtn.addEventListener('click', callback);

/* 
elem.parentNode - вибере батьківський elem.
elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).
*/

// console.log(list.parentNode);
// console.log(list.childNodes);
// console.log(list.children);

// console.log(list.firstChild);
// console.log(list.firstElementChild);

// console.log(list.lastChild);
// console.log(list.lastElementChild);

// console.log(list.firstElementChild.nextElementSibling);

// console.log(list.lastElementChild.nextElementSibling);
