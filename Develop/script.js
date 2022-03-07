// Assignment code here

function promptMe() {
  alert ("Follow the prompts to generate new password");
  var writePassword = prompt("Enter a number between 8 and 128 for your password length");
    if (writePassword >= 8 && writePassword <= 128) {
      characterType()
    } else {
      window.alert("invalid entry");
      invalidNumber();
    }
  
  /*if (writePassword > 128) {
      window.alert("Out of range, please try again");
      promptMe();
    }
    if (writePassword < 8){
      window.alert("Out of range, please try again");
      promptMe();
    }*/
}

function invalidNumber() {
  var writePassword = prompt("Enter a number between 8 and 128 for your password length");
    if (writePassword >= 8 && writePassword <= 128) {
      characterType()
    } else {
    window.alert("invalid entry");
    invalidNumber();
    
  }
  writePassword = parseInt(writePassword);
}

function characterType() {
  var character = prompt("Press 1 for lowercase or 2 for uppercase");
   /* switch (character) {
      case 1:
         
    }  */
  var numericSpecial = prompt("Press 1  for numeric values, press 2 for special characters, or 3 for both");
 
}



/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */


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

