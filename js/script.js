// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Characters for password
var lowercaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",];
var passwordCharacters = [];

// Prompt for password length
function askLength() {

  passwordLength = window.prompt("Password length (Must be between 8-128 characters):");

  if (passwordLength < 8) {
    window.alert("Password must be more than 7 characters.");
    askLength();

  } else if (passwordLength > 128) {
    window.alert("Password must be less than 129 characters.");
    askLength();

  } else if (isNaN(passwordLength)) {
    window.alert("Please insert a numeric value.");
    askLength();

  } else {
    return passwordLength;
  }

  console.log(passwordLength);

}

// Confirm lowercase letters
function askLowercase() {

  var lowercaseOption = window.confirm("Password with lowercase characters?");

  if (lowercaseOption === true) {
    passwordCharacters = passwordCharacters.concat(lowercaseCharacter);
  }
}


//Confirm uppercase letters
function askUppercase() {

  var uppercaseOption = window.confirm("Password with uppercase characters?");

  if (uppercaseOption === true) {
    passwordCharacters = passwordCharacters.concat(uppercaseCharacter);
  }
}

//Confirm password with numbers
function askNumber() {

  var numberOption = window.confirm("Password with numbers?");

  if (numberOption === true) {
    passwordCharacters = passwordCharacters.concat(numberCharacter);
  }
}

//Confirm special characters
function askSpecial() {

  var specialOption = window.confirm("Password with special characters?");

  if (specialOption === true) {
    passwordCharacters = passwordCharacters.concat(specialCharacter);
  }
}


//Generates criteria for the password

function generatePassword() {

  askLength();
  console.log(passwordLength);
  askLowercase();
  askUppercase();
  askNumber();
  askSpecial();

  //var passwordCharacters = [];
  var password = "";

  for (var i = 0; i < passwordLength; i++) {

    console.log(passwordCharacters);

    var passwordRandom = Math.floor(Math.random() * passwordCharacters.length);

    console.log(passwordRandom);

    password = password + passwordCharacters[passwordRandom];

  }

  console.log(password);

  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
