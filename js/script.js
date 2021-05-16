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
function askLength() {

  var passwordLength = window.prompt("Password length (Must be between 8-128 characters):");
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
}

askLength();


// Confirm lowercase letters
function askLowercase () {

  var lowercaseOption = window.confirm("Password with lowercase characters?");

  if (lowercaseOption) {
    lowercaseOption = true;
    return lowercaseOption;
  } else {
    lowercaseOption = false;
    return lowercaseOption;
  }
}

askLowercase ();

//Confirm uppercase letters
function askUppercase() {

  var uppercaseOption = window.confirm("Password with uppercase characters?");

  if (uppercaseOption) {
    uppercaseOption = true;
    return uppercaseOption;
  } else {
    uppercaseOption = false;
    return uppercaseOption;
  }
}

askUppercase();

//Confirm password with numbers
function askNumber() {

  var numberOption = window.confirm("Password with numbers?");

  if (numberOption) {
    numberOption = true;
    return numberOption;
  } else {
    numberOption = false;
    return numberOption;
  }
}

askNumber();

//Confirm special characters
function askSpecial() {

  var specialOption = window.confirm("Password with special characters?");

  if (specialOption) {
    specialOption = true;
    return specialOption;
  } else {
    specialOption = false;
    return specialOption;
  }
}

askSpecial();

if (lowercaseOption) {
  passwordCharacters += lowercaseCharacter;
}

if (uppercaseOption) {
  passwordCharacters += uppercaseCharacter;
}

if (numberOption) {
  passwordCharacters += numberCharacter;
}

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


