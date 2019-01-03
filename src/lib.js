const { formatOutput } = require("./outputLib.js");

const { parser } = require("./inputLib.js");
const { countLine, countWord, countCharacter } = require("./util.js");

const countingMethods = {
  lineCount: countLine,
  wordCount: countWord,
  charCount: countCharacter
};

const getDetails = function (options, content) {
  const eachReport = {};
  //use forEach insted of map
  options.map(option => {
    const chosenMethod = countingMethods[option];
    eachReport[option] = chosenMethod(content);
  });
  return eachReport;
};


const wc = function (userArgs, fs, printer) {
  const { options, filePaths } = parser(userArgs);
  const reader = fs.readFile;
  let reports = {};
  //use forEach instead of for
  for (let filePath of filePaths) {

    //make callback a function to avoid confusing
    reader(filePath, "utf8", function (error, content) {
      reports[filePath] = getDetails(options, content);
      if (Object.keys(reports).length === filePaths.length) {
        printer(null, formatOutput(reports, filePaths));
      }


    });
  }
};



module.exports = {
  wc,
  getDetails,
};