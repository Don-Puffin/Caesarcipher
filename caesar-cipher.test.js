// Import the functions to be tested
const { doubleShiftCipher } = require("./caesar-cipher");

describe("Caesar Cipher Tests", () => {
  // Test caesarCipher function with alphabetic characters
  test("Applies Caesar Cipher to alphabetic characters", () => {
    const result = doubleShiftCipher("Test123", 1, 0);  //must test the output, not the function
    expect(result).toBe("Uftu234"); // Updated expectation
  });

  // Test caesarCipher function with special characters and numbers
  test("Applies Caesar Cipher to special characters and numbers", () => {
    const result = doubleShiftCipher("!@#$%^&*123", 2, 3);
    expect(result).toBe("&E()*c+/678"); // Updated expectation
  });

  // Test caesarCipher function with negative shift
  test("Applies Caesar Cipher with negative shift", () => {
    const result = doubleShiftCipher("abc", -1, 3);
    expect(result).toBe("cde");
  });
});