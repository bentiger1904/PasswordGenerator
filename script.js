// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var pwLength=0;
var userChoices=[];
var result="";
// Function to prompt user for password options
function getPasswordOptions() {
  //while loop that has the following conditions:
  //pwLength <8 || pwLength>128 || isNaN(pwLength) || pwLength===""
  //inside the while loop you create the promp that will be stored inside pwLength
  //pwLength=prompt("")
  while(pwLength <8 || pwLength >128 || isNaN(pwLength) || pwLength===""){
    pwLength = prompt("Please enter total number of charachters required for password between 8 and 128")
  }

  //confrims for the characters types
  //you create a variable to contain the confirm
  //var confirmLower= confirm("")
  //you have to make sure that if the user says yes you store theyir choice
  //if(confirmLower){
  //userchoices=userchoices.concat(lowerCasedCharacters)
  //}
  //you repeat the above sequence for all the character options. 

  //you need to make an if statement in case the user says no to all types of characters. 
  //to represent false in an if statement all you need to do is a ! before the variable i.e !confirmLower
  //inside the if statement you will put an alet telling the user they have to choose at least one type of character and then you do a window.location.reload()
  //to force the app to restart

}



// Function to generate password with user input
function generatePassword() {

  //call the function getPasswordOptions
getPasswordOptions()
  //then you create a for loop where i<pwLength 
  //inside the for loop you will create a Math.floor with a Math.randowm that you will store inside result. The Math.floor must take the userchoices lenght

  //result+= userChoices[Math.floor(Math.randon()*userChoices.length)]

  //after the loop you return result

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);