/* eslint-env mocha */
const assert = require("assert");

const { getDetails,
  wc
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

describe("wc", () => {
  const file1 = "A\nB\nC\nD\nE";
  const fs = {
    readFile: (filePath, buffer, callback) => callback(null, file1)
  };
  
  it("should call callback after reading file", (done) => {
    const userArgs = ["file1"];
    const expectedOutput = "\t4\t5\t9 file1";
    const printer = function(error, data){
      assert.equal(expectedOutput, data);
      done();
    };
    wc(userArgs, fs, printer);
  });

  it("should call callback after reading file", (done) => {
    const userArgs = ["-l", "file1"];
    const expectedOutput = "\t4 file1";
    const printer = function(error, data){
      assert.equal(expectedOutput, data);
      done();
    };
    wc(userArgs, fs, printer);
  });

  it("should call callback after reading file", (done) => {
    const userArgs = ["-w", "file1"];
    const expectedOutput = "\t5 file1";
    const printer = function(error, data){
      assert.equal(expectedOutput, data);
      done();
    };
    wc(userArgs, fs, printer);
  });

  it("should call callback after reading file", (done) => {
    const userArgs = ["-c", "file1"];
    const expectedOutput = "\t9 file1";
    const printer = function(error, data){
      assert.equal(expectedOutput, data);
      done();
    };
    wc(userArgs, fs, printer);
  });

});