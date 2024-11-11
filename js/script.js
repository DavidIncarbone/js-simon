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
// console.log(message);
const container = document.querySelector("body>div");
// console.log(container);
const inputs = document.querySelectorAll("input");
console.log(inputs);




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


const casualNumbersArray = [];

while (casualNumbersArray.length < 5) {


    casualNumbersArray.push(randomNumberGenerator(1, 50));


}


for (let i = 0; i < casualNumbersArray.length; i++) {

    const numbers = document.createElement("li");
    numbers.innerHTML = casualNumbersArray[i];
    numbersList.appendChild(numbers);

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


    // extract inputs values
    const userNumbers = [];
    for (let i = 0; i < inputs.length; i++) {

        const field = parseInt(inputs[i].value);

        userNumbers.push(field);
    }
    console.log(userNumbers);


    // check guess numbers

    const guessedNumbers = [];
    for (let i = 0; i <= userNumbers.length; i++) {
        const guess = userNumbers[i];
        if (casualNumbersArray.includes(guess)) {
            guessedNumbers.push(guess);
            instructions.innerHTML = `Hai indovinato ${guessedNumbers.length} numeri (${guessedNumbers})`;
        } else if (guessedNumbers.length === 0) {

            instructions.innerHTML = `Non hai indovinato nessun numero!`;
        } else if (guessedNumbers.length === 1) {
            `Hai indovinato ${guessedNumbers.length} numero (${guessedNumbers})`;
        }


    }
    console.log(guessedNumbers);
});







replayBtn.addEventListener("click", function () {

    location.reload();
})

























