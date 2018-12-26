const parser = function(userArgs) {
  let firstArg = userArgs[0];
  let options = ["line", "word", "char"];
  let filePaths = userArgs;

  if (firstArg.startsWith("-l")) {
    options = ["line"];
    filePaths = userArgs.slice(1);
    return { options, filePaths };
  }
  if (firstArg.startsWith("-w")) {
    options = ["word"];
    filePaths = userArgs.slice(1);
    return { options, filePaths };
  }

  return { options, filePaths };
};

module.exports = {
  parser
};
