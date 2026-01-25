import {Node} from "./Node";

/**
 * A Singly Linked List implementation.
 * A linked list is a linear data structure
 * where elements are not stored in contiguous memory.
 * Each element is a "Node" that points to the next one.
 */
export class LinkedList<T> {
    /** The first node in the list */
    head: Node<T> | null = null;
    /** Keeps track of the number of nodes in the list for O(1) size access */
    private _size: number = 0;

    /**
     * Adds a new value to the end of the list.
     * Time Complexity: O(n) - we must traverse the entire list to find the end.
     * Space Complexity: O(1)
     */
    append(value: T): void {
        const newNode = new Node(value);

        // If the list is empty, the new node becomes the head
        if (!this.head) {
            this.head = newNode;
            this._size++;
            return;
        }

        // Otherwise, traverse to the last node
        let current: Node<T> = this.head;
        while (current.next) {
            current = current.next;
        }

        // Link the last node's 'next' to the new node
        current.next = newNode;
        this._size++;
    }

    /**
     * Adds a new value to the beginning of the list.
     * Time Complexity: O(1) - constant time operation.
     * Space Complexity: O(1)
     */
    prepend(value: T): void {
        const newNode = new Node(value);

        // Point the new node to the current head
        newNode.next = this.head;

        // Update the head to be the new node
        this.head = newNode;
        this._size++;
    }

    /**
     * Deletes the first occurrence of a value from the list.
     * Time Complexity: O(n) - worst case we traverse the whole list.
     * Space Complexity: O(1)
     */
    delete(value: T): void {
        if (!this.head) return;

        // If the head itself contains the value to be deleted
        if (this.head.value === value) {
            this.head = this.head.next;
            this._size--;
            return;
        }

        // Otherwise, find the node before the one we want to delete
        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                // Skip the node containing the value
                current.next = current.next.next;
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
     * Time Complexity: O(n) - we might need to traverse to the index.
     * Space Complexity: O(1)
     */
    deleteAt(index: number): T | null {
        if (index < 0 || index >= this._size) {
            return null;
        }

        if (index === 0) {
            if (this.head) {
                const value = this.head.value;
                this.head = this.head.next;
                this._size--;
                return value;
            }
            return null;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current!.next;
        }

        const deletedNode = current!.next;
        if (deletedNode) {
            current!.next = deletedNode.next;
            this._size--;
            return deletedNode.value;
        }

        return null;
    }

    /**
     * Finds a node by its value.
     * @returns The node if found, otherwise null.
     */
    find(value: T): Node<T> | null {
        let current = this.head;
        while (current) {
            if (current.value === value) return current;
            current = current.next;
        }
        return null;
    }

    /**
     * Returns the current number of nodes in the list.
     */
    get size(): number {
        return this._size;
    }

    /**
     * Checks if the list is empty.
     */
    isEmpty(): boolean {
        return this.head === null;
    }

    /**
     * Prints the list in a human-readable format.
     */
    print(): void {
        let current = this.head;
        let output: string[] = [];

        while (current) {
            output.push(String(current.value));
            current = current.next;
        }
        console.log(output.join(' -> ') + ' -> null');
    }
}