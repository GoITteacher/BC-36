const myBtn = document.querySelector('#testButton');
const imgElem = document.querySelectorAll('img');

myBtn.addEventListener('click', onBtnClick);

function onBtnClick() {
  imgElem[0].setAttribute(
    'src',
    'https://source.unsplash.com/100x100/?random=100&eat,bread,dish,meet,egg',
  );
}

/* 
elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
elem.getAttribute(name) - отримує значення атрибута і повертає його.
elem.setAttribute(name, value) - встановлює атрибут.
elem.removeAttribute(name) - видаляє атрибут.
elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.
*/

// console.log(imgElem[0]);
// console.dir(imgElem[0].hasAttribute('name'));
// console.log(imgElem[0].getAttribute('src'));

// imgElem[0].removeAttribute('disabled');
// console.dir(imgElem[0].attributes.id);

const img = imgElem[0];
console.log(img.dataset.src);
