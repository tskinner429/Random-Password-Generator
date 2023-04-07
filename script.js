var choiceArray = [];
var characterLength = 8;
var specialCharArr = ['!', '@', '#', '$', '%', '^', '~', '^', '&', '*', '(', ')', '-',];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPromts = getPrompts(); //returns true or false
  var passwordText = document.querySelector("#password");

  if (correctPromts) {
  var passcode = generatePassword();
  passwordText.value = passcode;
 

} else {
  passwordText.value = "";

}

  
}
function generatePassword () {
  //I would generatePassword based on the prompts
  var password = [];
  for (var i = 0; i < characterLength; i++) {
    var randomCharacter = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomCharacter]
  }
  return password;
}
 

function getPrompts () {
  choiceArray = [];
  characterLength = parseInt(prompt("How many characters would you like your password to be? (8 - 128 Charachters")); //NaN

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8 - 128 digits. Please try again."); //I hope it will be false
    return false;
    }
    if (confirm("Would you like lowercse letters in your password?")) {
      choiceArray = choiceArray.concat(lowerCaseArr);
    }
    if (confirm("Would you like uppercase letters in your password?")) {
      choiceArray = choiceArray.concat(upperCaseArr);
    }
    if (confirm("Would you like special characters in your password?")) {
      choiceArray = choiceArray.concat(specialCharArr);
    }
    if (confirm("Would you like numbers in your password?")) {
      choiceArray = choiceArray.concat(numberArr);
    }
   return true;

}


