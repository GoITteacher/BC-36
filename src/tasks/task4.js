function smaller(nums) {
  return nums.map((value, index, array) => {
    const count = [...array].splice(index).filter(v => v < value).length;
    return count;
  });
}

let array = [5, 4, 3, 2, 1];

console.log(smaller(array));
