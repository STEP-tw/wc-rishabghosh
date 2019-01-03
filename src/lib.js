const { formatOutput } = require("./outputLib.js");

const { parser } = require("./inputLib.js");
const { countLine, countWord, countCharacter } = require("./util.js");

const countingMethods = {
  lineCount: countLine,
  wordCount: countWord,
  charCount: countCharacter
};

const getDetails = function (report, options, filePath, content) {
  const eachReport = {};
  //use forEach insted of map
  options.map(option => {
    const chosenMethod = countingMethods[option];
    eachReport[option] = chosenMethod(content);
  });

  eachReport[filePath] = filePath;
  report.push(eachReport);
  return report;
};



const wc = function (userArgs, fs, printer) {
  const { options, filePaths } = parser(userArgs);
  const reader = fs.readFile;
  let report = [];
  //use forEach instead of for
  for (let filePath of filePaths) {
    //make callback a function to avoid confusing
    reader(filePath, "utf8", function (error, content) {
      report  = getDetails(report, options, filePath, content);
      if (report.length === filePaths.length) {
        printer(null, formatOutput(report));
      }


    });
  }
};



module.exports = { wc };