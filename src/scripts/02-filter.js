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

function onInputChange(e) {
  const filterValue = e.target.value.toLowerCase();

  const filteredList = list.filter(value => {
    return value.label.toLowerCase().indexOf(filterValue) === 0;
  });

  showArr(filteredList);
}

filterElem.addEventListener('input', _.debounce(onInputChange, 300));
