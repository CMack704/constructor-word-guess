var Word = require('./word');
var Letter = require('./letter');
var inquirer = require('inquirer');

var wordsArray = ['Homie', 'Lebron James', 'Rocket League', 'Barry Sanders'];


function randomWords() {
    if (Math.floor(Math.random() * wordsArray.length) === 0) {
        var newWord = new Word(wordsArray[0]);
    } else if (Math.floor(Math.random() * wordsArray.length) === 1) {
        newWord = new Word(wordsArray[1]);
    } else if (Math.floor(Math.random() * wordsArray.length) === 2) {
        newWord = new Word(wordsArray[2]);
    } else {
        newWord = new Word(wordsArray[3]);
    }

    console.log(newWord.word);

}
randomWords();