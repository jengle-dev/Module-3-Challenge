//--series of prompts for password criteria
  //-- a length of at least 8 characters and no more than 128 characters
  //-- I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  //-- my input should be validated and at least one character type should be selected

var availNumbers = "0123456789";
var availLowercase = "abcdefghijklmnopqrstuvwxyz";
var availUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var availSpecialChar = "~`!@#$%^&*()?<>/-_=+";
var passwordStringConcat = "";


var passwordLength = Number(window.prompt("How long do you want your password? Provide a whole number between 8 & 128."));
//need to make sure entry is entry>= 8 and entry <= 128 and an integer
if (passwordLength >= 8 && passwordLength <= 128) {
  var finalPasswordLength = passwordLength;
} else if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Please enter a whole number between 8 & 128.");
}
console.log(finalPasswordLength)

var upperCase = window.confirm("Does your password need uppercase letters? OK for yes. Cancel for no."); // if true, then add upperCase to string, else go to next prompt
var lowerCase = window.confirm("Does your password need lowercase letters? OK for yes. Cancel for no."); // if true, then add lowerCase to string, else go to next prompt
var pwNumber = window.confirm("Does your password need to include numbers? OK for yes. Cancel for no."); // if true, then add pwNumber to string, else go to next prompt
var specialChar = window.confirm("Does your password need to include special characters? OK for yes. Cancel for no."); // if true, then add specialChar to string, else stop loop

if (upperCase === true){ 
    var upperCaseYes = availUppercase;
} else {
  upperCaseYes = false;
}
  console.log(upperCaseYes);

if (lowerCase === true){
    var lowerCaseYes = availLowercase;
}else {
  lowerCaseYes = false;
}
  console.log(lowerCaseYes);

if (pwNumber === true) {
  var pwNumberYes = availNumbers;
} else {
  pwNumberYes = false;
}
console.log(pwNumberYes);

if (specialChar === true) {
  var specialCharYes = availSpecialChar;
} else {
  specialCharYes = false;
}
console.log(finalPasswordLength, upperCaseYes, lowerCaseYes, pwNumberYes, specialCharYes);



//attempt at condensing code
if (upperCaseYes != false) {
  passwordStringConcat += upperCaseYes;
}
console.log(passwordStringConcat);

if (lowerCaseYes != false) {
  passwordStringConcat += lowerCaseYes;
}
console.log(passwordStringConcat);

if (pwNumberYes != false) {
  passwordStringConcat += pwNumberYes;
}
console.log(passwordStringConcat);

if (specialCharYes != false) {
  passwordStringConcat += specialCharYes;
}
console.log(passwordStringConcat);

 
// Assignment Code
var generateBtn = document.querySelector("#generate");

// need to do something for click or blur for button to then call the function of concat and Math.random

// Write password to the #password input   
var pwConLength = passwordStringConcat.length;
console.log(pwConLength);

function pwConLength () {
  let length = passwordLength;
  let result = "";
  
  for (let i = 0; i < length; i++) {
      result += String.passwordStringConcat(82 + Math.floor(Math.random() * passwordLength)); 
  }
  document.getElementById("password").innerHTML = result;

  console.log(result);
}

// -- getElementById('generate')
function writePassword() {  
  var password = generatePassword(

  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

