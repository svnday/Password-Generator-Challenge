// Assignment Code
var generateBtn = document.querySelector("#generate");

const randomVariables = {
  lowercase: getRandomLowercase,
  uppercase: getRandomUppercase,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

const passwordOptions = {
  length: 0,
  uppercase: false,
  lowercase: false,
  symbols: false,
  numbers: false,
}

function getRandomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*<>/';
  return symbols[Math.floor(math.random() * symbols.length)];
}


passwordLength = function() {
  var optionLength = parseInt(window.prompt("How many characters would you like your password to be? Length can be between 8 and 128 characters long."));
    if (optionLength < 8) {
      window.alert("Your password must be at least 8 characters!");
      passwordLength();
    }
    if (optionLength > 128) {
      window.alert("Your password must be less than 128 characters!");
      passwordLength();
    }
    if (optionLength == NaN) {
      window.alert("You must enter a number between 8 and 128.");
      passwordLength();
    }
    passwordOptions.length = optionLength;
}

passwordUppercase = function() {
  var optionUppercase = window.confirm('Would you like uppercase letters in your password?');
    if (optionUppercase) {
      passwordOptions.uppercase = optionUppercase;
    }
}

passwordLowercase = function() {
  var optionLowercase = window.confirm('Would you like lowercase letters in your password?');
    if (optionLowercase) {
      passwordOptions.lowercase = optionLowercase;
    }
}

passwordSymbols = function() {
  var optionSymbols = window.confirm('Would you like symbols in your password?')
    if (optionSymbols) {
      passwordOptions.symbols = optionSymbols;
    }
}

passwordNumbers = function() {
  var optionNumbers = window.confirm('Would you like numbers in your password?')
    if (optionNumbers) {
      passwordOptions.numbers = optionNumbers;
    }
}

generatePassword = function(length, hasUppercase, hasLowercase, hasSymbols, hasNumbers) {
  if (!hasUppercase && !hasLowercase && !hasSymbols && !hasNumbers) return 'Invalid Paramers';
  var generatedPassword = '';
  const optionsCount = hasUppercase + hasLowercase + hasSymbols + hasNumbers;
  const optionsArray = [{length}, {hasUppercase}, {hasLowercase}, {hasSymbols}, {hasNumbers}].filter
  (
    item => Object.values(item)[0]
  )


  if (optionsCount === 0) {
    return '';
  }

  for(let i = 0; i < passwordOptions.length; i += optionsCount){
    optionsArray.forEach(option => {
      const optionsName = Object.keys(option) [0];

      console.log('optionsName', optionsName);
      generatedPassword += passwordOptions[optionsName]();
    });
  }
  
  const finalPassword = generatedPassword.slice(0, length);

}



// Write password to the #password input
function writePassword() {

  passwordLength();
  passwordUppercase();
  passwordLowercase();
  passwordSymbols();

  var password = generatePassword(passwordOptions.length, passwordOptions.uppercase, passwordOptions.lowercase, passwordOptions.symbols, passwordOptions.numbers);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
