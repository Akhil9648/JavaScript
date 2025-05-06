const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Not a valid number");
        return;
    } else if (guess > 100 || guess < 1) {
        alert("Number is not in range (1-100)");
        return;
    }

    prevGuess.push(guess);
    displayGuess(guess);

    if (numGuess === 11) {
        displayMessage(`Game Over! The correct number was ${randomNumber}`);
        endGame();
    } else {
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`🎉 You guessed it right! The number was ${randomNumber}`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('📉 Too Low!');
    } else {
        displayMessage('📈 Too High!');
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += guess + ' ';
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.disabled = true;
    submit.disabled = true;
    p.classList.add('button');
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        location.reload(); // Reload the page to restart
    });
}
