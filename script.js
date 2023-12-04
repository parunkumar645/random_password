const passwordbox = document.getElementById("password");
const length = 12; // Fix: Correct variable name to "length"

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+{}|?><][';.,/~`";
const allChars = upperCase + lowerCase + number + symbol;

function createpassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordbox.value = password;
}
function copypassword() {
  passwordbox.select();
  document.execCommand("copy");
}
