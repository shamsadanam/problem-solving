type Node = {
  value: number;
  next: Node | null;
};

type LinkedList = {
  head: Node | null;
  append: (value: number) => void;
  prepend: (value: number) => void;
  print: () => void;
};

function createNode(value: number): Node {
  return { value, next: null };
}

function createLinkedList(): LinkedList {
  let head: Node | null = null;

  function append(value: number): void {
    const newNode = createNode(value);

    if (!head) {
      head = newNode;
      return;
    }

    let current: Node = head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  function prepend(value: number): void {
    const newNode = createNode(value);
    newNode.next = head;
    head = newNode;
  }

  function print(): void {
    let current: Node | null = head;
    let result: string = "";

    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }

    console.log(result + "null");
  }

  return { head, append, prepend, print };
}

const list = createLinkedList();

list.append(10);
list.append(20);
list.append(30);
list.prepend(5);

list.print();
