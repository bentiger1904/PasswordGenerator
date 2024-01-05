// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var pwLength = 0;
var userChoices = [];
var result = "";
// Function to prompt user for password options
function getPasswordOptions() {
  pwLength = 0;
  while (pwLength < 8 || pwLength > 128 || isNaN(pwLength) || pwLength === "") {
    pwLength = prompt(
      "Please enter total number of characters required for password between 8 and 128"
    );
  }
  var confirmLower = confirm(
    "Would you like your password to contain lower case characters?"
  );
  if (confirmLower) {
    userChoices = userChoices.concat(lowerCasedCharacters);
  }
  var confirmUpper = confirm(
    "Would you like your password to contain upper case characters?"
  );
  if (confirmUpper) {
    userChoices = userChoices.concat(upperCasedCharacters);
  }
  var confirmNumber = confirm(
    "Would you like your password to contain numeric characters?"
  );
  if (confirmNumber) {
    userChoices = userChoices.concat(numericCharacters);
  }
  var confirmSpecial = confirm(
    "Would you like your password to contain special characters?"
  );
  if (confirmSpecial) {
    userChoices = userChoices.concat(specialCharacters);
  }
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    alert(
      "You need to choose at least one character type to generate your password"
    );
    window.location.reload();
  }
}

// Function to generate password with user input
function generatePassword() {
  //call the function getPasswordOptions
  getPasswordOptions();
  result = "";
  for (var i = 0; i < pwLength; i++) {
    result += userChoices[Math.floor(Math.random() * userChoices.length)];
  }
  return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
