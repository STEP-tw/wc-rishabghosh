/* eslint-env mocha */
const assert = require("assert");

const {
  formatOutput,
  formatSingleFile,
} = require("../src/outputLib.js");


describe("formatOutput", () => {
  const lineCount = 5;
  const wordCount = 20;
  const charCount = 50;
  const filePath = "file1";

  it("should format result for results and filePath provided", () => {
    const result = [{ lineCount, wordCount, charCount, filePath }];
    let expectedOutput = "\t" + lineCount;
    expectedOutput += "\t" + wordCount;
    expectedOutput += "\t" + charCount;
    expectedOutput += " " + filePath;
    assert.strictEqual(formatOutput(result, filePath), expectedOutput);
  });
});

describe("formatSingleFile", () => {
  const lineCount = 5;
  const wordCount = 20;
  const charCount = 50;
  const filePath = "file1";

  it("should format statictics for single filePath provided", () => {
    const result = [{ lineCount, wordCount, charCount, filePath }];
    let expectedOutput = "\t" + lineCount;
    expectedOutput += "\t" + wordCount;
    expectedOutput += "\t" + charCount;
    expectedOutput += " " + filePath;
    assert.strictEqual(formatOutput(result, filePath), expectedOutput);
  });
});
