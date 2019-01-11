const { EMPTY_STRING, NEWLINE } = require("./constants.js");

const getKeyCount = sourceObject => Object.keys(sourceObject).length;

const trim = function(sourceArray) {
  return sourceArray.filter(x => x);
};

const countLine = function(content) {
  return content.split(NEWLINE).length - 1;
};

const countWord = function(content) {
  const potentialWords = content.split(/[\n \f\r\t\v]+/);
  const words = trim(potentialWords);
  return words.length;
};

const countCharacter = function(content) {
  return content.split(EMPTY_STRING).length;
};


module.exports = {
  getKeyCount,
  trim,
  countLine,
  countWord,
  countCharacter
};
