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
