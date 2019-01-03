/* eslint-env mocha */
const assert = require("assert");

const {
  formatOutput,
  formatSingleFile,
  formatMultipleFiles
} = require("../src/outputLib.js");

describe.skip("formatOutput", () => {
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
    assert.strictEqual(formatOutput(result), expectedOutput);
  });

  it("should format statictics for multiple file paths provided", () => {
    const result = [
      { lineCount, wordCount, charCount, filePath },
      { lineCount, wordCount, charCount, filePath }
    ];

    let expectedOutput = "\t" + lineCount + "\t" + wordCount;
    expectedOutput += "\t" + charCount + " " + filePath + "\n";
    expectedOutput += "\t" + lineCount + "\t" + wordCount;
    expectedOutput += "\t" + charCount + " " + filePath + "\n";
    expectedOutput += "\t10\t40\t100 total";

    assert.strictEqual(formatMultipleFiles(result), expectedOutput);
  });
});

describe("formatSingleFile", () => {
  const lineCount = 5;
  const wordCount = 20;
  const charCount = 50;
  const filePath = "file1";

  it("should format statictics for single filePath provided", () => {
    let report = {};
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

  it("should format statictics for multiple file paths provided", () => {
    let reports = {};
    reports[file1] = { lineCount, wordCount, charCount };
    reports[file2] = { lineCount, wordCount, charCount };
    let filePaths = ["file1", "file2"];


    let expectedOutput = "\t" + lineCount + "\t" + wordCount;
    expectedOutput += "\t" + charCount + " " + file1 + "\n";
    expectedOutput += "\t" + lineCount + "\t" + wordCount;
    expectedOutput += "\t" + charCount + " " + file2 + "\n";
    expectedOutput += "\t10\t40\t100 total";

    assert.strictEqual(formatMultipleFiles(reports, filePaths), expectedOutput);
  });
});
