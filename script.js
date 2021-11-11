// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

console.log('generate a password')
return password;
// for loop until password is desired length 


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

