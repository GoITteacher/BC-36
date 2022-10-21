/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */

function slugify(string) {
  let result = '';
  string = string.replaceAll(' ', '-');
  for (let letter of string) {
    if (isNaN(+letter)) {
      result += letter;
    }
  }

  while (result.includes('--')) {
    result = result.replaceAll('--', '-');
  }

  return result;
}

console.log(slugify('Top 1 1 1 1 benefits 1 1 1 1 1 of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));

console.log(+' ');
