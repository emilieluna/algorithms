//Reverse a sentence or word

function reverseString() {
    var str = document.getElementById('userInput').value; // store user input value in variable
    document.getElementById('results').innerHTML = str.split('').reverse().join(''); //split string then reverse the array and join
}



