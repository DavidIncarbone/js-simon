"use strict"
console.clear();

// Get Elements

let countDown = document.getElementById("countdown");
console.log(countDown);
const instructions = document.getElementById("instructions");
console.log(instructions);
const numberList = document.getElementById("numbers-list");
console.log(numberList);
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
        instructions.innerHTML = "Inserisci i numeri che hai memorizzato"
    }

},
    1000);






