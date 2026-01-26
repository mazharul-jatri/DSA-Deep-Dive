import {DoublyNode} from "./Node";

/**
 * A Doubly Linked List implementation.
 * Each node points to both the next and the previous node, 
 * allowing for traversal in both directions.
 */
export class DoublyLinkedList<T> {
    head: DoublyNode<T> | null = null;
    tail: DoublyNode<T> | null = null;
    private _size: number = 0;

    /**
     * Adds a new value to the end of the list.
     * Time Complexity: O(1) - we keep a reference to the tail.
     */
    append(value: T): void {
        const newNode = new DoublyNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (this.tail) {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
        }
        this._size++;
    }

    /**
     * Adds a new value to the beginning of the list.
     * Time Complexity: O(1)
     */
    prepend(value: T): void {
        const newNode = new DoublyNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
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

        let current: DoublyNode<T> | null = this.head;

        while (current) {
            if (current.value === value) {
                if (current === this.head) {
                    this.head = current.next;
                    if (this.head) {
                        this.head.prev = null;
                    } else {
                        this.tail = null;
                    }
                } else if (current === this.tail) {
                    this.tail = current.prev;
                    if (this.tail) {
                        this.tail.next = null;
                    } else {
                        this.head = null;
                    }
                } else {
                    // Node is in the middle
                    if (current.prev) current.prev.next = current.next;
                    if (current.next) current.next.prev = current.prev;
                }
                this._size--;
                return;
            }
            current = current.next;
        }
    }

    /**
     * Inserts a value at a specific index.
     * Time Complexity: O(n) - we might need to traverse to the index.
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

        const newNode = new DoublyNode(value);
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.next;
        }

        // Insert before current
        newNode.next = current;
        newNode.prev = current!.prev;
        if (current!.prev) {
            current!.prev.next = newNode;
        }
        current!.prev = newNode;

        this._size++;
    }

    /**
     * Deletes a node at a specific index.
     * Time Complexity: O(n) - we might need to traverse to the index.
     * Space Complexity: O(1)
     */
    deleteAt(index: number): T | null {
        if (index < 0 || index >= this._size) {
            return null;
        }

        let current = this.head;

        if (index === 0) {
            if (this.head) {
                const value = this.head.value;
                this.head = this.head.next;
                if (this.head) {
                    this.head.prev = null;
                } else {
                    this.tail = null;
                }
                this._size--;
                return value;
            }
            return null;
        }

        if (index === this._size - 1) {
            if (this.tail) {
                const value = this.tail.value;
                this.tail = this.tail.prev;
                if (this.tail) {
                    this.tail.next = null;
                } else {
                    this.head = null;
                }
                this._size--;
                return value;
            }
            return null;
        }

        for (let i = 0; i < index; i++) {
            current = current!.next;
        }

        if (current) {
            if (current.prev) current.prev.next = current.next;
            if (current.next) current.next.prev = current.prev;
            this._size--;
            return current.value;
        }

        return null;
    }

    /**
     * Prints the list from head to tail.
     */
    printForward(): void {
        let current = this.head;
        let output: string[] = [];
        while (current) {
            output.push(String(current.value));
            current = current.next;
        }
        console.log("Forward: " + output.join(' <-> ') + ' <-> null');
    }

    /**
     * Prints the list from tail to head.
     */
    printBackward(): void {
        let current = this.tail;
        let output: string[] = [];
        while (current) {
            output.push(String(current.value));
            current = current.prev;
        }
        console.log("Backward: " + output.join(' <-> ') + ' <-> null');
    }

    get size(): number {
        return this._size;
    }
}
