
let currentGame;
let currentPhrase;
let phrases = [
    "bull in a china shop", 
    "cup of joe", 
    "cry wolf"
    ];  
let game = new Game(0,phrases);

// resetDisplay(): this function hides the start screen overlay.
function resetDisplay(){
    $('#overlay').hide();
}

// Add an event listener to the "Start Game" button which calls the resetDisplay() function, creates a new Game object, and starts the game.
$('#btn__reset').click(function(){
    resetDisplay();
    gamePhrase = game.startGame();
});

// markButton(): this function is called when a player selects a letter. It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class.
// Add event listeners to each of the keyboard buttons, so that clicking a button calls the markButton() function.
function markButton(){     
$('.key').click(function(){
    ($(this).attr('disabled', 'disabled'))
    game.handleInteraction();
});
}
markButton();



