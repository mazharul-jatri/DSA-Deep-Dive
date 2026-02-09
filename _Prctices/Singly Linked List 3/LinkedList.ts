import {Node} from "./Node";

export class LinkedList<T> {
    head: Node<T> | null = null
    private _size: number = 0

    append(value: T) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            return
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = node
        return;
    }

    print(){
        const output = [];
        let current = this.head
        while (current.next){
            output.push(current.data)
            current = current.next
        }
        output.push(current.data)
        console.log(output.join(' -> ') + ' -> null');
    }


    private isEmpty(): boolean {
        return this.head === null;
    }

    private getSize(): number {
        return this._size;
    }

}