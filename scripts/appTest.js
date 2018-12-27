const shelljs = require("shelljs");
const { options } = require("./appTestData.js");

const file1 = process.argv[2];
const file2 = process.argv[3];
const green = "\x1b[32m";
const red = "\x1b[31m";
const reset = "\x1b[0m";
let message = red + "Failed" + reset;

const shellCmd = function(commandLineArg) {
  return shelljs.exec(commandLineArg, {silent: true}).stdout;
};

console.log("PLZ provide sample file", "ignore if provided\n");

console.log("For Single File");
options.map( option => {
  const shellOut = shellCmd("wc " + option + " " + file1);
  const userOut = shellCmd("node wc.js " + option + " " + file1);
  const formattedShellOut = shellOut.split(" ").filter(x=>x).join(" ");
  const formattedUserOut = userOut.split(/["\t", " "]/).filter(x=>x).join(" ");
  const format = "For Format -> node wc.js " + option + " " + file1;
  if (formattedShellOut === formattedUserOut) {
    message = green + "Passed" + reset;
  }
  console.log(format);
  console.log(message);
});


console.log("\nFor Multiple Files");
options.map( option => {
  const shellOut = shellCmd("wc " + option + " " + file1 + " " + file2);
  const userOut = shellCmd("node wc.js " + option + " " + file1 + " " + file2);
  const formattedShellOut = shellOut.split(" ").filter(x=>x).join(" ");
  const formattedUserOut = userOut.split(/["\t", " "]/).filter(x=>x).join(" ");
  const format = "For Format -> node wc.js " + option + " " + file1 + " " + file2;
  if (formattedShellOut === formattedUserOut) {
    message = green + "Passed" + reset;
  }
  console.log(format);
  console.log(message);
});