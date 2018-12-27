const isArgPossibleFilename = function(arg) {
  return !arg.startsWith("-");
};

const removeHyphens = function(userArgs, index) {
  const optionsWithHyphen = userArgs.slice(0, index);
  const elements = optionsWithHyphen.join("").split("");
  const optionsWithOutHyphen = elements.filter(element => element !== "-" );
  return optionsWithOutHyphen;
};

//must refactor
const parser = function(userArgs) {
  const lastIndex = userArgs.length - 1;
  let fileStartingIndex = 0;
  let listOfOptions = [];
  
  for (let index = lastIndex; index >= 0; index--) {
    const arg = userArgs[index];
    if (isArgPossibleFilename(arg)) {
      fileStartingIndex = index;
      listOfOptions = removeHyphens(userArgs, index);
    }
  }
  let options = [];
  if (listOfOptions.includes("l")) {
    options.push("lineCount");
  }
  if (listOfOptions.includes("w")) {
    options.push("wordCount");
  }
  if (listOfOptions.includes("c")) {
    options.push("charCount");
  }
  if (listOfOptions.length === 0) {
    options.push("lineCount", "wordCount", "charCount");
  }

  //if list of options is not blank array then choose default options
  const filePaths = userArgs.slice(fileStartingIndex);
  return { options, filePaths };
};

module.exports = { parser };
