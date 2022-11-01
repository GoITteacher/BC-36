/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', () => {
  document.body.classList.add('show-modal');
  document.addEventListener('keydown', closeModal);
});

refs.backdrop.addEventListener('click', e => {
  console.log(e.target);
  if (e.target === e.currentTarget) {
    closeModal();
  }
});
refs.closeModalBtn.addEventListener('click', closeModal);

function onBodyKeyDown(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function closeModal() {
  document.body.classList.remove('show-modal');
  document.removeEventListener('keydown', onBodyKeyDown);
}
