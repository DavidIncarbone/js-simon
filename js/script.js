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
const container = document.querySelector("body>div");
console.log(container);




// Timer

let seconds = 5;

const timer = setInterval(function () {

    if (seconds >= 1) {

        countDown.innerHTML = seconds--;

    } else {


        countDown.classList.add("d-none");
        numbersList.classList.add("d-none");
        instructions.innerHTML = "Inserisci i numeri che hai memorizzato"
        answersForm.classList.remove("d-none");
        clearInterval(timer);
    }

},
    1000);

// Create list 

let i = 0;
const casualNumbersArray = [];

while (casualNumbersArray.length < 5 && i <= 100) {

    if (casualNumbersArray[i] != randomNumberGenerator(1, 50)) {
        casualNumbersArray.push(randomNumberGenerator(1, 50));

    }
}
for (let i = 0; i < casualNumbersArray.length; i++) {

    const numbers = document.createElement("li");
    numbers.innerHTML = casualNumbersArray[i];
    numbersList.appendChild(numbers);

}
console.log(casualNumbersArray);

// Submit event

const inputs = document.querySelectorAll("input");
console.log(inputs);

const replayBtn = document.createElement("button");
console.log(replayBtn);

answersForm.addEventListener("submit", function (event) {
    event.preventDefault();
    answersForm.classList.add("d-none")
    const userNumbers = [];
    for (let i = 0; i < inputs.length; i++) {
        userNumbers.push(inputs[i].value);
    }
    console.log(userNumbers);

    const guessedNumbers = [];

    if (casualNumbersArray.includes(parseInt(inputs[i].value))) {
        guessedNumbers.push(inputs[i].value);
        console.log(guessedNumbers);
        instructions.innerHTML = `Hai indovinato ${guessedNumbers.length} numeri (${guessedNumbers[i]})`;

    } else if (guessedNumbers.length === 1) {

        instructions.innerHTML = `Hai indovinato ${guessedNumbers.length} numero (${guessedNumbers[i]})`;
    }

    else {

        instructions.innerHTML = "Non hai indovinato nemmeno un numero!";
    }


    replayBtn.classList.add("btn", "btn-primary", "mt-2", "d-block", "mx-auto");
    container.appendChild(replayBtn);
    replayBtn.innerHTML = "Rigioca";

});

replayBtn.addEventListener("click", function () {

    location.reload();
})

























