// Sets the array of choices of characters to none as baseline.
var choiceArr = [];
var characterLength = 8;


var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
// Forms an array of the character codes for each respective letter of the alphabet.
var characterCodes = Array.from(Array(26)).map( (_, i) => i + 97);
// Translates character codes into the respective letters for array.
var lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
var uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());

// Pulls from HTML id "generate."
var generateBtn = document.querySelector("#generate");

// Assigns a function upon clicking the "generate" button.
generateBtn.addEventListener("click", writePassword);

// Parent function that manages the overarching process between "clicking" and the resulting password that is generated and put to page.
function writePassword() {
  var correctPrompt = getPrompts(); //true or false - This refers to the child function below (l.51) that manages the prompts and user input.
  var passwordText = document.querySelector("#password");

  if(correctPrompt) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
  } else {
      passwordText.value = "";
  }
}


// This function uses a for loop to randomly select characters from the assembled array of choices to construct a password of the given length.
function generatePassword () {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomIndex];
    }
    return password;
  
}


function getPrompts(){
  choiceArr = [];
  characterLength = parseInt(prompt("How many characters would you like in your password? (8 - 128 characters)"))

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be a number from 8 to 128. Please try again.");
    return false;
  }

  if(confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowercaseLetters);
  }
  if(confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(uppercaseLetters);
  }
  if(confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(symbols);
  }
  if(confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numbers);
  }
  return true;
  
}