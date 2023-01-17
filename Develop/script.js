var setCharacters = {
  LOWERCASE: "abcdefghijklmnopqrstuvwxy",
  UPPERCASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  NUMERIC: "0123456789",
  SPECIAL: " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

};


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
  }

  characterType = characterType.toUpperCase();

  if (
    (characterType == "UPPERCASE") ||
    (characterType == "LOWERCASE") ||
    (characterType == "NUMERIC") ||
    (characterType == "SPECIAL")) {
    confirm("Awesome! Your password will use " + characterType + " characters. Click 'OK' to see your password");
  
    }

    function generatePassword(){
    var newPassword = "";
    for (var i = 0; i < chooseLength; i++) {
      newPassword += characterType.charAt(Math.floor(Math.random() * characterType.length));
    }
    return newPassword;
    }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }


  // if (characterType == "LOWERCASE") {
  //   setCharacters = "abcdefghijklmnopqrstuvwxy";

  // } else if (characterType == "UPPERCASE") {
  //   setCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // } else if (characterType = "NUMERIC") {
  //   setCharacters = "0123456789";

  // } else if (characterType = "SPECIAL") {
  //   " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  // }



  // var letterCasing = window.prompt("Do you want your password to have: uppercase, lowercase, or both? Enter 'U', 'L', or 'B'");

  // if (letterCasing === null) {

  //   window.alert("Darn! You'll have to start from the beginning again");
  //   return;
  // }

  // letterCasing = letterCasing.toUpperCase();

  // if (letterCasing === "") {
  //   window.alert("You must enter 'U', 'L', or 'B' to continue! Please try again");
  //   letterCasing = window.prompt("Do you want your password to have: uppercase, lowercase, or both? Enter 'U', 'L', or 'B'");

  // } else if (letterCasing == "U") {
  //   window.alert("Thank you. Your password will contain all UPPERCASE characters.");
  // } else if (letterCasing == "L") {
  //   window.alert("Thank you. Your password will contain all lowercase characters.");
  // } else if (letterCasing == "B") {
  //   window.alert("Thank you. Your password will contain both upper and lower case characters.");
  // }

  // Logical Conditions for Numeric Character Inputs

  // var numeric = window.prompt("Do you want numbers in your password? Enter 'Y' or 'N'")

  // if (numeric === null) {
  //   window.alert("Darn! You'll have to start from the beginning again");
  //   return;
  // }

  // numeric = numeric.toUpperCase();

  // if (numeric == "Y") {
  //   window.alert("Awesome! Your password will include numbers");

  // } else if (numeric == "N") {
  //   window.alert("No worries. Your password won't have any numbers");
  // }

  // Logical Conditions for Special Character Choices

  // var specialCharacters = window.prompt("Lastly, should your password include special characters, like: ()!@#$%^&' ? Enter 'Y' or 'N'");

  // if (specialCharacters === null) {
  //   window.alert("Darn! You'll have to start from the beginning again");
  //   return;
  // }

  // specialCharacters = specialCharacters.toUpperCase();

  // if (specialCharacters == "Y") {
  //   window.alert("Nice! With special characters, your password will be much more secure");

  // } else if (specialCharacters == "N") {
  //   window.alert("No worries. Your password won't have any special characters");
  // }


   

