import {Node} from "./Node";

export class LinkedList<T> {
    head: Node<T> | null = null
    __size: number = 0;

    append(arg: T): void {
        const newNode = new Node(arg)
        if (this.isEmpty()){
            this.head = newNode;
            return;
        }
        let current = this.head
        while (current.next){
            current = current.next
        }
        current.next = newNode
        return;
    }

    prepend(arg: T): void {
        const newNode = new Node(arg)
        if (this.isEmpty()){
            this.head = newNode
            return;
        }
        let currentHead = this.head
        this.head = newNode
        newNode.next = currentHead
        return;
    }

    print(): void {
        if (this.isEmpty()){
            console.log('List is empty')
        }
        const outputContainer = []
        let current = this.head
        while (current){
            outputContainer.push(current.value)
            current = current.next
        }
        const outputString = outputContainer.join(' -> ');

        console.log(outputString)

    }

    isEmpty(): boolean {
        return this.head === null;
    }
}