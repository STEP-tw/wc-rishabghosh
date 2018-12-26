/* eslint-env mocha */
const assert = require("assert");

const { 
  wordCount,
} = require("../src/lib.js");

describe("wordCount", () => {

  const file1 = "ABCD\nEFGH\nIJKL\nMNOP\nQRST";
  const file2 = "12\n34\n56\n78\n90";
  const listOfFiles = { file1 , file2 };
  const fs = {
    readFileSync: (filePath) => listOfFiles[filePath]
  };

  it("should provide line, word and character count for single file", () => {
    const userArgs = ["file1"];
    const expectedOutput = "\t4\t5\t24 file1";
    assert.strictEqual(wordCount(userArgs, fs), expectedOutput);
  });

});