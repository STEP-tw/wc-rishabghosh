/* eslint-env mocha */
const assert = require("assert");

const {
  formatOutput,
  formatSingleFile,
  formatMultipleFiles
} = require("../src/outputLib.js");

describe("formatOutput", () => {
  const lineCount = 5;
  const wordCount = 20;
  const charCount = 50;
  const file1 = "file1";
  const file2 = "file2";

  it("should format statictics for single filePath provided", () => {
    const report = {};
    report[file1] = { lineCount, wordCount, charCount };
    let expectedOutput = "\t" + lineCount;
    expectedOutput += "\t" + wordCount;
    expectedOutput += "\t" + charCount;
    expectedOutput += " " + file1;
    assert.strictEqual(formatOutput(report), expectedOutput);
  });

  it("should format statictics for multiple file paths provided", () => {
    const reports = {};
    reports[file1] = { lineCount, wordCount, charCount };
    reports[file2] = { lineCount, wordCount, charCount };
    const filePaths = ["file1", "file2"];
    const options = [ "lineCount", "wordCount", "charCount" ];

    let expectedOutput = "\t" + lineCount + "\t" + wordCount;
    expectedOutput += "\t" + charCount + " " + file1 + "\n";
    expectedOutput += "\t" + lineCount + "\t" + wordCount;
    expectedOutput += "\t" + charCount + " " + file2 + "\n";
    expectedOutput += "\t10\t40\t100 total";

    assert.strictEqual(formatOutput(reports, filePaths, options), expectedOutput);
  });

});

describe("formatSingleFile", () => {
  const lineCount = 5;
  const wordCount = 20;
  const charCount = 50;
  const filePath = "file1";

  it("should format statictics for single filePath provided", () => {
    const report = {};
    report[filePath] = { lineCount, wordCount, charCount };
    let expectedOutput = "\t" + lineCount;
    expectedOutput += "\t" + wordCount;
    expectedOutput += "\t" + charCount;
    expectedOutput += " " + filePath;
    assert.strictEqual(formatSingleFile(report), expectedOutput);
  });
});

describe("formatMultipleFiles", () => {
  const lineCount = 5;
  const wordCount = 20;
  const charCount = 50;
  const file1 = "file1";
  const file2 = "file2";
  const options = [ "lineCount", "wordCount", "charCount" ];

  it("should format statictics for multiple file paths provided", () => {
    const reports = {};
    reports[file1] = { lineCount, wordCount, charCount };
    reports[file2] = { lineCount, wordCount, charCount };
    const filePaths = ["file1", "file2"];

    let expectedOutput = "\t" + lineCount + "\t" + wordCount;
    expectedOutput += "\t" + charCount + " " + file1 + "\n";
    expectedOutput += "\t" + lineCount + "\t" + wordCount;
    expectedOutput += "\t" + charCount + " " + file2 + "\n";
    expectedOutput += "\t10\t40\t100 total";

    assert.strictEqual(formatMultipleFiles(reports, filePaths, options), expectedOutput);
  });
});
