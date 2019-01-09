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

const updateReports = function (reports, filePath, details) {
  reports[filePath] = details;
  return reports;
};

const isAllFileReported = function(reports, filePaths){
  const numberOfReports = getKeyCount(reports);
  const numberOfFiles = filePaths.length;
  return numberOfReports === numberOfFiles;
}

const wc = function (userArgs, fs, printer) {
  const { options, filePaths } = parser(userArgs);
  let reports = {};

  //use forEach instead of for
  for (let filePath of filePaths) {
    //make callback a function to avoid confusing

    fs.readFile(filePath, "utf8", function (error, content) {
      const details = getDetails(options, content);
      updateReports(reports, filePath, details);
      const formattedOutput = formatOutput(reports, filePaths);
      if (isAllFileReported(reports, filePaths)) {
        printer(null, formattedOutput);
      }
    });
  }
};

module.exports = {
  wc,
  getDetails,
};