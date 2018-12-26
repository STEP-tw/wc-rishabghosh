const { formatOutput } = require("./outputLib.js");

const {
  countLine,
  countWord,
  countCharacter,
} = require("./util.js");

const wc = function(userArgs, fs) {
  const reader = fs.readFileSync;
  //temporary name
  const filePath = userArgs[0];
  const content = reader(filePath, "utf8");

  const report = {
    line: countLine(content) - 1,
    word: countWord(content),
    char: countCharacter(content)
  };
  
  return formatOutput(report, filePath);
};


module.exports = {
  wc
};