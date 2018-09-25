class Game{
    constructor(missed, phrases){
        this.missed = missed;
        this.phrases = phrases.map((phrase)=> new Phrase(phrase));

    }
    
    //randomly retrieves a phrase
     getRandomPhrases(){
        let phraseArray = this.phrases;
        let number = Math.floor(Math.random()* phraseArray.length);
        return phraseArray[number];   
    }

    // startGame(): calls the getRandomPhrase() method, and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method.
    startGame(){
       let randomPhrase = this.getRandomPhrases();
       randomPhrase.addPhraseToDisplay(randomPhrase);
    }

    //method checks to see if the button clicked mathches a letter in the phrase
        //if not, then call the removeLife() method
    handleInteraction(){
        this.phrases[0].checkLetter();
        if ($(this).hasClass('letters in phrase')){
            this.checkForWin();
        } else {
            this.removeLife();
        }
    }
    
    //removeLife(): this method removes a life, removes a heart from the board, and, if the player is out of lives, ends the game.
    removeLife(){
       $('.tries:first').remove();
       this.missed += 1

       if(this.missed === 5){
           this.gameOver();
       }
    }

    //checkForWin(): this method checks to see if the player has selected all of the letters.
     checkForWin(){
         let win = false
         if (this.missed === 5) {
             this.gameOver();
         } else if (currentPhrase.textContent() == currentPhrase){
            win = true;
         }
     }

     //gameOver(): this method displays a message if the player wins or a different message if they lose.
     gameOver(message){
		document.getElementById('game-over-message').style.display = 'block';
        document.getElementById('game-over-message').textContent = message;
    }

}
