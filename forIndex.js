//Reverse a sentence or word

function reverseString() {
    var str = document.getElementById('userInput').value; // store user input value in variable
    document.getElementById('results').innerHTML = str.split('').reverse().join(''); //split string then reverse the array and join
}

// Factoralize a Number
function factoralizeNumber() {
   var num = document.getElementById('userInput2').value;
   var product; 
   for (var product = 1; num > 0; num--) {
       product *= num;
   }
    document.getElementById('results2').innerHTML = product;
   }


   
  
 



