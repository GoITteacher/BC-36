/* 
Выполните рефакторинг методов объекта phonebook чтобы код заработал.
*/

const phonebook = {
  contacts: [],
  add(contact) {
    this.contacts.push(contact);
  },
  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

const phonebook2 = {
  contacts: [],
  add: phonebook.add,
};

phonebook2.add({
  name: 'Mango',
  email: 'mango@mail.com',
  list: 'friends',
});

phonebook2.add({
  name: 'Poly',
  email: 'poly@hotmail.com',
});

console.log(phonebook.contacts);
console.log(phonebook2.contacts);
