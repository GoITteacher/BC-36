/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

// document.addEventListener('keypress', e => {
//   console.log(e);
// });

document.addEventListener('keypress', e => {
  console.log(e);
  if (e.code === 'KeyQ' && e.ctrlKey) {
    console.log('Save');
  }
});
