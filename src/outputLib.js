const { NEWLINE, EMPTY_STRING, TAB, SPACE } = require("./constants.js");

const getLastIndex = function (sourceArray) {
  return sourceArray.length - 1;
};

//filePath or description? bcz total is not a filePath
const justifyEachReport = function (values) {
  const lastIndex = getLastIndex(values);
  const filePath = values[lastIndex];
  const counts = values.slice(0, lastIndex);
  const onlyCounts = counts.map(count => TAB + count).join(EMPTY_STRING);
  const countsWithFilePath = onlyCounts + SPACE + filePath;
  return countsWithFilePath;
};

const justifyEachReport2 = function (report, filePath) {
  const requiredStatictics = Object.keys(report[filePath]);
  const counts = requiredStatictics.map(option => report[filePath][option]);
  const onlyCounts = counts.map(count => TAB + count).join(EMPTY_STRING);
  const countsWithFilePath = onlyCounts + SPACE + filePath;
  return countsWithFilePath;
};

const formatSingleFile2 = function (report) {
  const filePaths = Object.keys(report);
  const filePath = filePaths[0];
  return justifyEachReport2(report, filePath);
};

const generateTotalReport = function (reports) {
  let totalLineCount = 0;
  let totalCharCount = 0;
  let totalWordCount = 0;

  const filePaths = Object.keys(reports);
  filePaths.map(function (filePath) {
    const { lineCount, wordCount, charCount } = reports[filePath];
    totalLineCount += lineCount;
    totalWordCount += wordCount;
    totalCharCount += charCount;
  });

  const allInputs = [totalLineCount, totalWordCount, totalCharCount, "total"];
  const validateInputs = allInputs.filter(x => x); //filter undefined+0 = NaN
  const totalCountMessage = justifyEachReport(validateInputs);
  return totalCountMessage;
};

const formatMultipleFiles2 = function (reports) {
  const filePaths = Object.keys(reports);
  const justifiedReports = filePaths.map(filePath => {
    return justifyEachReport2(reports, filePath);
  });

  justifiedReports.push(generateTotalReport(reports));
  return justifiedReports.join(NEWLINE);
};
/*
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
*/
const formatOutput = function (reports) {
  if (Object.keys(reports).length > 1) {
    return formatMultipleFiles2(reports);
  }
  return formatSingleFile2(reports);
};

module.exports = {
  formatOutput,

  //functions listed below are exported only for testing
};
