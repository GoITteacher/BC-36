function sortByBinaryOnes(list) {
  const res = list
    .map(value => value.toString(2))
    .sort((b, a) => {
      const lenA = a.split('').filter(v => v === '1').length;
      const lenB = b.split('').filter(v => v === '1').length;
      if (lenA !== lenB) {
        return lenA - lenB;
      } else {
        if (a.length !== b.length) {
          return b.length - a.length;
        } else {
          return parseInt(b, 2) - parseInt(a, 2);
        }
      }
    })
    .map(v => parseInt(v, 2));

  return res;
}

// let array = [195, 195, 7, 3, 5, 21, 25];
let array = [1, 2, 3, 4];
// console.log(sortByBinaryOnes(array));

console.log((21).toString(2), (25).toString(2));
