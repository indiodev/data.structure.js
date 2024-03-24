class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(...elements) {
    for (let element of elements) {
      this.items[this.count] = element;
      this.count++;
    }
    console.log(this.items);
  }

  pop() {
    if (this.isEmpty()) return undefined;
    const result = this.peek();
    delete this.peek();
    this.count--;
    return result;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    while (!this.isEmpty()) {
      this.pop();
    }
  }

  size() {
    return this.count;
  }
}

module.exports = { ObjectStack: Stack };
