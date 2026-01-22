import {LinkedList} from "./LinkedList";

const list = new LinkedList<number>();

console.log("Adding elements:");
list.append(10);
list.append(20);
list.prepend(5);
list.print(); // Expected: 5 -> 10 -> 20 -> null

console.log("\nDeleting 20:");
list.delete(20);
list.print(); // Expected: 5 -> 10 -> null

console.log("\nDeleting 5 (head):");
list.delete(5);
list.print(); // Expected: 10 -> null

console.log("\nList size:", list.size); // Expected: 1

console.log("\nFinding 10:");
const foundNode = list.find(10);
console.log(foundNode ? `Found node with value: ${foundNode.value}` : "Not found");

console.log("\nFinding 100:");
const notFoundNode = list.find(100);
console.log(notFoundNode ? `Found node with value: ${notFoundNode.value}` : "Not found");

