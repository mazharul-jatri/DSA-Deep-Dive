/**
 * Represents a node in a circular linked list.
 */
export class Node<T> {
    value: T;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}
