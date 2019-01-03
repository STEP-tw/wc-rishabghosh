const fs = require("fs");

const { wc } = require("./src/lib.js");

const main = function() {
  const userArgs = process.argv.slice(2);
  const printer = function(error, data) {
    console.log(data);
  };
  wc(userArgs, fs, printer);
};

main();
