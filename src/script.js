// function foo(date) {
//   function foo2(year) {
//     console.log(date + year);
//   }
//   return foo2;
// }

// const myFoo2001 = foo(2001);
// const myFoo3000 = foo(3000);
// const myFoo1900 = foo(1900);

// myFoo2001(20);

// ===========================

// const myObj = {
//   name: 'Test',
// };

// const obj = {
//   toString() {
//     console.log('toString()');
//     return 'newValue';
//   },
// };

// const key = 'test';
// myObj[obj] = 'NewValue';
// console.log(myObj);

// const obj = {
//   toString() {
//     console.log('test');
//     return '';
//   },
// };

// console.log(false == false);
// ====================================

const array = [
  5, 3, 3, 12, 12, 12, 6, 5, 7, 5, 5, 6, 5, 1, 3, 8, 5, 3, 1, 5, 7, 98, 9, 5, 4,
  23, 2, 5, 7, 6, 3, 2, 5, 2, 34, 1, 3, 5, 7, 4, 4, 3, 6, 8, 9, 4, 2, 21, 5, 45,
  43, 5, 5, 6, 5, 4,
];

let peak = 0;
let quanBetween = 0;
let sumBetween = 0;
let res = 0;
const maxValue = Math.max(...array);
const firstMaxIndex = array.indexOf(maxValue);
const lastMaxIndex = array.lastIndexOf(maxValue);
if (firstMaxIndex !== lastMaxIndex) {
  for (let i = firstMaxIndex + 1; i < lastMaxIndex; i++) {
    quanBetween++;
    sumBetween += array[i];
  }
  res += array[firstMaxIndex] * quanBetween - sumBetween;
  quanBetween = 0;
  sumBetween = 0;
}
for (let i = 0; i <= firstMaxIndex; i++) {
  if (array[i] >= peak) {
    res += peak * quanBetween - sumBetween;
    peak = array[i];
    quanBetween = 0;
    sumBetween = 0;
  } else {
    quanBetween++;
    sumBetween += array[i];
  }
}
peak = 0;
quanBetween = 0;
sumBetween = 0;
for (let i = array.length - 1; i >= lastMaxIndex; i--) {
  if (array[i] >= peak) {
    res += peak * quanBetween - sumBetween;
    peak = array[i];
    quanBetween = 0;
    sumBetween = 0;
  } else {
    quanBetween++;
    sumBetween += array[i];
  }
}
console.log(res);

function foo(arr) {
  let totalBlock = 0;
  while (isTrueArr(arr)) {
    const max = Math.max(...arr);

    const firstIndex = arr.indexOf(max);
    const lastIndex = arr.lastIndexOf(max);

    if (firstIndex === lastIndex) {
      arr[firstIndex]--;
      continue;
    }

    for (let i = firstIndex; i <= lastIndex; i++) {
      if (arr[i] === max) {
        arr[i]--;
      } else {
        totalBlock++;
      }
    }
  }
  console.log(totalBlock);
}

function isTrueArr(arr) {
  return arr.filter(x => x > 0).length > 0;
}

foo(array);

// ================================================

// function oddOne(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       console.log(i);
//       break;
//     }
//   }
// }

// oddOne([[1,2],[3,4],[5,6],[7,8]]);

/* 
var arrayToSearch = [[1,2],[3,4],[5,6],[7,3]]; // => throw Error
arrayToSearch = [1,2,3,4,5,6]; // => throw Error
arrayToSearch = [[1,2],[3,4],[5,6]]; // => valid input
var query = [1,2]; // => valid input
query = 5; // => throw Error
query = [9,2,1]; // => throw Error 
*/

/* function searchArray(arr, query) {
  if (arr.findIndex(el => el.length !== 2) !== -1 || query.length !== 2) {
    throw new Error();
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === query[0] && arr[i][1] === query[1]) {
      return i;
    }
  }
  return -1;
}

const res = searchArray(
  [
    [2, 3],
    [7, 2],
    [9, 20],
    [1, 2],
    [7, 2],
    [45, 4],
    [7, 87],
    [4, 5],
    [2, 7],
    [6, 32],
  ],
  [9, 20],
);

console.log(res); */

// =======================================

/* 
S = [1,2,3,4,5,6]
T = [1,6]

S = [2,3,4,5] => [5,4,3,2]
T = [1,6]

S = [4,3] => [3,4]
T = [1,6,5,2]

S = []
T = [1,6,5,2,3,4]
return T */

// function arrange(s) {
//   const t = [];
//   const n = s.length - 1;

//   for (let i = 0; i < s.length / 2; i++) {
//     if (i % 2 === 0) t.push(s[i], s[n - i]);
//     else t.push(s[n - i], s[i]);
//   }

//   if (s.length % 2 !== 0) t.pop();

//   return t;
// }

// ========================

//hello world => "104olle 119drlo"

// function encryptThis(s) {
//   const arrS = s.split(' ');
//   return arrS.map(encryptWord).join(' ');
// }

// function encryptWord(word) {
//   const arrWord = word.split('');
//   if (arrWord.length > 2) {
//     const last = arrWord[arrWord.length - 1];
//     arrWord[arrWord.length - 1] = arrWord[1];
//     arrWord[1] = last;
//   }
//   arrWord[0] = arrWord[0].charCodeAt(0);
//   return arrWord.join('');
// }

// console.log(encryptWord('Hello'));
