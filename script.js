var specialChar=['!','#','$','%','&','(', ')','*','+','-','.','/',':',';','<','=','>',
'?','@','[',']','^','`','{','}','|','~'];  //Special Characters 
var lowerCase=['a', 'b', 'c','d','e','f','h','i','j','k','l','m','n','o','p',
'q','r','s', 't', 'u', 'v','w','x','y','z']; //lowercase letters 
var upperCase=['A','B','C','D','E','F','G','H','I', 'J','K','L','M'
,'N','O','P','Q','R','S','T','U','V','W', 'X','Y', 'Z'] // uppercase letters 
var integer=['1','2','3','4','5','6','7','8','9','0'];  //numbers


//Empty Arrays
var userPass=[]; 
var finalPass=[]; 
// Assignment Code

var generateBtn = document.querySelector("#generate");
function generatePassword(){

  var length = prompt('please choose a password length between 8 and 128 characters'); //alert asking for user input

  if(length <= 8 || length >= 128 || length === '' || length.match(/[a-z]/i) ||
  length.match(/[A-Z]/i))  
   //length.match(/[^0-9]/g));
  //parameters for password length, characters, ensuring the user enters in a number.
  {
    alert('Please try again')(location.reload(true)) //reload the page if entry does match. 
  };
 
  console.log('length',length) 
 
  var userSpecialChar=confirm("Clink OK to use special characters in your password?");
  if (userSpecialChar) {
    userPass.push(specialChar)
  };
  console.log('user pass array',userPass);
 
  var userLowCase=confirm("Clink OK to use lower case letters in your password?");
  if (userLowCase) {
    userPass.push(lowerCase)
  };
 
  console.log('user pass array',userPass);
 
  var userUpCase=confirm("Clink OK to use upper case letters in your password?");
  if (userUpCase) {
    userPass.push(upperCase)
  }
 console.log('user pass array',userPass);
 
  var userInt=confirm("Clink OK to use numbers in your password?");
  if (userInt) {
  userPass.push(integer)} 
  console.log('user pass array',userPass);
 
}

// concat() method used to merge two or more arrays. Does not change existing arrays. returns a new array. 
// if(userLowCase) {
  // userPass = userPass.concat(integer)
// }

//  return password;
//let indexPointer  = [Math.floor(Math.random() * userPass.length)]; var randomSelection = var[indexPointer]
//console.log(randomPass);
 

//for loop until password is desired length 
// let finalPass = '';  for (let i=0; i<length; i++)  {userPass.concat(passWord); * };  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);