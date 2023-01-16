const fibonacci = function(num) {
  let temp, numHigh = 1, numLow = 0;
  if (num < 0) return "OOPS";
  for (i = Number(num) -1; i > 0; i--) {
    temp = numHigh + numLow;
    numLow = numHigh;
    numHigh = temp;
  }
  return numHigh;
};

// Do not edit below this line
module.exports = fibonacci;
