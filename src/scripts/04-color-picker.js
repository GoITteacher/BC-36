let colorPalette = [];
const LENGTH = 100;

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < LENGTH; i++) {
    let hex = getRangomColor();
    let color = {
      hex,
      rgb: hexToRgb(hex),
    };

    items.push(color);
  }

  colorPalette = [...items];
}

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);
  return `${red}, ${green}, ${blue}`;
}

createPaletteItems();

////////////////////////////////////////////////////////////////////////////

const refs = {
  itemList: document.querySelector('.js-colors-box'),
  modalElement: document.querySelector('.modal'),
  btnReloadColor: document.querySelector('.js-reload-color'),
  backdropElem: document.querySelector('.js-backdrop'),
};

function init() {
  const markup = colorPalette
    .map(({ hex, rgb }) => {
      return `
<li class="color-item">
  <div class="color-footer">
      <div>HEX:${hex}</div>
      <div>RGB:${rgb}</div>
      <div>
      <button class="color-body" style="background-color:${hex};"></button> 
      </div>
  </div>
</li>
    `;
    })
    .join('');

  console.log(markup);

  refs.itemList.innerHTML = markup;
}
init();

refs.itemList.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;
  document.body.classList.add('show-modal');
  refs.modalElement.style.backgroundColor = e.target.style.backgroundColor;
});

refs.backdropElem.addEventListener('click', e => {
  if (e.target === e.currentTarget)
    document.body.classList.remove('show-modal');
});

refs.btnReloadColor.addEventListener('click', () => {
  createPaletteItems();
  init();
});

////////////////////////////////////////////////////////////////////////////

/* 
nodeName
<li class="color-item">
  <div class="color-footer">
      <div>HEX: </div>
      <div>RGB: </div>
      <div>
      <button class="color-body" style="background-color:;"></button> 
      </div>
  </div>
  <button class="color-body" style="background-color:;"></button>
</li>

*/
