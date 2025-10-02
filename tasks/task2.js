function reverseWithoutNumbers(str) {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!numbers.includes(char)) {
      result += char;
    }
  }
  let reversed = "";
  for (let i = result.length - 1; i >= 0; i--) {
    reversed += result[i];
  }
  return reversed;
}
//sdvsdds
console.log(reverseWithoutNumbers("hello123world456"));
console.log(reverseWithoutNumbers("abc123xyz"));

module.exports = reverseWithoutNumbers;
