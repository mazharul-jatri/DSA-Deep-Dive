import {DoublyLinkedList} from "./DoublyLinkedList";

const list = new DoublyLinkedList<number>();

console.log("Doubly Linked List Demo:");
list.append(10);
list.append(20);
list.prepend(5);
list.printForward();  // Expected: 5 <-> 10 <-> 20 <-> null
list.printBackward(); // Expected: 20 <-> 10 <-> 5 <-> null

console.log("\nDeleting 10 (middle):");
list.delete(10);
list.printForward(); // Expected: 5 <-> 20 <-> null

console.log("\nDeleting 5 (head):");
list.delete(5);
list.printForward(); // Expected: 20 <-> null

console.log("\nDeleting 20 (tail/last):");
list.delete(20);
list.printForward(); // Expected: null

console.log("\nList size:", list.size);
