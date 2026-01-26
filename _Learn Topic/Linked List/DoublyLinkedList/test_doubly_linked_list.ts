import { DoublyLinkedList } from "./DoublyLinkedList";

const dll = new DoublyLinkedList<number>();

console.log("--- Testing Append/Prepend ---");
dll.append(10);
dll.append(30);
dll.prepend(5);
dll.printForward(); // Expected: Forward: 5 <-> 10 <-> 30 <-> null

console.log("\n--- Testing insertAt ---");
dll.insertAt(1, 15); // Insert in middle
console.log("After insertAt(1, 15):");
dll.printForward(); // Expected: Forward: 5 <-> 15 <-> 10 <-> 30 <-> null

dll.insertAt(4, 40); // Insert at end
console.log("After insertAt(4, 40):");
dll.printForward(); // Expected: Forward: 5 <-> 15 <-> 10 <-> 30 <-> 40 <-> null

dll.insertAt(0, 1); // Insert at beginning
console.log("After insertAt(0, 1):");
dll.printForward(); // Expected: Forward: 1 <-> 5 <-> 15 <-> 10 <-> 30 <-> 40 <-> null

console.log("\n--- Testing deleteAt ---");
const deletedValue = dll.deleteAt(2); // Delete middle (15)
console.log(`Deleted value at index 2: ${deletedValue}`);
dll.printForward(); // Expected: Forward: 1 <-> 5 <-> 10 <-> 30 <-> 40 <-> null

dll.deleteAt(0); // Delete head (1)
console.log("After deleteAt(0):");
dll.printForward(); // Expected: Forward: 5 <-> 10 <-> 30 <-> 40 <-> null

dll.deleteAt(3); // Delete tail (40)
console.log("After deleteAt(3):");
dll.printForward(); // Expected: Forward: 5 <-> 10 <-> 30 <-> null

console.log("\n--- Testing Backward traversal ---");
dll.printBackward(); // Expected: Backward: 30 <-> 10 <-> 5 <-> null
