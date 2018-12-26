const parser = function(userArgs) {
  let firstArg = userArgs[0];
  let options = ["l", "w", "c"];
  let filePaths = userArgs ;
  
  if (firstArg.startsWith("-l")) {
    options = ["l"];
    filePaths = userArgs.slice(1);
    return { options, filePaths };
  }

  return { options, filePaths };
};

module.exports = {
  parser
};