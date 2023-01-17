// Assignment Code


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Logical Conditions for Character Length Inputs

  var chooseLength = window.prompt("How many characters? (Enter value between 8-128)");

  if (chooseLength === null) {
    console.log(chooseLength);
    return;


  } else if (chooseLength === "") {
    window.alert("You must enter a value! Please try again");
    writePassword();

  } else if (
    (chooseLength < 8) ||
    (chooseLength > 128)) {
    window.alert("The value entered is either too small, too large, or not a number. Please enter a value within 8-128");
    writePassword();

  } else if (chooseLength >= 8 && chooseLength <= 128) {
    console.log(chooseLength);
    window.alert("Thank you. Your password will be a length of " + chooseLength + " characters.");

  }

  // Logical Conditions for Character Case Inputs

  var letterCasing = window.prompt("Do you want your password to have: uppercase, lowercase, or both? Enter 'U', 'L', or 'B'");

  if (letterCasing === null) {

    window.alert("Darn! You'll have to start from the beginning again");
    return;
  }
  
  letterCasing = letterCasing.toUpperCase();

  if (letterCasing === "") {
    window.alert("You must enter 'U', 'L', or 'B' to continue! Please try again");
    letterCasing = window.prompt("Do you want your password to have: uppercase, lowercase, or both? Enter 'U', 'L', or 'B'");

  } else if (letterCasing == "U") {
    window.alert("Thank you. Your password will contain all UPPERCASE characters.");
  } else if (letterCasing == "L") {
    window.alert("Thank you. Your password will contain all lowercase characters.");
  } else if (letterCasing == "B") {
    window.alert("Thank you. Your password will contain both upper and lower case characters.");
  }

  var numeric = window.prompt("Do you want numbers in your password? Enter 'Y' or 'N'")

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
