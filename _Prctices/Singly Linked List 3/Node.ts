export class Node<T> {
    data: T;
    next: Node<T> | null

    constructor(value: T) {
        this.data = value
        this.next = null
    }
}