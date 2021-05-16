// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Characters for password
var lowercaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~",];
var passwordCharacters = [];
var passwordLength;

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
    console.log(passwordCharacters);
    console.log(passwordLength);
    
    for (var i = 0; i < passwordLength + 1; i++) {

      var lowerChar = lowercaseCharacter[Math.floor(Math.random() * passwordLength)];
      console.log(lowerChar);

    }
  }

  // else {
  //   lowercaseOption = false;
  //   return lowercaseOption;
  // }

}

//askLowercase();

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

//askUppercase();

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

//askNumber();

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

//askSpecial();

//Store inputs of criteria
function generatePassword() {
  askLength();
  askLowercase();
  console.log(passwordCharacters);
//   console.log(passwordLength);
//   var lowercaseOption1 = askLowercase();
//   console.log(passwordCharacters);
//   console.log(lowercaseOption1.lowercaseOption);
//   var uppercaseOption1 = askUppercase();
//   console.log(uppercaseOption1.uppercaseOption);
//   var numberOption1 = askNumber();
//   console.log(numberOption1.numberOption);
//   var specialOption1 = askSpecial();
//   console.log(specialOption1.specialOption);

//   var password = "";

//   if (lowercaseOption1.lowercaseOption && uppercaseOption1.uppercaseOption && numberOption1.numberOption && specialOption1.specialOption) {
//     passwordCharacters.push(lowercaseCharacter, uppercaseCharacter, numberCharacter, specialCharacter);
//   } else if (lowercaseOption1.lowercaseOption && uppercaseOption1.uppercaseOption && numberOption1.numberOption) {
//     passwordCharacters += lowercaseCharacter + uppercaseCharacter + numberCharacter;
//   } else if (lowercaseOption1.lowercaseOption && numberOption1.numberOption && specialOption) {
//     passwordCharacters += lowercaseCharacter + numberCharacter + specialCharacter;
//   } else if (lowercaseOption1.lowercaseOption && uppercaseOption1.uppercaseOption) {
//     passwordCharacters += lowercaseCharacter + uppercaseCharacter;
//   } else if (lowercaseOption1.lowercaseOption && numberOption1.numberOption) {
//     passwordCharacters += lowercaseCharacter + numberCharacter;
//   } else if (lowercaseOption1.lowercaseOption && specialOption) {
//     passwordCharacters += lowercaseCharacter + specialCharacter;
//   } else if (uppercaseOption1.uppercaseOption && numberOption1.numberOption && specialOption) {
//     passwordCharacters += uppercaseCharacter + numberCharacter + specialCharacter;
//   } else if (uppercaseOption1.uppercaseOption && numberOption1.numberOption) {
//     passwordCharacters += uppercaseCharacter + numberCharacter;
//   } else if (uppercaseOption1.uppercaseOption && specialOption) {
//     passwordCharacters += uppercaseCharacter + specialCharacter;
//   } else if (numberOption1.numberOption && specialOption) {
//     passwordCharacters += numberCharacter + specialCharacter;
//   } else {
//     window.prompt("Please select at least one of the criteria. (Password with AT LEAST ONE of lowercase character, uppercase character, number, or soecial character.)");
//     //askLowercase();
//   }
//   console.log(passwordCharacters);
//   for (var i = 0; i < passwordLength; i++) {
//     password = passwordCharacters[Math.floor[Math.random() * passwordLength]];
//   }
//   return password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


