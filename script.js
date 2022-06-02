// Assignment code
// my variables
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var specialChString = "!@#$%^&*()";
var numberChString = "0123456789";
var upperCaseArray = upperCaseString.split("");
var lowerCaseArray = lowerCaseString.split("");
var specialArray = specialChString.split("");
var numberArray = numberChString.split("");
var generateBtn = document.querySelector("#generate");
var finalPass = [];

// Functions the button "generate button"
function randomNumberGen(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex]
  return randomElement
}

function generatePassword(length, includeUppercase, includeLowercase, includeSpecial, includeNumber) {
  var length = prompt(
    "Please enter a length for your password between 8 - 128  characters."
  );

  if (length === NaN || length === "") {
    console.log("undefined"); 
  // my variables = confirm windows
  var includeUppercase = confirm(
    "Do you want your password to contain upper case letters?"
  );

  var includeLowercase = confirm(
    "Do you want your password to contain lower case letters?"
  );

  var includeSpecial = confirm(
    "Do you want your password to contain special characters?"
  );

  var includeNumber = confirm("Do you want your password to contain numbers?");

  if (
    includeUppercase === false &&
    includeLowercase === false &&
    includeSpecial === false &&
    includeNumber === false
  ) {
  } 

  var chosenCharactersArray = [];
  //console.log(chosenCharactersArray);

  if (includeUppercase === true) {
    chosenCharactersArray = chosenCharactersArray.concat(upperCaseArray);
  }

  if (includeLowercase === true) {
    chosenCharactersArray = chosenCharactersArray.concat(lowerCaseArray);
  }

  if (includeSpecial === true) {
    chosenCharactersArray = chosenCharactersArray.concat(specialArray);
  }

  if (includeNumber === true) {
    chosenCharactersArray = chosenCharactersArray.concat(numberArray);
  }
  // array string
  console.log(chosenCharactersArray);

  for (var i = 0; i < length; i++) {
    finalPass.push(randomNumberGen(chosenCharactersArray))
  }

    return finalPass.join("")
}

console.log(generatePassword);

generateBtn.addEventListener("click", writePassword);
// write password function //
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");
  passwordText.value = password;

}
