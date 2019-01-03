/* eslint-env mocha */
const assert = require("assert");

const { getDetails } = require("../src/lib.js");

describe("getDetails", () => {

  it("should return report for all options and content provided", () => {
    const options = [ "lineCount", "wordCount", "charCount" ];
    const content = "ABCD\nEFGH\nIJKL\nMNOP\nQRST";
    const expectedOutput = { lineCount: 4, wordCount: 5, charCount: 24 };
    assert.deepStrictEqual(getDetails(options, content), expectedOutput);  
  });

  it("should return report for line & word as options and content provided", ()=> {
    const options = [ "lineCount", "wordCount" ];
    const content = "ABCD\nEFGH\nIJKL\nMNOP\nQRST";
    const expectedOutput = { lineCount: 4, wordCount: 5 };
    assert.deepStrictEqual(getDetails(options, content), expectedOutput);  
  });

  it("should return report for line & char as options and content provided", ()=> {
    const options = [ "lineCount", "charCount" ];
    const content = "ABCD\nEFGH\nIJKL\nMNOP\nQRST";
    const expectedOutput = { lineCount: 4, charCount: 24 };
    assert.deepStrictEqual(getDetails(options, content), expectedOutput);  
  });

  it("should return report for word & char as options and content provided", ()=> {
    const options = [ "wordCount", "charCount" ];
    const content = "ABCD\nEFGH\nIJKL\nMNOP\nQRST";
    const expectedOutput = { wordCount: 5, charCount: 24 };
    assert.deepStrictEqual(getDetails(options, content), expectedOutput);  
  });

  it("should return report for any one option and content provided", ()=> {
    const options = [ "lineCount" ];
    const content = "ABCD\nEFGH\nIJKL\nMNOP\nQRST";
    const expectedOutput = { lineCount: 4 };
    assert.deepStrictEqual(getDetails(options, content), expectedOutput);  
  });

});