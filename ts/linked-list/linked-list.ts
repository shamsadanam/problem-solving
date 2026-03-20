class Node {
  value: number;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: Node | null;

  constructor() {
    this.head = null;
  }

  append(value: number): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current: Node = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  prepend(value: number): void {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  print(): void {
    let current: Node | null = this.head;
    let result: string = "";

    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }

    console.log(result + "null");
  }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.prepend(5);

list.print();
