function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const char = arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([3, 5, 7, 2, 8]));
console.log(findMax([10, 20, 5, 30]));

module.exports = findMax;
