const countMouseEventElement = document.querySelector('.js-count-mouse');
const countInputEventElement = document.querySelector('.js-count-input');
const inputElement = document.querySelector('.js-input');
const outputElem = document.querySelector('.js-output');

let countMouseEvent = 0;
let countInputEvent = 0;

// ===============================================

const onDocumentMouseMove = () => {
  countMouseEvent++;
  countMouseEventElement.textContent = countMouseEvent;
};

document.addEventListener(
  'mousemove',
  _.throttle(onDocumentMouseMove, 2000, {
    leading: true,
    trailing: false,
  }),
);

// ===============================================

const onInputChange = e => {
  countInputEventElement.textContent = ++countInputEvent;
  outputElem.textContent = e.target.value;
};

inputElement.addEventListener('input', _.debounce(onInputChange, 300));

// ===============================================

// ===============================================
