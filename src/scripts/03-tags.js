let refs = {
  firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
  secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
};

refs.firstTagsList.addEventListener('click', e => {
  if (e.target.nodeName === 'DIV') return;

  const liElem = e.target.closest('li');
  if (liElem) {
    const prevActiveLi = refs.firstTagsList.querySelector('.active');

    if (prevActiveLi) {
      prevActiveLi.classList.toggle('active');
    }

    liElem.classList.add('active');
  }
});

const activeTags = [];
refs.secondTagsList.addEventListener('click', e => {
  if (e.target.nodeName === 'DIV') return;

  const liElem = e.target.closest('li');
  if (liElem) {
    liElem.classList.toggle('active');
    // const tag = liElem.firstElementChild.textContent;
    // if (liElem.classList.contains('active')) {
    //   activeTags.add(tag);
    // } else {
    //   activeTags.delete(tag);
    // }
  }
});

function sendData() {
  const activeLiElem = [
    ...refs.secondTagsList.querySelectorAll('li.active'),
  ].map(value => {
    return value.firstElementChild.dataset.value;
  });
  console.log(activeLiElem);
}
