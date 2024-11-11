"usestrict";
console.clear();

// UTILITIES FUNCTION

// RANDOM NUMBER GENERATOR

/**
 * 
 * @param {num} min 
 * @param {num} max 
 * @returns 
 * 
 * @abstract Genera un numero random compreso tra min e max
 */

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// ODDS OR EVEN 

/**
 * 
 * @param {num} num 
 * @returns 
 * @abstract Indica se un numero è pari o dispari
 */

function oddsOrEven(num) {

    let result = "";

    if (num % 2 === 0) {
        console.log(`Il risultato è pari`);
        result = "pari"
    } else {
        console.log(`Il risultato è dispari`);
        result = "dispari"
    }
}


// ODDS EVEN GAME 

/**
 * 
 * @param {num} num 
 * @returns 
 * @abstract Gioco pari e dispari tra utente e pc
 */

function oddsEven() {

    const pcNumber = randomNumber(1, 10);
    console.log("numPC", pcNumber);

    const userNumber = parseInt(prompt("Inserisci un numero tra 1 e 10"));
    console.log("num user", userNumber);


    const userChoice = prompt("Scegli pari o dispari");
    console.log(userChoice);

    const sum = pcNumber + userNumber;
    console.log(sum);


    const oeResult = oddsEven(sum);
    console.log(oeResult);

    if (oeResult === userChoice.toLowerCase()) {

        console.log("Hai vinto!");

    } else {
        console.log("Hai perso");

    }
}




// DICE GAME
/**
 * 
 * @param {num} userNumber 
 * @param {num} pcNumber 
 * @returns 
 * @abstract Gioco dei dadi tra utente e pc
 */

function dice() {

    const userNumber = randomNumber(1, 6);
    const pcNumber = randomNumber(1, 6);

    let message = `Il tuo numero è ${userNumber}, mentre il numero del PC è ${pcNumber}. `

    if (userNumber > pcNumber) {

        console.log(message + "Complimenti, hai vinto!");

    } else if ((userNumber < pcNumber)) {

        console.log(message + "Spiacente, purtroppo hai perso");

    } else {

        console.log(message +
            "Tu e il pc avete pescato lo stesso numero, abbiamo quindi un pareggio!");

    }
    return;
}

// Word Reverse

/**
 * 
 * @param {string} 
 * @returns 
 * @abstract Inverte una parola
 */

function wordReverse() {
    let reversedWord = "";

    for (let i = word.length - 1; i >= 0; i--) {

        reversedWord += word[i];

    }
    if (word === reversedWord) {
        console.log("La parola è palindroma");

    } else {
        console.log("La parola non è palindroma");

    }

    return reversedWord
}

// Countdown

/**
 * 
 * @param {num} starterTime 
 */


