class Queue {
  #count = 0;
  #lowestCount = 0;
  #items = {};

  constructor() {}

  enqueue(element) {
    this.#items[this.#count] = element;
    this.#count++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const result = this.#items[this.#lowestCount];
    delete this.#items[this.#lowestCount];
    this.#lowestCount++;
    return result;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.#items[this.#lowestCount];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.#count - this.#lowestCount;
  }

  clear() {
    this.#count = 0;
    this.#lowestCount = 0;
    this.#items = {};
  }
}

module.exports = { Queue };
