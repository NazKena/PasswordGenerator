// Assignment Code
var generateBtn = document.querySelector("#generate");

// using a cons variable as its value cannot change //



const charachterAmountCL = document.getElementById("password");
const charachterAmountLC = document.getElementById ("length");
const charachterAmountNumbers = document.getElementById ("numbers");
const characterAmountSymbols= document.getElementById ("special charachters");

charachterAmountCL.addEventListener('input', syncCharachterAmount)
charachterAmountLC.addEventListener('input', syncCharachterAmount)
charachterAmountNumbers.addEventListener('input', syncCharachterAmount)
characterAmountSymbols.addEventListener('input', syncCharachterAmount)

function syncCharachterAmount(e) {
  const value = e.target
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
