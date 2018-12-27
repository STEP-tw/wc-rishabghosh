const isArgPossibleFilename = function(arg) {
  return !arg.startsWith("-");
};

const getOptionsWithOutHyphen = function(userArgs, index) {
  const optionsWithHyphen = userArgs.slice(0, index);
  const elements = optionsWithHyphen.join("").split("");
  const optionsWithOutHyphen = elements.filter(element => element !== "-" );
  return optionsWithOutHyphen;
};

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
    if (isArgPossibleFilename(arg)) {
      fileStartingIndex = index;
      parsedOptions = getOptionsWithOutHyphen(userArgs, index);
    }
  }
  
  const options = arrangeOptions(parsedOptions);
  const filePaths = userArgs.slice(fileStartingIndex);
  return { options, filePaths };
};

module.exports = { parser };
