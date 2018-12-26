const spaceTrimmer = function(sourceArray) {
  return sourceArray.filter(e=>e.trim());
};

const wordCount = function(userArgs, fs) {
  const reader = fs.readFileSync;
  const filePath = userArgs[0];
  const totalContents = reader(filePath, "utf8");

  const lines = totalContents.split("\n");
  const potentialWords = lines.join(" ").split(" ");
  const words = spaceTrimmer(potentialWords);
  const characters = totalContents.split("");

  const lineCount = lines.length - 1;
  const wordCount = words.length;
  const charCount = characters.length;
  const formattedResult = "\t" + lineCount + "\t" + wordCount + "\t" + charCount + 
  " " + filePath; 
  return formattedResult;
};

module.exports = {
  wordCount
};