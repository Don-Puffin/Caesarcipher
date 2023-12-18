// Import the functions to be tested
const { caesarCipher } = require("./caesar-cipher");

describe("Caesar Cipher Tests", () => {
  // Test caesarCipher function with alphabetic characters
  test("Applies Caesar Cipher to alphabetic characters", () => {
    const result = caesarCipher("Test123", 5);  //must test the output, not the function
    expect(result).toBe("Yjxy678"); // Updated expectation
  });

  // Test caesarCipher function with special characters and numbers
  test("Applies Caesar Cipher to special characters and numbers", () => {
    const result = caesarCipher("!@#$%^&*123", 2);
    expect(result).toBe("#B%&'`(,345"); // Updated expectation
  });

  // Test caesarCipher function with negative shift
  test("Applies Caesar Cipher with negative shift", () => {
    const result = caesarCipher("abc", -1);
    expect(result).toBe("zab");
  });
});