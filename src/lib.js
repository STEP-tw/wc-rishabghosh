const { trim } = require("./util.js");

const wordCount = function(userArgs, fs) {
  const reader = fs.readFileSync;
  const filePath = userArgs[0];
  const totalContents = reader(filePath, "utf8");

  const lines = totalContents.split("\n");
  const potentialWords = lines.join(" ").split(" ");
  const words = trim(potentialWords);
  const characters = totalContents.split("");

  const lineCount = lines.length - 1;
  const wordCount = words.length;
  const charCount = characters.length;
  const formattedResult =
    "\t" + lineCount + "\t" + wordCount + "\t" + charCount + " " + filePath;
    
  return formattedResult;
};

module.exports = {
  wordCount
};
  