const validOptions = { l: "line", w: "word", c: "char" };

//must refactor
const parser = function(userArgs) {
  let startingIndex = 0;
  let listOfOptions = [];
  //can loop it in reverse order then break is not needed
  for (let index = 0; index < userArgs.length; index++) {
    const arg = userArgs[index];
    if(!arg.startsWith("-")) {
      startingIndex = index;
      listOfOptions = userArgs.slice(0, index).join("").split("").filter(x => !(x === "-"));
      break;
    }
  }
  let options = [];
  if (listOfOptions.includes("l")) { options.push("lineCount"); }
  if (listOfOptions.includes("w")) { options.push("wordCount"); }
  if (listOfOptions.includes("c")) { options.push("charCount"); }
  if (listOfOptions.length === 0) { options.push("lineCount", "wordCount", "charCount"); }

  //if list of options is not blank array then choose default options
  const filePaths = userArgs.slice(startingIndex);
  return { options, filePaths };
};



module.exports = {
  parser
};
