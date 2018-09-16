class Game{
    constructor(phrases){
        this.missed = missed
        this.phrases = [
            "peppermint", "hippopotamus", "clover"
            ];  
    }
    
    getRandomPhrase(){
        let number = Math.floor(Math.random()* phrases.length);
        const phrase = phrases[number];
        return phrase;
    }
}