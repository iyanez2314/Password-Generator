// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "y",
  "z",
];
var passwordNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

function generatePassword() {
var passwordLength = window.prompt(
    "How many charatcters would you like in your password?"
  );

  parseInt(passwordLength);

  if (isNaN(passwordLength)) {
    window.alert("This is not a number");
  } else {
    if (passwordLength < 8) {
      window.alert(
        "Please makre sure the number is between 8 and 128 characters."
      );
      return generatePassword;
    }
    if (passwordLength > 128) {
      window.alert("Please put a number between 8 and 128");
    }

    var special = window.confirm("Would you like special characters in you passowrd?");
    var upper = window.confirm("Would you like Uppercase letters?");
    var lower = window.confirm("would you like lower case letters?");
    var number = window.confirm("Would you like numbers in your password?");
    var temp = [];
    
    // If the user Does use 1 of the criterias that i am asking for
    if (
      special === false &&
      upper === false &&
      lower === false &&
      number === false
    ) {
      alert("Must select at least one character type");
      return null;
    } else {
      if(special){
        // add special characters to temp array
         temp = temp.concat(specialChar);
         console.log(temp);
      }
      if(upper){
        temp = temp.concat(upperCase);
        console.log(temp);
      }
      if(lower){
        temp = temp.concat(lowerCase);
        console.log(temp);
      } 
      if(number){
        temp = temp.concat(passwordNumbers);
        console.log(temp);
      }

    }
    // create the out variable 
    var out = ""
    for (var i = 0; i < passwordLength; i++){
     var j = Math.floor(Math.random() * (temp.length - 0))
     out += temp[j]
     
    }
    return out;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);