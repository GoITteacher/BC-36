/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

/*  
function changeCase(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    let newLetter = string[i].toUpperCase();
    if (string[i] === newLetter) {
      newString += string[i].toLowerCase();
    } else {
      newString += newLetter;
    }
  }
  return newString;
}
console.log(changeCase('jAVAs CrIPT ')); 
*/

function changeCase(string) {
  let newString = '';
  for (let letter of string) {
    let newLetter = letter.toUpperCase();
    if (letter === newLetter) {
      newString += letter.toLowerCase();
    } else {
      newString += newLetter;
    }
  }
  return newString;
}
console.log(changeCase('jAVAsCrIPT'));
