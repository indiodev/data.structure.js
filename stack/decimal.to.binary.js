const { ObjectStack } = require("./stack.object");

/**
 * @param {Number} number
 * @return {String}
 */
function decimalToBinary(number) {
  const stack = new ObjectStack();
  const binary = [];

  while (number > 0) {
    const rest = Math.floor(number % 2);
    console.log("up rest (binary) => ", rest);
    stack.push(rest);
    number = Math.floor(number / 2);
  }

  while (!stack.isEmpty()) {
    const item = stack.pop();
    console.log("down rest (binary) => ", item);
    binary.push(item);
  }

  return binary.join("");
}

module.exports = { decimalToBinary };
