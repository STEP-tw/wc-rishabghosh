const formatOutput = function(report) {
  return report.map(function(eachReport){
    const { lineCount, wordCount, charCount, filePath } = eachReport;
    return "\t" + lineCount + "\t" + wordCount + "\t" + charCount + " " + filePath;
  }).join("\n");
};

module.exports = {
  formatOutput
};