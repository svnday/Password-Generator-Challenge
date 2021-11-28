// Assignment Code
var generateBtn = document.querySelector("#generate");

const passwordLength = document.getElementById('length');

const randomVariables = {
  lowercase: getRandomLowercase,
  uppercase: getRandomUppercase,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

function getRandomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) +48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*<>/';
  return symbols[Math.floor(math.random() * symbols.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
