import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

const refs = {
  form: document.querySelector('.js-feedback-form'),
};
const inputName = refs.form.elements.name;
const inputMessage = refs.form.elements.message;

refs.form.addEventListener('input', e => {
  saveToLS(e.target.name, e.target.value);
});

function loadData() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = loadFromLS(key);
    refs.form.elements[key].value = value;
  }
}
loadData();

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const result = {};
  const elems = refs.form.elements;
  for (let i = 0; i < elems.length; i++) {
    if (elems[i].name) {
      localStorage.removeItem(elems[i].name);
      result[elems[i].name] = elems[i].value;
    }
  }

  console.log(result);
  refs.form.reset();
});

// =================================================
// inputName.addEventListener('input', throttle(onNameElemInput, 500));
// function onNameElemInput(e) {
//   const name = e.target.value;
//   saveToLS('name', name);
// }

// inputMessage.addEventListener('input', throttle(onMsgElemInput, 500));
// function onMsgElemInput(e) {
//   const name = e.target.value;
//   saveToLS('message', name);
// }

// function loadData() {
//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = loadFromLS(key);
//     refs.form.elements[key].value = value;
//   }
// }
// loadData();

// refs.form.addEventListener('submit', e => {
//   e.preventDefault();
//   const result = {};
//   const elems = refs.form.elements;
//   for (let i = 0; i < elems.length; i++) {
//     if (elems[i].name) {
//       localStorage.removeItem(elems[i].name);
//       result[elems[i].name] = elems[i].value;
//     }
//   }

//   console.log(result);
//   refs.form.reset();
// });

// =======================================
function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
}
