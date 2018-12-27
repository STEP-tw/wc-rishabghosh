/*eslint-env node*/

const fs = require("fs");

const { wc } = require("./src/lib.js");

const main = function() {
  const userArgs = process.argv.slice(2);
  const finalResult = wc(userArgs, fs);
  console.log(finalResult);
};

main();
