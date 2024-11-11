"use strict"
console.clear();

// Get Elements

let countDown = document.getElementById("countdown");
console.log(countDown);
const instructions = document.getElementById("instructions");
console.log(instructions);
let numbersList = document.getElementById("numbers-list");
console.log(numbersList);
const answersForm = document.getElementById("answers-form");
console.log(answersForm);
const message = document.getElementById("message");
console.log(message);

// Timer

let seconds = 5;

const timer = setInterval(function () {

    if (seconds >= 1) {

        countDown.innerHTML = seconds--;

    } else {

        clearInterval(countDown);
        countDown.classList.add("d-none");
        numbersList.classList.add("d-none");
        instructions.innerHTML = "Inserisci i numeri che hai memorizzato"
    }

},
    1000);

// Create list 

let i = 0;
const casualNumbersArray = [];

while (casualNumbersArray.length < 5 && i <= 100) {

    if (casualNumbersArray[i] != randomNumberGenerator(1, 100)) {
        casualNumbersArray.push(randomNumberGenerator(1, 100));

    }
}
for (let i = 0; i < casualNumbersArray.length; i++) {

    const number1 = document.createElement("li");
    number1.innerHTML = casualNumbersArray[i];
    numbersList.appendChild(number1);

}
console.log(casualNumbersArray);





















