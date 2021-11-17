var specialChar='!#$%&()*+-./:;<=>?@[]^`{}|~';  //Special Characters 
var lowerCase= "abcdefhijklmnopqrstuvwxyz"; //lowercase letters 
var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // uppercase letters 
var integer="1234567890";  //numbers


//Empty Arrays
var userPass=[]; 
var finalPass=[]; 

// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){

  var passLength = prompt('please choose a password length between 8 and 128 characters'); //alert asking for user input

  if(passLength <= 7 || passLength >= 128 || passLength === '' || passLength.match(/[^0-9]/g))
  //passLength.match(/[a-z]/i) || passLength.match(/[A-Z]/i))  
  {
    
    alert('Please try again')(location.reload(true)) //reload the page if entry does match. 
  }
  
  //parameters for password length, characters, ensuring the user enters in a number.
   
  console.log('length',passLength) 
 
  var userSpecialChar=confirm("Click OK to use special characters in your password?"); 
  if (userSpecialChar) {
    userPass.push(...specialChar)
  };
  console.log('user pass array',userPass);
 
  var userLowCase=confirm("Click OK to use lower case letters in your password?");
  if (userLowCase) {
    userPass.push(...lowerCase)
  };
 
  console.log('user pass array',userPass);
 
  var userUpCase=confirm("Click OK to use upper case letters in your password?");
  if (userUpCase) {
    userPass.push(...upperCase)
  }
 console.log('user pass array',userPass);
 
  var userInt=confirm("Click OK to use numbers in your password?");
  if (userInt) {
  userPass.push(...integer)} 
  console.log('user pass array',userPass);


for (let i = 0; i < passLength; i++) {
  console.log('passLength[i]',passLength[i]);
  finalPass.push(userPass[Math.floor(Math.random() * userPass.length)])
  console.log('final pass .join()',finalPass.join('+'));
  
}
}

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password")

  passwordText.value = finalPass.join('');

};
//return password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)