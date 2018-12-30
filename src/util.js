const { EMPTY_STRING, NEWLINE } = require("./constants.js");

const emptyString = element => element;

const trim = function(sourceArray) {
  return sourceArray.filter(emptyString);
};

const countLine = function(content) {
  return content.split(NEWLINE).length - 1;
};

const countWord = function(content) {
  //how to replace regular expression?
  const potentialWords = content.split(/["\n", " ", "\f", "\r", "\t", "\v"]/);
  const words = trim(potentialWords);
  return words.length;
};

const countCharacter = function(content) {
  return content.split(EMPTY_STRING).length;
};

module.exports = {
  trim,
  countLine,
  countWord,
  countCharacter
};
