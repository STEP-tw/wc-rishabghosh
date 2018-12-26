const whitespace = function(element) {
  return element !== "";
};

const trim = function(sourceArray) {
  return sourceArray.filter(whitespace);
};

module.exports = {
  trim
};