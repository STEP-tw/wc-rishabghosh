const { formatOutput } = require("./outputLib.js");
const { parser } = require("./inputLib.js");

const {
  countLine,
  countWord,
  countCharacter,
} = require("./util.js");

const countingMethods = {
  line: countLine,
  word: countWord,
  char: countCharacter
};

const wc = function(userArgs, fs) {
  const reader = fs.readFileSync;
  const { options, filePaths } = parser(userArgs);
  
  const report = filePaths.map( function(filePath){
    let content = reader(filePath, "utf8");
    const lineCount = countLine(content) - 1;
    const wordCount = countWord(content);
    const charCount = countCharacter(content);
    return { lineCount, wordCount, charCount, filePath };
  });
  return formatOutput(report);
};


module.exports = {
  wc
};