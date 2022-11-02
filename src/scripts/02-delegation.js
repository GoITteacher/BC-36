let refs = {
  firstBoxElem: document.querySelector('.js-box'),
};

refs.firstBoxElem.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;

  const elem = e.target;
  const box = elem.closest('div');
  const buttonElem = elem.closest('button');

  if (buttonElem) {
    console.log(`${buttonElem.textContent.trim()} - ${box.dataset.group}`);
  }
});
