function concatRomans(letter, number) {
  var text= '';
  for(var i = 0; i < number; i++) {
    text += letter;
  }
  return text;
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("input#user-input").val();
    var digits = userInput.split('').length;

    if (userInput > 3999 || userInput <= 0) {
      alert("Please enter number between 1 to 3999!")
    }

    var thousandsRem, hundredsRem, tensRem;

    if (digits >= 4) {
      thousandsRem = userInput % 1000;
      var digitThousands = (userInput - thousandsRem) / 1000;
      var numbsM = concatRomans("M", digitThousands);
      console.log(numbsM);
    }
    if (digits >= 3) {
      var digitHundreds;
      //Define digitHundreds
      if (thousandsRem){
        hundredsRem = thousandsRem % 100;
        digitHundreds = (thousandsRem - hundredsRem) / 100;
      } else {
        hundredsRem = userInput % 100;
        digitHundreds = (userInput - hundredsRem) / 100;
      }

      if (digitHundreds  === 9){
        console.log("CM");

      } else if (digitHundreds >= 5) {
        var digitHundreds2= digitHundreds - 5
        var numbsC = concatRomans("C", digitHundreds2);
        console.log("D" + numbsC);

      } else if (digitHundreds === 4) {
        console.log("CD");

      } else {
        var numbsC = concatRomans("C", digitHundreds);
        console.log(numbsC);
      }
    }
    if (digits >= 2) {
      var digitTens;
      // Define digitTens
      if (hundredsRem){
      tensRem = hundredsRem % 10;
      digitTens = (hundredsRem - tensRem) / 10;
    } else {
      tensRem = userInput % 10;
      digitTens = (userInput - tensRem) / 10;
    }
      if (digitTens  === 9){
        console.log("XC");

      } else if (digitTens >= 5) {
        var digitTens2 = digitTens - 5
        var numbsX = concatRomans("X", digitTens2);
        console.log("L" + numbsX);

      } else if (digitTens === 4) {
        console.log("XL");

      } else {
        var numbsX = concatRomans("X", digitTens);
        console.log(numbsX);
      }
    }
    if (digits >= 1) {
      // DefinedigitOnes
      if(!tensRem) {
        tensRem === parseInt(userInput);
      }

      if (tensRem  === 9){
        console.log("IX");

      } else if (tensRem >= 5) {
        var numbsV = concatRomans("I", tensRem - 5);
        console.log("V" + numbsV);

      } else if (tensRem === 4) {
        console.log("IV");

      } else {
        var numbsI = concatRomans("I", tensRem);
        console.log(numbsI);
      }
    }
  //  $(".result").show();
  });
});
