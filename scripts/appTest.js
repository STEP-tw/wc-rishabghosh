/*eslint-env node*/

const shelljs = require("shelljs");
const { options } = require("./appTestData.js");

const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const RESET = "\x1b[0m";
const YELLOW = "\x1b[33m";

const SPACE = " ";

const TIME_STAMP = YELLOW + "\n" +  "time taken" + RESET;

const sampleFile1 = process.argv[2];
const sampleFile2 = process.argv[3];
const doubleFile = sampleFile1 + SPACE + sampleFile2;


const shellCmd = function(commandLineArg) {
  return shelljs.exec(commandLineArg, {silent: true}).stdout;
};

console.time(TIME_STAMP);

console.log("PLZ provide sample file", "ignore if provided\n");

console.log("For Single File");
options.map( option => {
  let message = RED + "Failed" + RESET;
  const shellOut = shellCmd("wc " + option + SPACE + sampleFile1);
  const userOut = shellCmd("node wc.js " + option + SPACE + sampleFile1);
  const formattedShellOut = shellOut.split(" ").filter(x=>x).join(" ");
  const formattedUserOut = userOut.split(/["\t", " "]/).filter(x=>x).join(" ");
  const format = "For Format -> node wc.js " + option + SPACE + sampleFile1;
  if (formattedShellOut === formattedUserOut) {
    message = GREEN + "Passed" + RESET;
  }
  console.log(format);
  console.log(message);
});


console.log("\nFor Multiple Files");
options.map( option => {
  let message = RED + "Failed" + RESET;
  const shellOut = shellCmd("wc " + option + SPACE + doubleFile);
  const userOut = shellCmd("node wc.js " + option + SPACE + doubleFile);
  const formattedShellOut = shellOut.split(" ").filter(x=>x).join(" ");
  const formattedUserOut = userOut.split(/["\t", " "]/).filter(x=>x).join(" ");
  const format = "For Format -> node wc.js " + option + SPACE + doubleFile;
  if (formattedShellOut === formattedUserOut) {
    message = GREEN + "Passed" + RESET;
  }
  console.log(format);
  console.log(message);
});

console.timeEnd(TIME_STAMP);
