const { decimalBaseConversor } = require("./stack/decimal.base.conversor");
const { decimalToBinary } = require("./stack/decimal.to.binary");
const { ArrayStack } = require("./stack/stack.array");
const { ObjectStack } = require("./stack/stack.object");

const object_stack = new ObjectStack();

object_stack.push(1);
object_stack.push(5);
object_stack.push(3);
object_stack.push(2);

while (!object_stack.isEmpty()) {
  console.log("removed element from object stack => ", object_stack.pop());
}

const array_stack = new ArrayStack();

array_stack.push(10);
array_stack.push(2);
array_stack.push(3);
array_stack.push(4);

while (!array_stack.isEmpty()) {
  console.log("removed element from array stack => ", array_stack.pop());
}

console.log("decimal => ", 1000, " binary => ", decimalToBinary(1000));
console.log(
  "decimal => ",
  100345,
  " base 16 => ",
  decimalBaseConversor(100345, 16)
);
