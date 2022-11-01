/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

function onFormSubmit(e) {
  e.preventDefault();
  const { email, password, subscription } = e.target.elements;

  form.elements;
  const formData = new FormData(this);

  formData.delete('email');

  formData.forEach(elem => {
    console.log(elem);
  });
}
form.addEventListener('submit', onFormSubmit);
