/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

// refs.input.addEventListener('focus', e => {
//   console.log('FOCUS', e);
// });

// refs.input.addEventListener('blur', e => {
//   console.log('BLUR', e);
// });

// refs.input.addEventListener('change', e => {
//   console.log('test');
//   console.log(e.target.value);
// });

refs.input.addEventListener('input', e => {
  const name = e.target.value.trim();
  if (name) {
    refs.nameLabel.textContent = name;
  } else {
    refs.nameLabel.textContent = 'Anonym';
  }
});

refs.licenseCheckbox.addEventListener('change', e => {
  console.dir(e.target.checked);
  refs.btn.disabled = !e.target.checked;
});
