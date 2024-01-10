// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {

  var passwordLength;

  var userChoice = parseFloat(window.prompt("Select length for you password"));

  console.log(typeof(userChoice))
  console.log(userChoice)

  if  (userChoice >=8 && userChoice <=128) {

        passwordLength = userChoice
        
    
      } else {
         
        alert ("Select numbers between 8-128")

      }


 var userSecurity = window.prompt("Select U for uppercase letter, L for lowercase letters, S for special characters,N for Numbers you must choose one only")
 let tempSecurity;

 userSecurity = userSecurity.toUpperCase()

 if (userSecurity == "U" || userSecurity == "L" || userSecurity == "S" || userSecurity == "N") {
      tempSecurity = userSecurity
 } else {
  
    alert ("Select either U, L, N or S")
 }
 console.log("Here")
 console.log(tempSecurity)
console.log("End")

//  var useralphabet = ["a","b", "c", "d", "e", "f"]
 if (tempSecurity == "U") {
  var finalpassword = ""
  console.log(tempSecurity)
  let tempname;

  alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "x", "q", "s"]
 
  for (let i=0; i<passwordLength; i++) {
    tempname = alphabet[randomNumber()]
    finalpassword = finalpassword + tempname;
    console.log(finalpassword)
  }

  console.log(finalpassword)
  
 return finalpassword.toUpperCase()

 } else if (tempSecurity == "L") {
  let upperpassword = ""
  let tempname1;
  alpha1 = ["w", "p", "e", "o", "m", "c", "z", "i", "a", "c", "d"]
  for (let i=0; i<passwordLength; i++) {
    tempname1=alpha1[randomNumber()]
    upperpassword = upperpassword + tempname1
  }

  return upperpassword.toLowerCase()

} else if (tempSecurity == "S") {
  console.log("triggered the special case")
  let tempname2;
  let fpassword = ""
alpha2 = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?"]

for (let i=0; i<passwordLength; i++) {
  tempname2 = alpha2[randomNumber()]
  fpassword = fpassword + tempname2
}

return fpassword

} else if (tempSecurity == "N") {
  let tempname3;
  let f4password = ""
  alpha4 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  for (let i=0;i<passwordLength; i++) {

    tempname3 = alpha4[randomNumber()]
    f4password = f4password + tempname3
  }

  return f4password
}



 return "Test Oassword"
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function randomNumber (){

  let ranNumber = Math.random() * 10

  ranNumber = Math.ceil(ranNumber)

  return ranNumber
}