// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Characters for password
var lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacter = "0123456789";
var specialCharacter = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ";
var passwordCharacters = "";

// Prompt for password length
var passwordLength = window.prompt("Password length (Must be between 8-128 characters):");
passwordLength = parseInt(passwordLength);

if (passwordLength < 8) {
  window.alert("Password must be more than 7 characters.");
  passwordLength();

} else if (passwordLength > 128) {
  window.alert("Password must be less than 129 characters.");
  passwordLength();

} else if (passwordLength > 128) {
  window.alert("Please insert a numeric value.");
  passwordLength();

} else {
  passwordLength();
}

// Confirm lowercase letters
var lowercaseOption = window.confirm("Password with lowercase characters?");

if (lowercaseOption) {
  passwordCharacters += lowercaseCharacter;
}
//Confirm uppercase letters
var uppercaseOption = window.confirm("Password with uppercase characters?");

if (uppercaseOption) {
  passwordCharacters += uppercaseCharacter;
}

//Confirm password with numbers
var numberOption = window.confirm("Password with numbers?")

if (numberOption) {
  passwordCharacters += numberCharacter;
}

//Confirm special characters
var specialOption = window.confirm("Password with special characters?");

if (specialOption) {
  passwordCharacters += specialCharacter;
}

for (var i = 0; i < passwordLength; i++) {
  password = passwordCharacters[Math.floor[Math.random() * passwordCharacters.length]];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
