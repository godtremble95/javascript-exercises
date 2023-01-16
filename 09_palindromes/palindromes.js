const palindromes = function (testStr) {
  const charRemove = [' ', ',', '.', '!']
  let testArr = testStr.toLowerCase().split('');
  testArr = testArr.filter((char) => (!charRemove.some((punct) => char === punct)));
  testStr = testArr.toString();
  //return testArr === testArr.reverse();
  return testStr === testArr.reverse().toString();
};

// Do not edit below this line
module.exports = palindromes;
