const { 
  countLine,
  countWord,
  countCharacter,
} = require("./util.js");

const wordCount = function(userArgs, fs) {
  const reader = fs.readFileSync;
  //temporary
  const filePath = userArgs[0];
  const totalContents = reader(filePath, "utf8");

  const lineCount = countLine(totalContents) - 1;
  const wordCount = countWord(totalContents);
  const charCount = countCharacter(totalContents);

  const formattedResult =
    "\t" + lineCount + "\t" + wordCount + "\t" + charCount + " " + filePath;
    
  return formattedResult;
};

module.exports = {
  wordCount
};
  