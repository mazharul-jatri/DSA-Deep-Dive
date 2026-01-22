/**
 * Represents a node in a doubly linked list.
 * Contains a value, and references to both the next and previous nodes.
 */
export class DoublyNode<T> {
    value: T;
    next: DoublyNode<T> | null = null;
    prev: DoublyNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}
