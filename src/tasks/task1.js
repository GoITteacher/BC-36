function sortByValueAndIndex(array) {
  const res = array
    .map((value, index) => {
      const obj = {
        dob: value * (index + 1),
        value,
      };
      return obj;
    })
    .sort((a, b) => a.dob - b.dob)
    .map(value => {
      return value.value;
    });

  return res;
}

let array = [1, 2, 5, 1, 7, 9, 4, 1];

console.log(sortByValueAndIndex(array));

// https://www.codewars.com/kata/58e0cb3634a3027180000040
