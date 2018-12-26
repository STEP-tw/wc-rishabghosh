//readable or change ...counts part?
//filePath or description? bcz total is not a filePath
const formatEachReport = function(filePath, ...counts) {
  const onlyCounts = counts.map(count => "\t" + count).join("");
  const countsWithFilePath = onlyCounts + " " + filePath;
  return countsWithFilePath;
};

const generateTotalReport = function(reports) {
  let totalLineCount = 0;
  let totalCharCount = 0;
  let totalWordCount = 0;

  reports.map(function(eachReport) {
    const { lineCount, wordCount, charCount } = eachReport;
    totalLineCount += lineCount;
    totalWordCount += wordCount;
    totalCharCount += charCount;
  });

  const totalCountMessage = 
  formatEachReport("total", totalLineCount, totalWordCount, totalCharCount);

  return totalCountMessage;
};

const formatOutput = function(reports) {
  let organizedReports = reports.map(function(eachReport) {
    const { lineCount, wordCount, charCount, filePath } = eachReport;
    return formatEachReport(filePath, lineCount, wordCount, charCount);
  });

  if (reports.length > 1) {
    organizedReports.push(generateTotalReport(reports));
    return organizedReports.join("\n");
  }
  return organizedReports.join("");
};

module.exports = {
  formatOutput
};
