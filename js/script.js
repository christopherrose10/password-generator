// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Characters for password
var lowercaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",];
var password = "";
var passwordCharacters = [];

// Write password to the #password input
function writePassword() {

  console.clear();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Generate password command
function generatePassword() {

  var password = "";
  var passwordCharacters = [];

  var passwordLength = window.prompt("Please choose a password length (Must be between 8-128 characters):"); 

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be at least 8 characters and  less than 128 characters.");
    return generatePassword();
  } 
  
  if (isNaN(passwordLength)) {
    window.alert("Please insert a numeric value.");
    return generatePassword();
  } 

  var lowercaseOption = window.confirm("Password with lowercase characters?");
  var uppercaseOption = window.confirm("Password with uppercase characters?");
  var numberOption = window.confirm("Password with numbers?");
  var specialOption = window.confirm("Password with special characters?");

  if (lowercaseOption) {
    passwordCharacters = passwordCharacters.concat(lowercaseCharacter);
  }

  if (uppercaseOption) {
    passwordCharacters = passwordCharacters.concat(uppercaseCharacter);
  }

  if (numberOption) {
    passwordCharacters = passwordCharacters.concat(numberCharacter);
  }

  if (specialOption) {
    passwordCharacters = passwordCharacters.concat(specialCharacter);
  }

  if (passwordCharacters.length === 0) {

    alert("Password must contain atleast one of the following: Lowercase, Uppercase, Number or Special Character.");

    return password = "Please click: Generate Password";
  }

  else {


    for (var i = 0; i < passwordLength; i++) {

      var passwordRandom = Math.floor(Math.random() * passwordCharacters.length);

      password = password + passwordCharacters[passwordRandom];

    }
  }

  console.log(password);

  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
