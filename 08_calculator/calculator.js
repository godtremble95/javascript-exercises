const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  const total = arr.reduce((total, value) => {
    return total + value;
  }, 0);
	return total;
};

const multiply = function(arr) {
  const total = arr.reduce((total, value) => {
    return total * value;
  }, 1);
  return total;
};

const power = function(base, exp) {
  return base ** exp;
};

const factorial = function(num) {
	for (i = num -1; i > 1; i--) {
    num *= i;
  }
  return (num >= 1)? num : 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
