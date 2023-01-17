
// Create HTML reference for 'Generate Button'
var generateBtn = document.querySelector("#generate");

// Add code to make clicking event run main function ----------------------------------------------------------------------------
generateBtn.addEventListener("click", createPassword);

// Instruct user in order to increase fluidity of navigating

window.alert("When the page loads, click the 'Generate Password' button to get started!");

// Main script function that includes criteria prompts and subsequent password generation ---------------------------------------

function createPassword() {

  // User prompt to input character length --------------------------------------------------------------

  var chooseLength = prompt("How many characters? (Enter value between 8-128)");

  if (chooseLength === null) {
        return;


  } else if (chooseLength === "") {
    window.alert("You must enter a value! Please try again");
    createPassword();

  } else if (
    (chooseLength < 8) ||
    (chooseLength > 128)) {
    window.alert("The value entered is either too small, too large, or not a number. Please enter a value within 8-128");
    createPassword();

  } else if (chooseLength >= 8 && chooseLength <= 128) {
    window.alert("Thank you. Your password will have " + chooseLength + " characters.");

  } 

  // Prompt user to select character type-------------------------------------------------------------------------------------------


  var characterType = prompt("Select a character type: (Please pick one) 'uppercase', 'lowercase', 'numeric', or 'special'.");


  if (characterType === null) {

    window.alert("Darn! You'll have to start from the beginning again");
    return;

  } else if (characterType === "") {
    window.alert("You must enter a value! Please try again");
    prompt("Select a character type: (Please pick one) 'uppercase', 'lowercase', 'numeric', or 'special'.");

  } else if (
    (characterType == "uppercase") ||
    (characterType == "lowercase") ||
    (characterType == "numeric") ||
    (characterType == "special")) {
    alert("Awesome! Your password will use " + characterType + " characters. Click 'OK' to generate your password");

  }

  // Declare the function provided in the starter code and setup the objects, for loop, and 'Math.random' operator -------------------

  function generatePassword() {
    var setCharacters = {
      lowercase: "abcdefghijklmnopqrstuvwxy",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numeric: "0123456789",
      special: " !$%&'()*+,-./:;<=>?@[\]^_`{|}~"

    };

    var setCharacters = setCharacters[characterType.toLowerCase()] || setCharacters.lowercase;
    var newPassword = "";
    for (var i = 0; i < chooseLength; i++) {
      newPassword += setCharacters.charAt(Math.floor(Math.random() * setCharacters.length));
    }
    return newPassword;
  }

  // Create variables that will call function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Operator will call function
  passwordText.value = password;

}












