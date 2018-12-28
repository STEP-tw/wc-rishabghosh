const shelljs = require("shelljs");
const { options } = require("./appTestData.js");

const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const RESET = "\x1b[0m";

let message = RED + "Failed" + RESET;

const SPACE = " ";

const sampleFile1 = process.argv[2];
const sampleFile2 = process.argv[3];
const doubleFile = sampleFile1 + SPACE + sampleFile2;


const shellCmd = function(commandLineArg) {
  return shelljs.exec(commandLineArg, {silent: true}).stdout;
};

console.log("PLZ provide sample file", "ignore if provided\n");

console.log("For Single File");
options.map( option => {
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