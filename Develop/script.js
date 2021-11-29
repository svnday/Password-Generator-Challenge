// Assignment Code
var generateBtn = document.querySelector("#generate");

const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];




function generatePassword () {

    var optionLength = parseInt(window.prompt("How many characters would you like your password to be? Length can be between 8 and 128 characters long."));
      if (!optionLength) {
      window.alert("You must enter a number between 8 and 128 characters.")
      }
      else if (optionLength < 8 || optionLength > 128) {
        window.alert("Your password must be between 8 and 128 characters.")
        return;
      }
  
      var optionUppercase = window.confirm('Press "OK" if you would like your password to have uppercase letters');
      var optionLowercase = window.confirm('Press "OK" if you would like your password to have lowercase letters.');
      var optionSymbols = window.confirm('Press "OK" if you would like your password to have symbols.')
      var optionNumbers = window.confirm('Press "OK" if you would like your password to have numbers.')

      if(optionLowercase === false && optionLowercase === false && optionSymbols === false && optionNumbers === false) {
        alert("You must choose at least one type of character for your password");
        return;
      }


  var result = [];
  var characters = [];
  var atLeastOne = [];

  if (optionUppercase) {
    characters = characters.concat(uppercase);
    atLeastOne.push(randomize(uppercase));
  };

  if (optionLowercase) {
    characters = characters.concat(lowercase);
    atLeastOne.push(randomize(lowercase));
  };

  if (optionSymbols) {
    characters = characters.concat(symbols);
    atLeastOne.push(randomize(symbols));
  }

  if (optionNumbers) {
    characters = characters.concat(numbers);
    atLeastOne.push(randomize(numbers));
  }


  for (var i = 0; i < optionLength; i++) {
    var character = randomize(characters);
    result.push(character);
  }

  for (var i = 0; i < atLeastOne.length; i++) {
    result[i] = atLeastOne[i]
  }

  return result.join('');
};

function randomize(array) {
  var index = Math.floor(Math.random() * array.length);
  var randomChoice = array[index];

  return randomChoice;
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
