const { ObjectStack } = require("./stack.object");

/**
 *
 * @param {Number} number
 * @param {Number} base
 */
function decimalBaseConversor(number, base) {
  const stack = new ObjectStack();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const converted = [];

  if (!(base >= 2 && base <= 36)) return "";

  while (number > 0) {
    const rest = Math.floor(number % base);
    console.log(`up rest (${base}) => `, rest);
    stack.push(rest);
    number = Math.floor(number / base);
  }

  while (!stack.isEmpty()) {
    const rest = digits[stack.pop()];
    console.log(`down rest (${base}) => `, rest);
    converted.push(rest);
  }

  return converted.join("");
}

module.exports = { decimalBaseConversor };
