const guessInput = document.querySelector('#guess');
const submitBtn = document.querySelector('#submit');
const resetBtn = document.querySelector('#reset');
const resultDiv = document.querySelector('#result');

// variables
let targetNumber = Math.floor(Math.random() * 100) + 1;
let numberOfGuesses = 0;


//This is the button function
submitBtn.addEventListener('click', function() {
    
    numberOfGuesses++;
    const guess = parseInt(guessInput.value, 10); 

    if (guess === targetNumber) {
        resultDiv.textContent = "You win! It took you " + numberOfGuesses + "guesses.";
        submitBtn.disabled = true; 
    } else if (guess < targetNumber) {
        resultDiv.textContent = 'Too low. Try again.';
    } else {
        resultDiv.textContent = 'Too high. Try again.';
    }
});

// reset button function 
resetBtn.addEventListener('click', function() {
    submitBtn.disabled = false; 
    targetNumber = Math.floor(Math.random() * 100) + 1;;
    numberOfGuesses = 0;
});