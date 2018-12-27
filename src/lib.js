const { formatOutput } = require("./outputLib.js");
const { parser } = require("./inputLib.js");

const { countLine, countWord, countCharacter } = require("./util.js");

const countingMethods = {
  lineCount: countLine,
  wordCount: countWord,
  charCount: countCharacter
};

const getDetails = function(filePath, reader, options) {
  let content = reader(filePath, "utf8");
  const eachReport = {};

  options.map(option => {
    const chosenMethod = countingMethods[option];
    const name = option; //lineCount, wordCount
    eachReport[name] = chosenMethod(content); 
  });

  eachReport[filePath] = filePath;
  return eachReport;
};

const wc = function(userArgs, fs) {
  const reader = fs.readFileSync;
  const { options, filePaths } = parser(userArgs);
  const reports = filePaths.map(filePath => getDetails(filePath, reader, options));
  return formatOutput(reports);
};

module.exports = {
  wc
};
