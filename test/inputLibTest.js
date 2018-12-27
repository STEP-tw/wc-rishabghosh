/* eslint-env mocha */

const assert = require("assert");

const { parser } = require("../src/inputLib.js");

describe("parser", () => {
  it("should provide all options and 1 filePath for only single file provided", () => {
    const userArgs = ["file1"];
    const expectedOutput = {
      options: ["lineCount", "wordCount", "charCount"],
      filePaths: ["file1"]
    };
    assert.deepStrictEqual(parser(userArgs), expectedOutput);
  });

  it("should provide all options and all filePaths for multiple files provided", () => {
    const userArgs = ["file1", "file2"];
    const expectedOutput = {
      options: ["lineCount", "wordCount", "charCount"],
      filePaths: ["file1", "file2"]
    };
    assert.deepStrictEqual(parser(userArgs), expectedOutput);
  });

  it("should provide all options and all filePaths for multiple files provided", () => {
    const userArgs = ["file1", "file2"];
    const expectedOutput = {
      options: ["lineCount", "wordCount", "charCount"],
      filePaths: ["file1", "file2"]
    };
    assert.deepStrictEqual(parser(userArgs), expectedOutput);
  });

  it("should provide only line as a option if first arg is -l", () => {
    const userArgs = ["-l", "file1"];
    const expectedOutput = { options: ["lineCount"], filePaths: ["file1"] };
    assert.deepStrictEqual(parser(userArgs), expectedOutput);
  });

  it("should provide only word as a option if first arg is -w", () => {
    const userArgs = ["-w", "file1"];
    const expectedOutput = { options: ["wordCount"], filePaths: ["file1"] };
    assert.deepStrictEqual(parser(userArgs), expectedOutput);
  });

  it("should provide only char as a option if first arg is -c", () => {
    const userArgs = ["-c", "file1"];
    const expectedOutput = { options: ["charCount"], filePaths: ["file1"] };
    assert.deepStrictEqual(parser(userArgs), expectedOutput);
  });

  it("should provide  as a option if first arg is -w", () => {
    const userArgs = ["-w", "file1"];
    const expectedOutput = { options: ["wordCount"], filePaths: ["file1"] };
    assert.deepStrictEqual(parser(userArgs), expectedOutput);
  });

  it("should provide line, word as a options if first arg is -lw", () => {
    const userArgs = ["-lw", "file1"];
    const expectedOutput = { options: ["lineCount", "wordCount"], filePaths: ["file1"] };
    assert.deepStrictEqual(parser(userArgs), expectedOutput);
  });

  it("should provide line, word as a options if first arg is -wl", () => {
    const userArgs = ["-wl", "file1"];
    const expectedOutput = { options: ["lineCount", "wordCount"], filePaths: ["file1"] };
    assert.deepStrictEqual(parser(userArgs), expectedOutput);
  });

  it("should provide line, word, char as a options if first arg is -lwc", () => {
    const userArgs = ["-lwc", "file1"];
    const expectedOutput = { options: ["lineCount", "wordCount", "charCount"], filePaths: ["file1"] };
    assert.deepStrictEqual(parser(userArgs), expectedOutput);
  });

  it("should provide line, word, char as options if args are -l, -w, -c", () => {
    const userArgs = ["-l", "-w", "-c", "file1"];
    const expectedOutput = { options: ["lineCount", "wordCount", "charCount"], filePaths: ["file1"] };
    assert.deepStrictEqual(parser(userArgs), expectedOutput);
  });

});
