// Assignment Code
var generateBtn = document.querySelector("#generate");

// using a cons variable as its value cannot change //

const capitalletters = ["a","b","c","d","e","f","g","h","i","j,","k","l","m","n", "o","p","q","r,","s","t","u,","v","w","x","y","z"]
const lowercaseletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","M","N","O,","P","Q","R","S","T","U","V","W","X","Y","Z"]
const numbers = ["0,1,2,3,4,5,6,7,8,9"]
const specialcharacters = ["!","@","£","$","%","%","_","-","<",">",]

console.log 





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
