function Letter(letter) {
    this.letter = letter;
    this.isLetterGuessed = false;

    this.letterDisplay = function() {
        if (letterGuessed) {
            console.log(this.letter)
        } else {
            console.log('_')
        }
    }
    this.isGuessed = function(guess) {
        if (guess === this.letter) {
            isLetterGuessed = true;
        }
    }
}

module.exports = Letter;