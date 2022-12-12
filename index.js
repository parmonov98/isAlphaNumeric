function isAlphaNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !((code > 47 && code < 58)) && // numeric (0-9) and 
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
      &&
      !(code == 32) // space
    ) {
      // lower alpha (a-z)
      return false;
    }
  }
  return true;
}

if (isAlphaNumeric("John ")) {
  console.log('The string is alpanumeric with spaces');
}