/* eslint-env mocha */

const assert = require("assert");

const { parser } = require("../src/inputLib.js");

describe("parser", () => {
  it("should provide all options and 1 filePath for only single file provided", () => {
    const userArgs = ["file1"];
    const expectedOutput = {
      options: ["line", "word", "char"],
      filePaths: ["file1"]
    };
    assert.deepStrictEqual(parser(userArgs), expectedOutput);
  });

  it("should provide all options and all filePaths for multiple files provided", () => {
    const userArgs = ["file1", "file2"];
    const expectedOutput = {
      options: ["line", "word", "char"],
      filePaths: ["file1", "file2"]
    };
    assert.deepStrictEqual(parser(userArgs), expectedOutput);
  });

  it("should provide all options and all filePaths for multiple files provided", () => {
    const userArgs = ["file1", "file2"];
    const expectedOutput = {
      options: ["line", "word", "char"],
      filePaths: ["file1", "file2"]
    };
    assert.deepStrictEqual(parser(userArgs), expectedOutput);
  });

  it("should provide only line as a option if first arg is -l", () => {
    const userArgs = ["-l", "file1"];
    const expectedOutput = { options: ["line"], filePaths: ["file1"] };
    assert.deepStrictEqual(parser(userArgs), expectedOutput);
  });
});
