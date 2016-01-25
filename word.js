var Letter = require("./letter.js");
module.exports = Word;
/**
 * [Word] - Word object constructor. Adds letters in the randomly selected word here which are then checked against
 * the letter.Render function to determine how the word will be displayed, i.e missing letters are _, correctly 
 * chosen letters are shown as themselves.
 * @param {[string]} wrd [the randomly selected word from the game object]
 */
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
