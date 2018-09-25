class Phrase {
  constructor(phrase){
    this.phrase = phrase
  }
    //to create empty boxes for the chosen phrase
    addPhraseToDisplay(){
      for(let x = 0, c=''; c = this.phrase.charAt(x); x++){ 
        if (this.phrase.charAt(x) === ' ') {
          $('#phrase ul').append("<li class='hide space'</li>");
        } else {
          $('#phrase ul').append("<li class='hide letter'" + c + '>' + c + '</li>');
        }
      }
        
        
    };

    //checks to see if the letter selected is a letter within the phrase
    checkLetter(letter){
      return this.phrase.includes(letter);

    };
    
    //if the letter chosen does match one in the phrase, then the letter is shown
    showMatchedLetter(){
        return currentPhrase.find(letter => letter === key);
      }

};

  
    
