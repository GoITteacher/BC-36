/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */

const array = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// joinV2([1, 2, 3, 4, 5], ',');
// joinV2(['клавиатура', 'наушники', 'часы'], ';');

const logItems = function (array) {
  for (const item of array) console.log(item);
};

function joinV2(array, delimiter) {
  let joinedArray = '';

  for (const item of array) {
    joinedArray += item + delimiter;
  }

  return joinedArray.slice(0, delimiter.length * -1);
}

console.log(joinV2(['Mango', 'Kiwi', 'Poly', 'Ajax'], '\n'));
