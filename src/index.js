import userList from './userList.hbs';
const container = document.querySelector('.js-container');

const users = [
  '234',
  '456',
  '234',
  '456',
  '234',
  '456',
  '234',
  '456',
  '234',
  '456',
  '234',
  '456',
];

const user = {
  name: 'awd',
  age: 23,
  phone: 'sefse',
};
const markup = userList(user);

container.innerHTML = markup;
