/* eslint-env mocha */
const assert = require("assert");

const {
  wc,
  getDetails,
  getStatistics,
} = require("../src/lib.js");


describe("getDetails", () => {

  it("should return report for all options and content provided", () => {
    const options = ["lineCount", "wordCount", "charCount"];
    const content = "ABCD\nEFGH\nIJKL\nMNOP\nQRST";
    const expectedOutput = { lineCount: 4, wordCount: 5, charCount: 24 };
    assert.deepStrictEqual(getDetails(options, content), expectedOutput);
  });

  it("should return report for line & word as options and content provided", () => {
    const options = ["lineCount", "wordCount"];
    const content = "ABCD\nEFGH\nIJKL\nMNOP\nQRST";
    const expectedOutput = { lineCount: 4, wordCount: 5 };
    assert.deepStrictEqual(getDetails(options, content), expectedOutput);
  });

  it("should return report for line & char as options and content provided", () => {
    const options = ["lineCount", "charCount"];
    const content = "ABCD\nEFGH\nIJKL\nMNOP\nQRST";
    const expectedOutput = { lineCount: 4, charCount: 24 };
    assert.deepStrictEqual(getDetails(options, content), expectedOutput);
  });

  it("should return report for word & char as options and content provided", () => {
    const options = ["wordCount", "charCount"];
    const content = "ABCD\nEFGH\nIJKL\nMNOP\nQRST";
    const expectedOutput = { wordCount: 5, charCount: 24 };
    assert.deepStrictEqual(getDetails(options, content), expectedOutput);
  });

  it("should return report for any one option and content provided", () => {
    const options = ["lineCount"];
    const content = "ABCD\nEFGH\nIJKL\nMNOP\nQRST";
    const expectedOutput = { lineCount: 4 };
    assert.deepStrictEqual(getDetails(options, content), expectedOutput);
  });

});


describe("getStatistics", () => {
  const options = ["lineCount", "wordCount", "charCount"];
  const filePaths = ["file1", "file2"];
  const reports = {};
  const filePath = "file1";
  const assmebledLists = { options, filePaths, reports, filePath };
  const error = null;
  const content = "A\nB\nC\nD\nE";

  let expectedOutput = "\t4\t5\9 file1";
  const printer = function (error, data) {
    assert.strictEqual(data, expectedOutput);
  };

  it("should call printer with analyse content", () => {
    getStatistics(assmebledLists, printer, error, content);
  });

});


describe("wc", () => {
  const file1 = "A\nB\nC\nD\nE";
  const listOfFiles = { file1 };
  let expectedOutput;

  const fs = {
    readFile: function (filePath, buffer, callback) {
      const data = listOfFiles[filePath];
      callback(null, data);
    }
  };

  const printer = function (error, data) {
    assert.equal(data, expectedOutput);
  };

  it("should call callback after reading file", () => {
    const userArgs = ["file1"];
    expectedOutput = "\t4\t5\t9 file1";
    wc(userArgs, fs, printer);
  });

  it("should call callback after reading file", () => {
    const userArgs = ["-l", "file1"];
    expectedOutput = "\t4 file1";
    wc(userArgs, fs, printer);
  });

  it("should call callback after reading file", () => {
    const userArgs = ["-w", "file1"];
    expectedOutput = "\t5 file1";
    wc(userArgs, fs, printer);
  });

  it("should call callback after reading file", () => {
    const userArgs = ["-c", "file1"];
    expectedOutput = "\t9 file1";
    wc(userArgs, fs, printer);
  });

});