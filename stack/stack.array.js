class Stack {
  constructor() {
    this.items = [];
  }

  push(...elements) {
    this.items.push(...elements);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    while (!this.isEmpty()) {
      this.pop();
    }
  }
}

module.exports = { ArrayStack: Stack };
