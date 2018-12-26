/* eslint-env mocha */
const assert = require("assert");

const {
  formatOutput,
} = require("../src/outputLib.js");


describe("formatOutput", () => {
  const line = 5;
  const word = 20;
  const char = 50;
  const filePath = "file1";

  it("should format result for results and filePath provided", () => {
    const result = { line, word, char };
    let expectedOutput = "\t" + line;
    expectedOutput += "\t" + word;
    expectedOutput += "\t" + char;
    expectedOutput += " " + filePath;
    assert.strictEqual(formatOutput(result, filePath), expectedOutput);
  });

});