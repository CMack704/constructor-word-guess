var Letter = require("./letter.js");

function Word(word) {
    this.word = word;
    this.letters = [];

    this.randomWord = function() {
        var wordArray = this.word.split('')
        for (var i = 0; i < wordArray.length; i++) {
            var newLetter = new Letter(wordArray[i]);
           this.letters.push(newLetter);
        }
    };
    this.userGuess = function(letter) {
        for (var j = 0; j < this.letters.length; j++) {
            Letter.isGuessed(this.letters[j]);
        }
    }
}

module.exports = Word;