import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

const refs = {
  form: document.querySelector('.js-feedback-form'),
};
const inputName = refs.form.elements.name;
const inputMessage = refs.form.elements.message;
