let list = [
  { label: 'Html' },
  { label: 'Css' },
  { label: 'JavaScript' },
  { label: 'Redux' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'C++' },
  { label: 'C#' },
  { label: 'NodeJs' },
  { label: 'Vanil' },
];

let filterElem = document.querySelector('.js-filter');
let listElem = document.querySelector('.js-list');
showArr(list);

function showArr(arr) {
  listElem.innerHTML = arr
    .map(item => {
      return `<li>${item.label}</li>`;
    })
    .join('');
}
