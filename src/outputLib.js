const generateTotalReport = function(reports) {
  let totalLineCount = 0;
  let totalCharCount = 0;
  let totalWordCount = 0;

  reports.map(function(eachReport){
    const { lineCount, wordCount, charCount } = eachReport;
    totalLineCount += lineCount;
    totalWordCount += wordCount;
    totalCharCount += charCount;
  });

  const totalCountMessage = "\t" + totalLineCount + 
  "\t" + totalWordCount + "\t" + totalCharCount + " " + "total";

  return totalCountMessage;
};


const formatOutput = function(reports) {
  let finalReport = reports.map(function(eachReport){
    const { lineCount, wordCount, charCount, filePath } = eachReport;
    return "\t" + lineCount + "\t" + wordCount + "\t" + charCount + " " + filePath;
  });

  if (reports.length > 1) {
    finalReport.push(generateTotalReport(reports));
    return finalReport.join("\n")
  }
  return finalReport.join("\n");
};

module.exports = { 
  formatOutput
};