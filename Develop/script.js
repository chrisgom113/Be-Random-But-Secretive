


var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", createPassword);


function createPassword() {

  // Prompt user to input character length
  var chooseLength = prompt("How many characters? (Enter value between 8-128)");

  if (chooseLength === null) {
    console.log(chooseLength);
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
    console.log(chooseLength);
    window.alert("Thank you. Your password will be a length of " + chooseLength + " characters.");

  }

  // Prompt user to select character type---------------------------------------------------------------


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
    confirm("Awesome! Your password will use " + characterType + " characters. Click 'OK' to see your password");

  }

  function generatePassword() {
    var setCharacters = {
      lowercase: "abcdefghijklmnopqrstuvwxy",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numeric: "0123456789",
      special: " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

    };
    var setCharacters = setCharacters[characterType.toLowerCase()] || setCharacters.lowercase;
    var newPassword = "";
    for (var i = 0; i < chooseLength; i++) {
      newPassword += setCharacters.charAt(Math.floor(Math.random() * setCharacters.length));
    }
    return newPassword;
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  











  