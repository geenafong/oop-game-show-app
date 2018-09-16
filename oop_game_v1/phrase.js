class Phrase {
  constructor(phrase){
    this.phrase = phrase
  }
    addPhraseToDisplay(){
        let phrase = 'hippopotamus'
        for(let x = 0, c=''; c = phrase.charAt(x); x++){ 
        $('#phrase ul').append("<li class='hide letter'" + c + '>' + c + '</li>');
        }
    };
}

//     new Phrase(phrase);

    // checkLetter(){
    //     let checkedLetter= false
    //     $('#qwerty button').click(function(){
    //       if($('.key').val() == $('#phrase li').val()){
    //         console.log('o');
    //         checkedLetter = true;
    //       } 
    //     });

    // // }

  
    
