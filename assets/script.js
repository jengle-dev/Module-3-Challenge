//--series of prompts for password criteria
  //-- a length of at least 8 characters and no more than 128 characters
  //-- I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  //-- my input should be validated and at least one character type should be selected

var availNumbers = "0123456789";
var availSpecialChar = "~`!@#$%^&*()?<>/-_=+";
var availLowercase = "abcdefghijklmnopqrstuvwxyz";
var availUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var passwordLength = Number(window.prompt("How long do you want your password? Provide a whole number between 8 & 128.")); // need to make sure entry is (entry>= 8 and entry <= 128)
var upperCase = window.prompt("Does your password need uppercase letters? Type y for yes & n for no."); // if y, then add upperCase to string, else go to next prompt
var lowerCase = window.prompt("Does your password need lowercase letters? Type y for yes & n for no."); // if y, then add lowerCase to string, else go to next prompt
var pwNumber = window.prompt("Does your password need to include numbers? Type y for yes & n for no."); // if y, then add pwNumber to string, else go to next prompt
var specialChar = window.prompt("Does your password need to include special characters? Type y for yes & n for no."); // if y, then add specialChar to string, else stop loop
//check string is != null

console.log(passwordLength, upperCase, lowerCase, pwNumber, specialChar);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input   
// decared the function
  // -- getElementById('generate')
function writePassword() {  
  var password = generatePassword(

  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



