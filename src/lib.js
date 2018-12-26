const { formatOutput } = require("./outputLib.js");
const { parser } = require("./inputLib.js");

const { countLine, countWord, countCharacter } = require("./util.js");

const countingMethods = {
  line: countLine,
  word: countWord,
  char: countCharacter
};

const getDetails = function(filePath, reader) {
  let content = reader(filePath, "utf8");
  const lineCount = countLine(content) - 1;
  const wordCount = countWord(content);
  const charCount = countCharacter(content);
  return { lineCount, wordCount, charCount, filePath };
};

const wc = function(userArgs, fs) {
  const reader = fs.readFileSync;
  const { options, filePaths } = parser(userArgs);
  const reports = filePaths.map(filePath => getDetails(filePath, reader));
  return formatOutput(reports);
};

module.exports = {
  wc
};
