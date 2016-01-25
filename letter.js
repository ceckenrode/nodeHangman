
module.exports = Letter;
/**
 * [Letter] - letter contstructor. Checks if the selected letter appears in the current word, if so
 * the character is returned, if no, _ is returned
 * @param {[string]} let [the user selected letter will be passed in place of let]
 */
function Letter(let) {
  this.charac = let,
    this.appear = false,
    this.letterRender = function() {
      if (this.appear === false) {
        return "_";
      } else {
        return this.charac;
      }
    }
}
