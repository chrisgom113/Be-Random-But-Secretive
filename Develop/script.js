// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  var chooseLength = window.prompt("How long would you like your password to be? (Enter a number value: 8-128)");

  if (chooseLength === null) {
    console.log(chooseLength);
    return;
  
  
  } else if(chooseLength === "") {
    window.alert("You must enter a value! Please try again");
    writePassword();

  } else if (
    (chooseLength < 8) ||
    (chooseLength > 128)) {
    window.alert("The number value you've entered is either too small or too large. Please enter a value within 8-128");
    writePassword();

  }  



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
