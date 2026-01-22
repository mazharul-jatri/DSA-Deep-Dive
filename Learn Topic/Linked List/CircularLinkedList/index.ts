import {CircularLinkedList} from "./CircularLinkedList";

const list = new CircularLinkedList<number>();

console.log("Circular Linked List Demo:");
list.append(10);
list.append(20);
list.prepend(5);
list.print(); // Expected: 5 -> 10 -> 20 -> (back to head: 5)

console.log("\nDeleting 10 (middle):");
list.delete(10);
list.print(); // Expected: 5 -> 20 -> (back to head: 5)

console.log("\nDeleting 5 (head):");
list.delete(5);
list.print(); // Expected: 20 -> (back to head: 20)

console.log("\nDeleting 20 (last element):");
list.delete(20);
list.print(); // Expected: Empty List

console.log("\nList size:", list.size);
