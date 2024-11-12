"use strict"
console.clear();

// Get Elements

let countDown = document.getElementById("countdown");
// console.log(countDown);
const instructions = document.getElementById("instructions");
// console.log(instructions);
let numbersList = document.getElementById("numbers-list");
// console.log(numbersList);
const answersForm = document.getElementById("answers-form");
// console.log(answersForm);
const message = document.getElementById("message");
message.classList.add("d-none");
// console.log(message);
const container = document.querySelector("body>div");
// console.log(container);
const inputs = document.querySelectorAll("input");
const invalidFeedback = document.querySelectorAll("div .invalid-feedback");
console.log(invalidFeedback);


console.log(inputs);

// Timer

let seconds = 5;

const timer = setInterval(function () {

    if (seconds >= 1) {

        countDown.innerHTML = seconds--;

    } else {


        countDown.classList.add("d-none");
        numbersList.classList.add("d-none");
        instructions.innerHTML = "Inserisci i numeri che hai memorizzato (Non puoi inserire doppioni)"
        answersForm.classList.remove("d-none");
        clearInterval(timer);
    }

},
    1000);

// Create list 

const casualNumbersArray = [];


while (casualNumbersArray.length < 5) {

    const randomNumbers = randomNumbersGenerator(1, 50);

    if (!casualNumbersArray.includes(randomNumbers)) {
        casualNumbersArray.push(randomNumbers);
        const numbers = document.createElement("li");
        numbers.innerHTML = randomNumbers;
        numbersList.appendChild(numbers);
    }

}

console.log(casualNumbersArray);


// Submit event

const replayBtn = document.createElement("button");
console.log(replayBtn);
answersForm.addEventListener("submit", function (event) {

    event.preventDefault();

    answersForm.classList.add("d-none");
    replayBtn.classList.add("btn", "btn-primary", "mt-2", "d-block", "mx-auto");
    container.appendChild(replayBtn);
    replayBtn.innerHTML = "Rigioca";
    message.classList.remove("d-none");
    instructions.classList.add("d-none");


    // extract inputs values and check isNaN fields
    const userNumbers = [];

    for (let i = 0; i < inputs.length; i++) {

        const field = parseInt(inputs[i].value);
        userNumbers.push(field);
        if (isNaN(field) === true) {
            alert("Ci sono uno o più campi vuoti!");
            location.reload();

        }
    }
    console.log(userNumbers);

    // denie duplicates from user
    const duplicates = userNumbers.filter((item, index) => userNumbers.indexOf(item) !== index);
    console.log(duplicates);

    if (duplicates.length > 0) {
        alert("Non puoi inserire due o più numeri uguali!");
        location.reload();

    }

    // check guess numbers

    const guessedNumbers = [];
    for (let i = 0; i <= userNumbers.length; i++) {
        const guess = userNumbers[i];

        if (casualNumbersArray.includes(guess)) {
            guessedNumbers.push(guess);

            message.innerHTML = `Hai indovinato ${guessedNumbers.length} numeri (${guessedNumbers})`;
        } else if (guessedNumbers.length === 0) {
            message.innerHTML = `Non hai indovinato nessun numero!`;
        } else if (guessedNumbers.length === 1) {
            message.innerHTML = `Hai indovinato ${guessedNumbers.length} numero (${guessedNumbers})`;
        } else if (guessedNumbers.length === 5) {

            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });
        }
    } console.log(guessedNumbers);

    replayBtn.addEventListener("click", function () {

        location.reload();
    })
})

























