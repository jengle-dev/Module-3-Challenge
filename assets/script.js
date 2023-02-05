//--series of prompts for password criteria
//-- a length of at least 8 characters and no more than 128 characters
//-- I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//-- my input should be validated and at least one character type should be selected


//upon click - generate start prompts *********************

var availNumbers = "0123456789";
var availLowercase = "abcdefghijklmnopqrstuvwxyz";
var availUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var availSpecialChar = "~`!@#$%^&*()?<>/-_=+";
var passwordStringConcat = "";
var fullPassword = '';


// document.addEventListener('click', trigger);

document.getElementById('generate').onclick = function trigger() {
  var passwordLength = Number(window.prompt("How long do you want your password? Provide a whole number between 8 & 128."));
  //need to make sure entry is entry>= 8 and entry <= 128 and an integer
  if (passwordLength >= 8 && passwordLength <= 128) {
    var finalPasswordLength = passwordLength;
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a whole number between 8 & 128."); //still loops through questions. not sure how to exit after this alert
    // alert("ok"); 
    // window. close(); this is closing the window at the wrong time
  }
  console.log(finalPasswordLength)

  var upperCase = window.confirm("Does your password need uppercase letters? OK for yes. Cancel for no."); // if true, then add upperCase to string, else go to next prompt
  var lowerCase = window.confirm("Does your password need lowercase letters? OK for yes. Cancel for no."); // if true, then add lowerCase to string, else go to next prompt
  var pwNumber = window.confirm("Does your password need to include numbers? OK for yes. Cancel for no."); // if true, then add pwNumber to string, else go to next prompt
  var specialChar = window.confirm("Does your password need to include special characters? OK for yes. Cancel for no."); // if true, then add specialChar to string, else stop loop

  if (upperCase === true) {
    var upperCaseYes = availUppercase;
  } else {
    upperCaseYes = false;
    upperCaseYes = '';
  }
  // console.log(upperCaseYes);

  if (lowerCase === true) {
    var lowerCaseYes = availLowercase;
  } else {
    lowerCaseYes = false;
    lowerCaseYes = '';
  }
  // console.log(lowerCaseYes);

  if (pwNumber === true) {
    var pwNumberYes = availNumbers;
  } else {
    pwNumberYes = false;
    pwNumberYes = '';
  }
  // console.log(pwNumberYes);

  if (specialChar === true) {
    var specialCharYes = availSpecialChar;
  } else {
    specialCharYes = false;
    specialCharYes = '';
  }
  // console.log(finalPasswordLength, upperCaseYes, lowerCaseYes, pwNumberYes, specialCharYes); //this is working

  var pwConcat = upperCaseYes + lowerCaseYes + pwNumberYes + specialCharYes;
  console.log(pwConcat); //this is working

  for (let i = 0; i < passwordLength; i++) {
    var randomString = [Math.floor(Math.random() * pwConcat.length)];
    // console.log(randomString);
    fullPassword += pwConcat[randomString];
    // console.log(fullPassword);
  } // this is working

  function writePassword() {
    var finalPassword = fullPassword;
    var passwordText = document.querySelector("#password");
    passwordText.textContent = finalPassword;
  }
  writePassword();

};




