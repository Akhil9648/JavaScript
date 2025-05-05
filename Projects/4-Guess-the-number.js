const randomNuumber=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt');
const userInpur=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('lowOrHi');
const startOver=document.querySelector('.resultParas');
const p=document.createElement('p');
let prevGuess=[];
let numGuess=1;
let playGame=true;
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userInpur.value);
    console.log(guess);
    validateGuess(guess);
  })
  function validateGuess(guess){
    if(isNaN(guess)){
      alert("Not a valid number");
    }
      if(guess>100 || guess<0){
        alert("Number is not in range")
      }
      prevGuess.push(guess);
      if(numGuess==11){
        playGame=false;
        displayGuess(guess);
        displayMessage(`The game is over and the random number was ${randomNuumber}`)
        endgame();
      }
      else{
        displayGuess(guess);
        checkGuess(guess);
      }
  }
  function checkGuess(guess){
    if(guess===randomNuumber){
        displayMessage(`You guessed it correct,The random number was ${randomNuumber}`);
    }
    else if(guess<randomNuumber){
      displayMessage('Number is Too Low');
    }
    else if(guess>randomNuumber){
      displayMessage('Number is Too High');
    }
  }
  function displayGuess(guess){
    userInpur.value='';
    guessSlot.innerHTML+=`${guess}`;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;
  }
  function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
  }
}
