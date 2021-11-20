/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/


// Number  values

let  min = 1,
     max = 10,
     correctGuess = numberGenerator(max, min);
     numberOfGuesses = 3;


 // UI varibales
 
 
 const gameUI = document.querySelector('#game');
 const minNumUI = document.querySelector('.min-num');
 const maxNumUI = document.querySelector('.max-num');
 const guessInputUI = document.querySelector('#guess-input');
 const guessBtnUI = document.querySelector('#guess-btn');
 const messageUI = document.querySelector('.message');


 // Set min an max range from app.js

 minNumUI.textContent = min;
 maxNumUI.textContent = max;
 
//number generator function

function numberGenerator(max, min){

  return Math.floor(Math.random()*(max-min+1)+min )

}



// Add new event listener for to the parent containing the  play again class element.Acces that element  via event delegation because its a class added after the dom has loaded

gameUI.addEventListener('mousedown', guessAgain )

//guess again function

function guessAgain(e){
  if(e.target.classList.contains('play-again')){
    window.location.reload();
  }


}


 
//Add submit button event listner

guessBtnUI.addEventListener('click', guessNumber);

//Guess number function


function guessNumber(){

  //Convert guess input ui to number
  
  let guessInput = parseInt(guessInputUI.value)

  

  // Guessed number validation

  if(isNaN(guessInput) || guessInput < min || guessInput > max){
      messageUI.style.color='red';
      messageUI.textContent =`Please enter a number between ${min} and ${max}. `;
      guessInputUI.value = '';
  }else{
    
     
    // If correct number is guessed
    if (guessInput === correctGuess){

       
      gameOver(true);
      messageUI.textContent = `Congratulations you won ! the correct number is ${correctGuess}`;

    } else{
      //reduce guess by 1
      numberOfGuesses -=1;

      if (numberOfGuesses === 0){
           //if no more guesses are left

             gameOver(false);
             messageUI.textContent = `Too bad, you lost! the correct number is ${correctGuess}`;

      }else{

        
        guessInputUI.style.borderColor = 'red';
        messageUI.style.color = 'red';
        messageUI.textContent = `${guessInput} is not the correct number, please try again. You have ${numberOfGuesses} guesses left`;
        guessInputUI.value = '';

      }
    }
    
    function gameOver(won){
      let color;

      won ? color ='green' : color ='red' ;
      
      guessInputUI.disabled =true;
      guessInputUI.style.borderColor = color;
      messageUI.style.color = color;
      guessBtnUI.value = 'Play Again';
      guessBtnUI.className += 'play-again';
     
    }




  }
    















      // }else if( numberOfGuesses > 0){
      //   //if more than 0 guesses are left

      //   //reduce guess by 1
      //   numberOfGuesses -= 1;


      
      //   guessInputUI.style.borderColor = 'red';
      //   messageUI.style.color = 'red';
      //   messageUI.textContent = `${guessInput} is not the correct number, please try again. You have ${numberOfGuesses} guesses left`;
      //   guessInputUI.value = '';

      // }else if( numberOfGuesses ===0){
      //   //if no more guesses are left

      //   guessInputUI.disabled =true;
      //   guessInputUI.style.borderColor = 'red';
      //   messageUI.style.color = 'red';
      //   messageUI.textContent = `Too bad, you lost! the correct number is ${correctGuess}`;
      // }

  

//console.log (typeof(guessInput));
  
}

