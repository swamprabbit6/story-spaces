// Assignment code here
//create 4 variables with an array for uppercase letters, lowercase letters, numbers and special characters
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialChar = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '_', '{', '|', '}', '~'];
//create gloabl array to hold all possible options
var possibleChar = [];

//final array for password string
var passwordString = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword()
{
  //prompt for password length
let pass = prompt("Please enter desired password length");
  //IF ELSE condition to check if password length is between 8 and 128
if (pass < 8) {
  alert("Please enter a new password length of 8 characters or more");
}
else if (pass > 128) {
  alert("Please enter a new password length of 128 characters or less");
}

  //within ELSE
  //4 confirms to confirm uppercase, lowercase, numbers and special characters options

else {
  var confirmUpper = confirm("confirm if you want uppercase characters in your password");
  var confirmLower = confirm("confirm if you want lower case characaters in your password");
  var confirmNumbers = confirm("confirm if you want numbers in your password");
  var confirmSpecial = confirm("confirm if you want special characters in your password");
}

  //4 IF conditions to check for user responses to confirms and push options array to global array
  
    if(confirmUpper)
    {
      possibleChar = possibleChar.concat(upperCase);
    }
  
    if(confirmLower)
    {
      possibleChar = possibleChar.concat(lowerCase);
    }

    if(confirmNumbers)
    {
      possibleChar = possibleChar.concat(numbers);
    }

    if(confirmSpecial)
    {
      possibleChar = possibleChar.concat(specialChar);
    }


    //FOR loop to loop over password length and generate ramdom number to pick random character from possibleChar array
    //push each character picked randomly into passwordString array

for (let i = 0; i < pass; i++) {
  let random = Math.floor(Math.random() * possibleChar.length);
  passwordString = passwordString.concat(possibleChar[random]);
}

// return passwordString
return passwordString.join("");
// return passwordString
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
