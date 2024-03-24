const { ArrayStack } = require("./stack/stack.array");
const { ObjectStack } = require("./stack/stack.object");

const object_stack = new ObjectStack();

object_stack.push(1, 2, 3, 4, 5);

console.log("initial object stack => ", object_stack.items);

while (!object_stack.isEmpty()) {
  console.log(
    "removed element from object stack => ",
    object_stack.pop(),
    ", current object stack => ",
    object_stack.items
  );
}

const array_stack = new ArrayStack();

array_stack.push(1, 2, 3, 4, 5);

console.log("\ninitial array stack => ", array_stack.items);

while (!array_stack.isEmpty()) {
  console.log(
    "removed element from array stack => ",
    array_stack.pop(),
    ", current array stack => ",
    array_stack.items
  );
}
