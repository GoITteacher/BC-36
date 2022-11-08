import colorCardsTpl from '../templates/color-cards.hbs';
import colors from './colors.json';
import '../css/common.css';
import '../css/colorpicker.css';

const paletteContainer = document.querySelector('.js-palette');
paletteContainer.innerHTML = colorCardsTpl(colors);

function setBodyBackground(color) {
  document.body.style.backgroundColor = color;
}

paletteContainer.addEventListener('click', onColorClick);

function onColorClick(e) {
  if (!e.target.classList.contains('color-swatch')) return;
  const color = e.target.dataset.hex;
  setBodyBackground(color);
  disactivateCard();
  e.target.parentElement.classList.add('is-active');
}

function disactivateCard() {
  const activeCard = paletteContainer.querySelector('.is-active');
  if (activeCard) activeCard.classList.remove('is-active');
}
