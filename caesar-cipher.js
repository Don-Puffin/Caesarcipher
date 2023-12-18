// Function to encrypt the input text using the Caesar Cipher
function encrypt() {
  // Get the shift value from the input field
  const shift = parseInt(document.getElementById("shift").value);
  // Get the input text from the textarea
  const inputText = document.getElementById("inputText").value;
  // Set the encrypted result in the output textarea
  document.getElementById("outputText").value = caesarCipher(inputText, shift);
}

// Function to decrypt the input text using the Caesar Cipher
function decrypt() {
  // Get the shift value from the input field
  const shift = parseInt(document.getElementById("shift").value);
  // Get the input text from the textarea
  const inputText = document.getElementById("inputText").value;
  // Set the decrypted result in the output textarea
  document.getElementById("outputText").value = caesarCipher(inputText, -shift); // Note: Use -shift to reverse the encryption
}

// Function to perform the Caesar Cipher encryption/decryption
function caesarCipher(text, shift) {
  return text
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const offset = code < 91 ? 65 : 97;
        return String.fromCharCode(
          ((code - offset + shift + 26) % 26) + offset
        );
      } else {
        const charCode = char.charCodeAt(0);
        return String.fromCharCode((charCode + shift + 256) % 256);
      }
    })
    .join("");
}

module.exports = { caesarCipher };
