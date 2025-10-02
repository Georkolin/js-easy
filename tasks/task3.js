function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([10, 20, 30]));

module.exports = sumArray;
