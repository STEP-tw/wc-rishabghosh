const {
  NEWLINE,
  EMPTY_STRING,
  TAB,
  SPACE
} = require("./constants.js");

const {
  getKeyCount,
} = require("./util.js");

const justifyEachReport = function (report, filePath) {
  const requiredStatictics = Object.keys(report[filePath]);
  const counts = requiredStatictics.map(option => report[filePath][option]);
  const onlyCounts = counts.map(count => TAB + count).join(EMPTY_STRING);
  const countsWithFilePath = onlyCounts + SPACE + filePath;
  return countsWithFilePath;
};

const formatSingleFile = function (report) {
  const filePaths = Object.keys(report);
  const filePath = filePaths[0];
  return justifyEachReport(report, filePath);
};

const getTotal = function (reports, options, filePaths) {
  const totalCounts = options.map(function (option) {
    const valuesOfOption = filePaths.map(function (filePath) {
      return reports[filePath][option];
    });
    return valuesOfOption.reduce((acc, val) => acc + val);
  });
  
  return TAB + totalCounts.join(TAB) + SPACE + "total";

};

const formatMultipleFiles = function (reports, filePaths, options) {

  const justifiedReports = filePaths.map(filePath => {
    return justifyEachReport(reports, filePath);
  });
  const total = getTotal(reports, options, filePaths);
  justifiedReports.push(total);
  return justifiedReports.join(NEWLINE);
};

const formatOutput = function (reports, filePaths, options) {
  const numberOfReports = getKeyCount(reports);
  if (numberOfReports > 1) {
    return formatMultipleFiles(reports, filePaths, options);
  }
  return formatSingleFile(reports);
};

module.exports = {
  formatOutput,

  //functions listed below are exported only for testing
  formatSingleFile,
  formatMultipleFiles,
};
