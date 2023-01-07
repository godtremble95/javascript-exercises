const convertToCelsius = function(tempOld) {
  const tempNew = (tempOld - 32) * 5 / 9;
  return (tempNew % 1 )? Math.round(tempNew *10) / 10 : tempNew;
};

const convertToFahrenheit = function(tempOld) {
  const tempNew = (tempOld * 9 / 5) + 32;
  return (tempNew % 1 )? Math.round(tempNew *10) / 10 : tempNew;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
