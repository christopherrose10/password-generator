// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Characters for password
var lowercaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",];
var passwordCharacters = [];

// Prompt for password length
function askLength() {

  passwordLength = window.prompt("Password length (Must be between 8-128 characters):");
  passwordLength = parseInt(passwordLength);

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

//askLength();


// Confirm lowercase letters
function askLowercase() {

  var lowercaseOption = window.confirm("Password with lowercase characters?");

  if (lowercaseOption) {
    passwordCharacters = passwordCharacters.concat(lowercaseCharacter);

    for (var i = 0; i < passwordLength + 1; i++) {

      var lowerChar = lowercaseCharacter[Math.floor((Math.random() * passwordLength) + 1)];
      console.log(lowerChar);

    }
  }
}


//Confirm uppercase letters
function askUppercase() {

  var uppercaseOption = window.confirm("Password with uppercase characters?");

  if (uppercaseOption) {
    passwordCharacters = passwordCharacters.concat(uppercaseCharacter);

    for (var i = 0; i < passwordLength + 1; i++) {
      var upperChar = uppercaseCharacter[Math.floor((Math.random() * passwordLength) + 1)];
      console.log(upperChar);
    }
  }
}

//Confirm password with numbers
function askNumber() {

  var numberOption = window.confirm("Password with numbers?");

  if (numberOption) {
    passwordCharacters = passwordCharacters.concat(numberCharacter);

    for (var i = 0; i < passwordLength + 1; i++) {
      var numberChar = numberCharacter[Math.floor((Math.random() * passwordLength) + 1)];
      console.log(numberChar);
    }
  }
}

//Confirm special characters
function askSpecial() {

  var specialOption = window.confirm("Password with special characters?");

  if (specialOption) {
    passwordCharacters = passwordCharacters.concat(specialCharacter);
    for (var i = 0; i < passwordLength + 1; i++){
      var specialChar = specialCharacter[Math.floor((Math.random() * passwordLength) + 1)];
      console.log(specialChar);
    }
  }
}


//Store inputs of criteria
function generatePassword() {
  askLength();
  askLowercase();
  console.log(passwordCharacters);
  askUppercase();
  console.log(passwordCharacters);
  askNumber();
  console.log(passwordCharacters);
  askSpecial();
  console.log(passwordCharacters);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
