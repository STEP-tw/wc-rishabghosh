const formatOutput = function(result, filePath) {
  const { lineCount, wordCount, charCount } = result;
  return "\t" + lineCount + "\t" + wordCount + "\t" + charCount + " " + filePath;
};

module.exports = {
  formatOutput
};