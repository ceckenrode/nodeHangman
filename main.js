var prompt = require("prompt");
var Word = require("./word.js");
var hangedMan = require("./hangedmen.js");

prompt.start();

var game = {
  wordBank: ["Bootstrap", "jQuery", "Firebase", "MongoDB", "AngularJS", "Javascript", "Nodejs", "Ruby on Rails"],
  guessRemaining: 7,
  currentWrd: null,
  startGame: function(wrd) {
    var wrdIdx = Math.floor(Math.random() * this.wordBank.length);
    this.currentWrd = new Word(this.wordBank[wrdIdx]);
    this.currentWrd.getLets();
    this.currentWrd.checkIfLetterFound(" ")
    console.log(this.currentWrd.wordRender());
    this.keepPromptingUser();
  },
  keepPromptingUser: function() {
    var self = this;
    prompt.get(['guessLetter'], function(err, result) {
      if (result.guessLetter.length > 1){
        console.log("You only get to pick one letter!");
        self.keepPromptingUser();
      } else{

      console.log("The Letter or space you guessed is " + result.guessLetter);
      var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);
      if (findHowManyOfUserGuess === 0) {
        console.log("You guessed wrong!");
        self.guessRemaining--;
      } else {
        console.log(hangedMan[self.guessRemaining]);
        console.log("You guessed right!")
        if (self.currentWrd.didWeFindTheWord() === true) {
          console.log(hangedMan[self.guessRemaining]);
          console.log("You win!!!");
          console.log("The word was " + self.currentWrd.word);
          return 1;
        }
      }
      console.log(hangedMan[self.guessRemaining]);
      console.log("Guesses remaining: " + self.guessRemaining);
      console.log(self.currentWrd.wordRender());
      if (self.guessRemaining > 0 && self.currentWrd.found === false) {
        self.keepPromptingUser();
      } else if (self.guessRemaining === 0) {
        console.log("Game Over.");
        console.log("The word was " + self.currentWrd.word);
      } else {
        console.log(self.currentWrd.wordRender());
      }
    }
    });
  }
};

game.startGame();
