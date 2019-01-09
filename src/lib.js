const { formatOutput } = require("./outputLib.js");

const { parser } = require("./inputLib.js");

const {
  countLine,
  countWord,
  countCharacter,
  getKeyCount
} = require("./util.js");


const countingMethods = {
  lineCount: countLine,
  wordCount: countWord,
  charCount: countCharacter
};

const getDetails = function (options, content) {
  const eachReport = {};

  options.forEach(function (option) {
    const chosenMethod = countingMethods[option];
    eachReport[option] = chosenMethod(content);
  });
  return eachReport;
};

const isAllFileReported = function (reports, filePaths) {
  const numberOfReports = getKeyCount(reports);
  const numberOfFiles = filePaths.length;
  return numberOfReports === numberOfFiles;
};

const getStatistics = function (assembledLists, printer, error, content) {
  const { options, filePaths, reports, filePath } = assembledLists;
  const details = getDetails(options, content);

  reports[filePath] = details;
  const formattedOutput = formatOutput(reports, filePaths);
  if (isAllFileReported(reports, filePaths)) {
    printer(null, formattedOutput);
  }
};

const wc = function (userArgs, fs, printer) {
  const { options, filePaths } = parser(userArgs);
  let reports = {};

  for (let filePath of filePaths) {
    const assembledLists = { options, filePaths, reports, filePath };
    const callback = getStatistics.bind(null, assembledLists, printer);
    fs.readFile(filePath, "utf8", callback);
  }
};

module.exports = {
  wc,
  getDetails,
  getStatistics
};