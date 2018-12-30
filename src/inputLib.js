const { HYPHEN, EMPTY_STRING } = require("./constants.js");

const isPossibleFilename = function(arg) {
  return !arg.startsWith(HYPHEN);
};

const getOptionsWithOutHyphen = function(userArgs, index) {
  const optionsWithHyphen = userArgs.slice(0, index);
  const elements = optionsWithHyphen.join(EMPTY_STRING).split(EMPTY_STRING);
  const optionsWithOutHyphen = elements.filter(element => element !== HYPHEN);
  return optionsWithOutHyphen;
};

//could rename to getUniqueOptions?
const arrangeOptions = function(parsedOptions) {
  let result = [];

  if (parsedOptions.includes("l")) {
    result.push("lineCount");
  }

  if (parsedOptions.includes("w")) {
    result.push("wordCount");
  }

  if (parsedOptions.includes("c")) {
    result.push("charCount");
  }

  if (parsedOptions.length === 0) {
    result.push("lineCount", "wordCount", "charCount");
  }
  return result;
};

const parser = function(userArgs) {
  const lastIndex = userArgs.length - 1;
  let fileStartingIndex = 0;
  let parsedOptions = [];

  for (let index = lastIndex; index >= 0; index--) {
    const arg = userArgs[index];
    if (isPossibleFilename(arg)) {
      fileStartingIndex = index;
      parsedOptions = getOptionsWithOutHyphen(userArgs, index);
    }
  }

  const options = arrangeOptions(parsedOptions);
  const filePaths = userArgs.slice(fileStartingIndex);
  return { options, filePaths };
};

module.exports = { parser };
