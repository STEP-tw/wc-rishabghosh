const formatOutput = function(result, filePath) {
  const { line, word, char } = result;
  return "\t" + line + "\t" + word + "\t" + char + " " + filePath;
};

module.exports = {
  formatOutput
};