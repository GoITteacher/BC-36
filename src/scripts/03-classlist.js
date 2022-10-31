let myBtn = document.querySelector('#testButton');
let listItem = document.querySelector('.js-list');

// myBtn.addEventListener('click', callback);

/* 
У властивості classList зберігається об'єкт з методами для роботи з класами елемента.

elem.classList.contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
elem.classList.add(cls) - додає клас cls до списку класів елемента.
elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.
elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
elem.classList.replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.
*/

// console.log(listItem);

// console.log(listItem.classList.contains('li-item'));

// listItem.classList.add('test1', 'test2', 'test3');

// listItem.classList.remove('test2', 'test3', 'test1');

// listItem.children[0].classList.toggle('blue');

// listItem.children[0].classList.replace('blue', 'tomato');

/* 
Властивість style
*/
listItem.style.width = '';
console.log();
