class StackError extends Error {
  constructor(msg: string) {
    super(msg);
    Object.setPrototypeOf(this, StackError.prototype);
  }
}

class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T {
    if (this.isEmpty()) {
      throw new StackError("Can't pop the item. Stack is empty");
    }
    return this.items.pop();
  }

  peek(): T {
    if (this.isEmpty()) {
      throw new StackError("Can't peek the item. Stack is empty");
    }
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

console.log(numberStack.pop());
console.log(numberStack.peek());
console.log(numberStack.size());

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");

console.log(stringStack.pop());
console.log(stringStack.peek());
console.log(stringStack.size());
