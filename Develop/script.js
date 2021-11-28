// Assignment Code
var generateBtn = document.querySelector("#generate");

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


passwordLength = function() {
  var optionLength = parseInt(window.prompt("How many characters would you like your password to be? Length can be between 8 and 128 characters long."));
    if (optionLength < 8) {
      window.alert("Your password must be at least 8 characters!");
    }
    if (optionLength > 128) {
      window.alert("Your password must be less than 128 characters!");
    }
    if (optionLength = NaN){
      window.alert("You must enter a number between 8 and 128.");
    }
    console.log(passwordLength);
}

passwordUppercase = function() {
  var optionUppercase = window.confirm('Would you like uppercase letters in your password? Type "YES" or "NO"');
    if (optionUppercase) {
      console.log(optionUppercase);
    }
    else {
      passwordLowercase();
    }
}

passwordLowercase = function() {
  var optionLowercase = window.confirm('Would you like lowercase letters in your password? Type "YES" or "NO"');
    if (optionLowercase) {
      console.log(optionLowercase);
    }
    else {
      passwordSymbols();
    }
}

passwordSymbols = function() {
  var optionSymbols = window.confirm('Would you like symbols in your password? Type "YES" or "NO"')
    if (optionSymbols) {
      console.log(optionSymbols);
    }
    else {
      return true;
    }
}



// Write password to the #password input
function writePassword() {

  var password = generatePassword(passwordLength, passwordUppercase, passwordLowercase, passwordSymbols);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
