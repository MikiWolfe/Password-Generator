var specialChar="!#$%&'()*+,-./:;<=>?@[]^`{}|~_";
var lowerCase="abcdefghijklmnopqrstuvwxyz";
var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var integer="1234567890";

var userPass=[];
var finalPass=[];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 let length = prompt('please choose a password length between 8 and 128 characters');

 if(length <= 8 || length >= 128 || length === '' || length.match(/[a-z]/i) ||
 length.match(/[A-Z]/i))
 {
   alert('Please try again')(location.reload(true))
 };

 console.log('length',length)

 var userSpecialChar=confirm("Whould you like special characters in your password?");
 if (userSpecialChar) {
   userPass.push(specialChar)
 };
 console.log('user pass array',userPass);

 var userLowCase=confirm("Would you like lower case letters in your password?");
 if (userLowCase) {
   userPass.push(lowerCase)
 }

 console.log('user pass array',userPass)

 var userUpCase=confirm("Would you like upper case letters in your password?");
 if (userUpCase) {
   userPass.push(upperCase)
 }
console.log('user pass array',userPass);

 var userInt=confirm("Would you like numbers in your password?");
 if (userInt) {
 userPass.push(integer)} 
 console.log('user pass array',userPass);

 }

/*let randomPass  = userPass[Math.floor(Math.random() * length)];
console.log(randomPass);
 } */

//for loop until password is desired length 
// let finalPass = '';  for (let i=0; i<length; i++)  {userPass.concat(passWord); * };  


// concat() method used to merge two or more arrays. Does not change existing arrays. returns a new array. 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);