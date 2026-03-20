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

const createNode = (value: number) => ({ value, next: null });

const createLinkedList = () => {
  let head = null;

  const append = (value: number) => {};
};
