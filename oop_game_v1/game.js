class Game{
    constructor(missed, phrases){
        this.missed = 0;
        this.phrases = [
            "bull in a china shop", 
            "cup of joe", 
            "cry wolf"
            ];  
    }
    

    //randomly retrieves a phrase
     getRandomPhrases(){
        let number = Math.floor(Math.random()* this.phrases.length);
        return this.phrases[number];
       
    }
    // startGame(): calls the getRandomPhrase() method, and adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method.
    startGame(){
       let randomPhrase = this.getRandomPhrases();
       currentPhrase = new Phrase (randomPhrase);
       currentPhrase.addPhraseToDisplay(randomPhrase);
    }
    //method checks to see if the button clicked mathches a letter in the phrase
        //if not, then call the removeLife() method
    handleInteraction(letter){
            if (phrase.checkLetter(letter)){
             phrase.showMatchedLetter(letter);
            }
        
    }
    
    //removeLife(): this method removes a life, removes a heart from the board, and, if the player is out of lives, ends the game.
    removeLife(){
        if (checkedLetter() = false) {
            $('#scoreboard li').removeClass();
        }

    }
    //checkForWin(): this method checks to see if the player has selected all of the letters.
    checkForWin(){

    }

}
