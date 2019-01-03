const { NEWLINE, EMPTY_STRING, TAB, SPACE } = require("./constants.js");

const getLastIndex = function(sourceArray) {
  return sourceArray.length - 1;
};

//filePath or description? bcz total is not a filePath
const justifyEachReport = function(values) {
  const lastIndex = getLastIndex(values);
  const filePath = values[lastIndex];
  const counts = values.slice(0, lastIndex);
  const onlyCounts = counts.map(count => TAB + count).join(EMPTY_STRING);
  const countsWithFilePath = onlyCounts + SPACE + filePath;
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

  const allInputs = [totalLineCount, totalWordCount, totalCharCount, "total"];
  const validateInputs = allInputs.filter(x => x); //filter undefined+0 = NaN
  const totalCountMessage = justifyEachReport(validateInputs);
  return totalCountMessage;
};

//remove magic numbers && requiredStatictics or analized options
const formatSingleFile = function(report) {
  const requiredStatictics = Object.keys(report[0]);
  const allCounts = requiredStatictics.map(option => report[0][option]);
  return justifyEachReport(allCounts);
};

const formatMultipleFiles = function(reports) {
  const justifiedReports = reports.map(function(eachReport) {
    const requiredStatictics = Object.keys(eachReport);
    const allCounts = requiredStatictics.map(option => eachReport[option]);
    return justifyEachReport(allCounts);
  });
  //sort report here
  justifiedReports.push(generateTotalReport(reports));
  return justifiedReports.join(NEWLINE);
};

const formatOutput = function(reports) {
  if (reports.length > 1) {
    return formatMultipleFiles(reports);
  }
  return formatSingleFile(reports);
};

module.exports = {
  formatOutput,

  //functions listed below are exported only for testing
  formatSingleFile,
  formatMultipleFiles
};
