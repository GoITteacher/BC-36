// const obj = {
//   name: '123',
//   age: 123,
//   foo: true,
//   isNull: null,
//   arr: [1, 2, 3, 44],
// };

// function myParse(jsonString) {
//   debugger;
//   try {
//     return JSON.parse(jsonString);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// ========================
const obj = {
  name: '123',
  age: 123,
  foo: true,
  isNull: null,
  arr: [1, 2, 3, 44],
};

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
}

saveToLS('userData1', obj);
saveToLS('userData2', obj);
saveToLS('userData3', obj);
saveToLS('userData4', obj);
const newObj = loadFromLS('userData1');
