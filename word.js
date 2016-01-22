var Letter = require("./letter.js");

function Word(wrd) {
  this.word = wrd,
    this.lets = [],
    this.found = false,
    this.getLets = function() {
      for (var i = 0; i < wrd.length; i++) {
        this.lets.push(new Letter(wrd[i]));
      };
    },
    this.checkIfLetterFound = function(guessLetter) {
      var numLettersFound = 0;
      for (var i = 0; i < this.lets.length; i++) {
        if (guessLetter === this.lets[i].charac) {
          this.lets[i].appear = true;
          numLettersFound++;
        }
      };
      return numLettersFound;
    }
}
var test = new Word("hello");
test.getLets();
test.checkIfLetterFound("e");
console.log(test.lets[1]);
