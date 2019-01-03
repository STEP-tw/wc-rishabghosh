const { formatOutput } = require("./outputLib.js");

const { parser } = require("./inputLib.js");
const { countLine, countWord, countCharacter } = require("./util.js");

const countingMethods = {
  lineCount: countLine,
  wordCount: countWord,
  charCount: countCharacter
};

const wc = function (userArgs, fs, printer) {
  const { options, filePaths } = parser(userArgs);
  const reader = fs.readFile;

  reader(filePaths[0], "utf8", function (error, content) {

    const eachReport = {};
    options.map(option => {
      const chosenMethod = countingMethods[option];
      eachReport[option] = chosenMethod(content);
    });

    eachReport[filePaths] = filePaths;
    printer(null, formatOutput([eachReport]));
  });
};



module.exports = { wc };