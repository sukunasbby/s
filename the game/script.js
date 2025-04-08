/* generating a random number*/

/* 

      Math.random iti da un nr random intre 0 si 1 nr zecimal(0.2, 0.756, 0.999999999999999999999999999999998, ......)
      Math.floor fara zecimale
      
*/
let randomNumber = Math.floor(Math.random() * 100) +1;
console.log(randomNumber);

/save refs for each paragraph/
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

/save button input refs/
const guesssubmit = document.querySelector('.guesssubmit');
const guessField = document.querySelector('.guessField');

/* variable for attempts */
let guessCount = 1;

//variable for creating a reset button
let resetButton;

//function to verify the number 
function checkGuess(){
    //save the introduced number and make sure it is of type Number
    let userGuess = Number(guessField.value);
    
    //check if it is the first attempt
    if(guessCount === 1){
        guesses.textContent = "previous guesses:   ";
    }
    guesses.textContent += userGuess + " ";

    //block for checking if we guessed correctly or not
    if(userGuess === randomNumber){
        lastResult.textContent = "bravo ba esti smeker rau fratele meu te pup";
        lastResult.style.backgroundColor = "pink";
        lowOrHigh.textContent = "";
        setGameOver();
    } else if (guessCount === 10){
        lastResult.textContent="esti handicapat?"
        lastResult.style.backgroundColor = "red";
        setGameOver();
    } else {
        lastResult.textContent="esti doar prost hai incearca din nou"
        lastResult.style.backgroundColor = "blue";
       
        //check if the number is bigger or smaller than the random number, to help the player
        if(userGuess < randomNumber){
            lowOrHigh.textContent="bigger but no personality";
        } else if(userGuess > randomNumber){
            lowOrHigh.textContent="smaller than your d";
    }
}
    //prepare the variables for next attempts
        guessCount++;
    //empty the value of numeric field
        guessField.value="";
    //apply the focus again to the input
        guessField.focus();

}

//how to make the magic button work aka add a listener to the guesssubmit button
guesssubmit.addEventListener('click', checkGuess);


function setGameOver(){
    guessField.disabled = true; //disables input
    guesssubmit.disabled = true; //disables the submit button

    //creating a new button to reset the game
    resetButton = document.createElement('button');
    resetButton.className = 'resetButton';
    resetButton.textContent= "ia o de la capat boule";

    //colocate the button in the body html element
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}


//function to reset the program
function resetGame(){
    guessCount = 1;

    //eliminate the help paragraphs
    const reset = document.querySelectorAll('.result p');
    for(let i=0; i<reset.length; i++){
        reset[i].textContent = "";
        reset[i].style.backgroundColor= 'rgb(191, 139, 255)';
    }

    //eliminate the reset/restart button
    resetButton.parentNode.removeChild(resetButton);

    //reactivate the input and submit buttons
    guessField.disabled = false;
    guesssubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = 'rgb(191, 139, 255)';

    randomNumber = Math.floor(Math.random() * 100) +1;
}
function setGameOver(){
    guessField.disabled = true; //disables input
    guesssubmit.disabled = true; //disables the submit button

    //creating a new button to reset the game
    resetButton = document.createElement('button');
    resetButton.className = 'resetButton';
    resetButton.textContent= "re:start";

    //colocate the button in the body html element
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}


//function to reset the program
function resetGame(){
    guessCount = 1;

    //eliminate the help paragraphs
    const reset = document.querySelectorAll('.result p');
    for(let i=0; i<reset.length; i++){
        reset[i].textContent = "";
        reset[i].style.backgroundColor= 'rgb(255, 245, 230)';
    }

    //eliminate the reset/restart button
    resetButton.parentNode.removeChild(resetButton);

    //reactivate the input and submit buttons
    guessField.disabled = false;
    guesssubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = 'rgb(255, 245, 230)';

    randomNumber = Math.floor(Math.random() * 100) +1;
}





























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































