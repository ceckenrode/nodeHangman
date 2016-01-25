var Letter = require("./letter.js");
module.exports = Word;

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
        if (guessLetter.toLowerCase() === this.lets[i].charac.toLowerCase()) {
          this.lets[i].appear = true;
          numLettersFound++;
        }
      };
      return numLettersFound;
    },
    this.didWeFindTheWord = function() {
      if (this.lets.every(function(curLet) {
          return curLet.appear === true;
        })) {
        this.found = true;
      }
      return this.found;
    },
    this.wordRender = function() {
      var str = "";
      for (var i = 0; i < this.lets.length; i++) {
        str += this.lets[i].letterRender() + " ";
      };
      return str;
    }
}


var test = new Word("e");
test.getLets();
test.checkIfLetterFound("e");
test.didWeFindTheWord();
console.log(test.didWeFindTheWord());
