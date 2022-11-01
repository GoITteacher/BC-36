/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');
//const divContainer = document.querySelector('.js-div-block');

//function handleTargetBtnClick
//function targetBtnClickHandler
function onTargetBtnClick1(e) {
  console.log(this.y);
}

const callback = () => {
  console.log(this);
};
// let temp = false;
// addListenerBtn.addEventListener('click', () => {
//   if (temp) {
//     console.log('remove listener');
//     targetBtn.removeEventListener('click', onTargetBtnClick1);
//   } else {
//     console.log('add listener');
//     targetBtn.addEventListener('click', onTargetBtnClick1);
//   }
//   temp = !temp;
// });

// removeListenerBtn.addEventListener('click', () => {
//   console.log('remove listener');
//   targetBtn.removeEventListener('click', onTargetBtnClick1);
// });

// targetBtn.addEventListener('click', () => {
//   console.log(this);
// });
