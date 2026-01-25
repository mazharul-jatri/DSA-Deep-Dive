import {Node} from "./Node";

/**
 * A Singly Circular Linked List implementation.
 * The last node points back to the head node.
 */
export class CircularLinkedList<T> {
    head: Node<T> | null = null;
    tail: Node<T> | null = null;
    private _size: number = 0;

    /**
     * Adds a value to the end of the list.
     * Time Complexity: O(1)
     */
    append(value: T): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head; // Point to itself
        } else {
            if (this.tail) {
                this.tail.next = newNode;
                this.tail = newNode;
                this.tail.next = this.head; // Close the circle
            }
        }
        this._size++;
    }

    /**
     * Adds a value to the beginning of the list.
     * Time Complexity: O(1)
     */
    prepend(value: T): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            if (this.tail) {
                this.tail.next = this.head; // Update tail's next to new head
            }
        }
        this._size++;
    }

    /**
     * Deletes the first occurrence of a value.
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    delete(value: T): void {
        if (!this.head) return;

        let current = this.head;
        let prev: Node<T> | null = this.tail;

        do {
            if (current.value === value) {
                if (this._size === 1) {
                    this.head = null;
                    this.tail = null;
                } else {
                    if (prev) prev.next = current.next;
                    if (current === this.head) {
                        this.head = current.next;
                    }
                    if (current === this.tail) {
                        this.tail = prev;
                    }
                }
                this._size--;
                return;
            }
            prev = current;
            current = current.next!;
        } while (current !== this.head);
    }

    /**
     * Inserts a value at a specific index.
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    insertAt(index: number, value: T): void {
        if (index < 0 || index > this._size) {
            throw new Error("Index out of bounds");
        }

        if (index === 0) {
            this.prepend(value);
            return;
        }

        if (index === this._size) {
            this.append(value);
            return;
        }

        const newNode = new Node(value);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current!.next;
        }

        newNode.next = current!.next;
        current!.next = newNode;
        this._size++;
    }

    /**
     * Deletes a node at a specific index.
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    deleteAt(index: number): T | null {
        if (index < 0 || index >= this._size) {
            return null;
        }

        if (index === 0) {
            if (!this.head) return null;
            const value = this.head.value;
            if (this._size === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                if (this.tail) {
                    this.tail.next = this.head;
                }
            }
            this._size--;
            return value;
        }

        let current = this.head;
        let prev: Node<T> | null = null;
        for (let i = 0; i < index; i++) {
            prev = current;
            current = current!.next;
        }

        if (current) {
            const value = current.value;
            if (prev) {
                prev.next = current.next;
            }
            if (current === this.tail) {
                this.tail = prev;
            }
            this._size--;
            return value;
        }

        return null;
    }

    /**
     * Prints the list elements in order.
     * We limit it to avoid infinite loops if the circle is broken.
     */
    print(): void {
        if (!this.head) {
            console.log("Empty List");
            return;
        }
        let current = this.head;
        let output: string[] = [];
        let count = 0;
        do {
            output.push(String(current.value));
            current = current.next!;
            count++;
        } while (current !== this.head && count < this._size);
        
        console.log(output.join(' -> ') + ' -> (back to head: ' + this.head.value + ')');
    }

    get size(): number {
        return this._size;
    }
}
