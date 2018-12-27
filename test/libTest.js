/* eslint-env mocha */
const assert = require("assert");

const { wc } = require("../src/lib.js");

describe("wc", () => {
  const file1 = "ABCD\nEFGH\nIJKL\nMNOP\nQRST";
  const file2 = "12\n34\n56\n78\n90";
  const listOfFiles = { file1, file2 };
  const fs = {
    readFileSync: filePath => listOfFiles[filePath]
  };

  it("should provide line, word and character count for single file", () => {
    const userArgs = ["file1"];
    const expectedOutput = "\t4\t5\t24 file1";
    assert.strictEqual(wc(userArgs, fs), expectedOutput);
  });

  it("should provide line, word and character count for multiple files", () => {
    const userArgs = ["file1", "file2"];
    let expectedOutput = "";
    expectedOutput += "\t4\t5\t24 " + "file1" + "\n";
    expectedOutput += "\t4\t5\t14 " + "file2" + "\n";
    expectedOutput += "\t8\t10\t38 " + "total";
    assert.strictEqual(wc(userArgs, fs), expectedOutput);
  });

  it("should provide line count for option -l", () => {
    const userArgs = ["-l", "file1"];
    let expectedOutput = "\t4 file1";
    assert.strictEqual(wc(userArgs, fs), expectedOutput);
  });

  it("should provide line count for option -l, multiple files", () => {
    const userArgs = ["-l", "file1", "file2"];
    let expectedOutput = "";
    expectedOutput += "\t4 file1" + "\n";
    expectedOutput += "\t4 file2" + "\n";
    expectedOutput += "\t8 total";
    assert.strictEqual(wc(userArgs, fs), expectedOutput);
  });

  it("should provide word count for option -w", () => {
    const userArgs = ["-w", "file1"];
    let expectedOutput = "\t5 file1";
    assert.strictEqual(wc(userArgs, fs), expectedOutput);
  });

  it("should provide word count for option -w and multiple files", () => {
    const userArgs = ["-w", "file1", "file2"];
    let expectedOutput = "";
    expectedOutput += "\t5 file1" + "\n";
    expectedOutput += "\t5 file2" + "\n";
    expectedOutput += "\t10 total";
    assert.strictEqual(wc(userArgs, fs), expectedOutput);
  });  

  it("should provide character count for option -c", () => {
    const userArgs = ["-c", "file1"];
    let expectedOutput = "\t24 file1";
    assert.strictEqual(wc(userArgs, fs), expectedOutput);
  });  

  it("should provide character count for option -c and multiple files", () => {
    const userArgs = ["-c", "file1", "file2"];
    let expectedOutput = "";
    expectedOutput += "\t24 file1" + "\n";
    expectedOutput += "\t14 file2" + "\n";
    expectedOutput += "\t38 total";
    assert.strictEqual(wc(userArgs, fs), expectedOutput);
  });  

});
