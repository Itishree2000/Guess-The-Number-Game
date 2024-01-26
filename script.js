let randomNumber=parseInt(Math.random()*100+1);

const userInput=document.querySelector("#guessField")
const submit=document.querySelector("#subt")
const guessSlot=document.querySelector(".guesses")
const lowOrHi=document.querySelector(".lowOrHi")
const remaining=document.querySelector(".lastResult")
const startOver=document.querySelector(".resultParas")

const p=document.createElement('p');
//store number guesses in an array
let prevGuess=[];

let numGuess=1;
let playGame=true;
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess);
    })

    
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please enter a valid Number")
  }
  else if(guess<1){
    alert("Number should be greater than 1")
  }
  else if(guess>100){
    alert("Number should be less than 100")
  }
  else{
    prevGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`Game Over,Random number was ${randomNumber}`)
      endGame();
    }
    else{
       displayGuess(guess)
       checkGuess(guess)
    }
  }
}
 function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it right`)
    }
    else if(guess<randomNumber){
        displayMessage(`Number is TOOO Low`)
    }
    else if(guess>randomNumber){
        displayMessage(`Number is TOOO High`)
    }
 }
 function displayGuess(guess){
     userInput.value=''
     guessSlot.innerHTML+= `${guess},`
     numGuess++;
     remaining.innerHTML=`${11-numGuess}`
 }
 function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
 }
 
 function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame=false;
    newGame();
 }
 function newGame(){
   const restart=document.querySelector("#newGame")
    restart.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame=true;
    });
 }