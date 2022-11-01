/*
 * События мыши
 * - mouseenter и mouseleave (это ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', () => {
//   console.log('mouseenter');
// });

// boxRef.addEventListener('mouseleave', () => {
//   console.log('mouseleave');
// });

// boxRef.addEventListener('mouseover', () => {
//   console.log('mouseover');
// });

// boxRef.addEventListener('mouseout', () => {
//   console.log('mouseout');
// });

let counter = 0;
boxRef.addEventListener('mousemove', e => {
  console.log(e);
});
