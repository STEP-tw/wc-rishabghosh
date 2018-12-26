const { formatOutput } = require("./outputLib.js");

const {
  countLine,
  countWord,
  countCharacter,
} = require("./util.js");

//rename this function its confusing
const wc = function(userArgs, fs) {
  const reader = fs.readFileSync;
  //temporary name
  const filePath = userArgs[0];
  const totalContents = reader(filePath, "utf8");

  const lineCount = countLine(totalContents) - 1;
  const wordCount = countWord(totalContents);
  const charCount = countCharacter(totalContents);
  const result = { lineCount, wordCount, charCount };
  return formatOutput(result, filePath);
};


module.exports = {
  wc
};