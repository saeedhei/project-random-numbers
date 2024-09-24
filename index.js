const random = require("random");

const generateRandomNumbers = (n, minValue, maxValue) => {
  return Array.from({ length: n }, () => random.int(minValue, maxValue));
};

module.exports = generateRandomNumbers;
