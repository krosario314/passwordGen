// Assignment Code
var generateBtn = document.querySelector("#generate");
var userResponse = "  ";
var amountCh = document.getElementById("amountCh")
var lowercase = arrayFromHighToLow(65, 90);
var upperCase = arrayFromHighToLow(97, 122);
var specialCh = arrayFromHighToLow(33, 47).concat(arrayFromHighToLow(58, 64)).concat(arrayFromHighToLow(91, 96)).concat(arrayFromHighToLow(123, 126));
var numberCh = arrayFromHighToLow(48, 57);


// Write password to the #password input
function writePassword() {
  
  var amountCh = window.prompt("How many characters should your password contain?");

  var upperCase = window.confirm("Would you like your password to contain uppercase letters?");

  var lowerCase = window.confirm("Would you like your password to contain lowercase letters?");
  
  var specialCh = window.confirm("Would you like your password to contain special characters?");

  var numberCh = window.confirm("Would you like your password to contain numbers?"); 
}

  var password = function generatePassword(amountCh, upperCase,lowerCase, specialCh, numberCh) {
    console.log(lowerCase)
  }
  
  function arrayFromHighToLow(low, high){
    var array = [ ]
    for (let i = low; i <= high; i++){
      array.push(i)
    }
    return array
  }

  document.write()

  var passwordText = document.querySelector("#password");


  passwordText.value = password;
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
