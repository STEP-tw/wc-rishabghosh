/* eslint-env mocha */
const assert = require("assert");

const {
  trim,
  countLine,
  countWord,
  countCharacter
} = require("../src/util.js");

describe("trim", () => {
  it("should remove elements with empty string", () => {
    const sourceArrray = ["a", " ", "", " e ", ""];
    const expectedOutput = ["a", " ", " e "];
    assert.deepStrictEqual(trim(sourceArrray), expectedOutput);
  });
});

describe("countLine", () => {
  it("should return line count for given content", () => {
    const content = "A\nB\nC\nD\nE";
    const expectedOutput = 4;
    assert.strictEqual(countLine(content), expectedOutput);
  });
});

describe("countWord", () => {
  it("should return word count for given content", () => {
    let content = "";
    content += "ABCD   EFGH\n";
    content += "IJKL   MNOP\n";
    content += "QRST   UVWX";
    const expectedOutput = 6;
    assert.strictEqual(countWord(content), expectedOutput);
  });
});

describe("countCharacter", () => {
  it("should return character count for given content", () => {
    const content = "A\nB\nC\nD\nE";
    const expectedOutput = 9;
    assert.strictEqual(countCharacter(content), expectedOutput);
  });
});
