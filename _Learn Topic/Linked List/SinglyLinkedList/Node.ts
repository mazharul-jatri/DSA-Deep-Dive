/**
 * Represents a single node in a linked list.
 * A node contains a value and a reference (pointer) to the next node in the list.
 */
export class Node<T> {
    /** The data stored in this node */
    value: T;
    /** Reference to the next node, or null if it's the last node */
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}