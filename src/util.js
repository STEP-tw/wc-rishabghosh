const whitespace = function(element) {
  return element !== "";
};

const trim = function(sourceArray) {
  return sourceArray.filter(whitespace);
};

const countLine = function(content) {
  return content.split("\n").length;
};

const countWord = function(content) {
  //const replacedContent = content.replace("\n", " ");
  const replacedContent =  content.split("\n").join(" ")
  const potentialWords = replacedContent.split(" ");
  const words = trim(potentialWords);
  return words.length;
};

const countCharacter = function(content) {
  return content.split("").length;
};  


module.exports = {
  trim,
  countLine,
  countWord,
  countCharacter
};