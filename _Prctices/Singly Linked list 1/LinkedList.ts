import {Node} from "./Node";

export class LinkedList<T> {
    head: Node<T> | null = null;
    private _size: number = 0;

    append(arg: T) {
        const node = new Node(arg)
        if (!this.head) {
            this.head = node
            this._size++
            return
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = node
        this._size++
    }

    isEmpty(): boolean {
        return this.head === null;
    }

    prepend(arg: T) {
        const newNode = new Node(arg)
        newNode.next = this.head
        this.head = newNode
        this._size++
    }
    print(){
        const output = [];
        let current = this.head
        while (current.next){
            output.push(current.value)
            current = current.next
        }
        console.log(output.join(' -> ') + ' -> null');
    }

    find(arg: T): Node<T> {
        if (this.head === null) {
            return null;
        }
        let current = this.head
        while (current.next){
            if (current.value === arg){
                return current;
            }
            current = current.next
        }
    }
}