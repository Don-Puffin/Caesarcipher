function encrypt() {
  const primaryShift = parseInt(document.getElementById('primaryShift').value);
  const secondaryShift = parseInt(document.getElementById('secondaryShift').value);
  const inputText = document.getElementById('inputText').value;
  document.getElementById('outputText').value = doubleShiftCipher(inputText, primaryShift, secondaryShift);
}

function decrypt() {
  const primaryShift = parseInt(document.getElementById('primaryShift').value);
  const secondaryShift = parseInt(document.getElementById('secondaryShift').value);
  const inputText = document.getElementById('inputText').value;
  document.getElementById('outputText').value = doubleShiftCipher(inputText, -primaryShift, -secondaryShift);
}

function doubleShiftCipher(text, primaryShift, secondaryShift) {
  return text.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt(0);
      const offset = code < 91 ? 65 : 97;
      const primaryShifted = (code - offset + primaryShift + 26) % 26 + offset;
      const secondaryShifted = (primaryShifted - offset + secondaryShift + 26) % 26 + offset;
      return String.fromCharCode(secondaryShifted);
    } else {
      const charCode = char.charCodeAt(0);
      return String.fromCharCode((charCode + primaryShift + secondaryShift) % 256);
    }
  }).join('');
}


module.exports = { doubleShiftCipher };
