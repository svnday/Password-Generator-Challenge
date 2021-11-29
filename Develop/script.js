// Assignment Code
var generateBtn = document.querySelector("#generate");

/* const passwordVariables = {
  length: optionLength,
  uppercase: optionUppercase,
  lowercase: optionLowercase,
  symbol: optionSymbols,
  number: optionNumbers,
};

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
*/



function generatePassword () {

  // function passwordLength() {
    optionLength = parseInt(window.prompt("How many characters would you like your password to be? Length can be between 8 and 128 characters long."));
      if (!optionLength) {
      window.alert("You must enter a number between 8 and 128 characters.")
      }
      else if (optionLength < 8 || optionLength > 128) {
        window.alert("Your password must be between 8 and 128 characters.")
      } else {
        optionUppercase = window.confirm('Press "OK" if you would like your password to have uppercase letters');
        optionLowercase = window.confirm('Press "OK" if you would like your password to have lowercase letters.');
        optionSymbols = window.confirm('Press "OK" if you would like your password to have symbols.')
        optionNumbers = window.confirm('Press "OK" if you would like your password to have numbers.')
      }
  
  // if (!optionUppercase && !optionLowercase && !optionSymbols && !optionNumbers) return '';

  var result = [];
  var characters = [];
  var charactersLength = characters.length;

  if (optionUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (optionLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
  if (optionSymbols) characters += '!@#$%^&*()';
  if (optionNumbers) characters += '1234567890';
  
  for (var i = 0; i < optionLength; i++) {
    var arrayMath = (Math.floor(Math.random() * charactersLength));
    var result = charAt[arrayMath];
    console.log(result);
  }
  return result;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
