export class MinNumberHeap {
    public length = 0;
    private capacity: number;
    private storage: (number | undefined)[];

    constructor(capacity = 10) {
        this.capacity = capacity;
        this.storage = new Array(this.capacity);
    }


    public add(value: number): void {
        this.ensureCapacity();
        this.storage[this.length] = value;
        this.length += 1;
        this.heapifyUp();
    }

    public poll(): number | null {
        if (this.length === 0) {
            return null;
        }
        const firstValue = this.storage[0] as number;

        this.storage[0] = this.storage[this.length - 1];
        this.storage[this.length - 1] = undefined;
        this.length -= 1;
        this.heapifyDown();

        return firstValue;
    }

    public isEmpty(): boolean { return this.length === 0; }

    private leftChildIndex (index: number): number { return 2 * index + 1; }
    private rightChildIndex(index: number): number { return 2 * index + 2; }
    private parentIndex    (index: number): number { return Math.floor( (index - 1) / 2 ); }

    private hasLeftChild (index: number): boolean { return this.leftChildIndex(index) < this.length; }
    private hasRightChild(index: number): boolean { return this.rightChildIndex(index) < this.length; }
    private hasParent    (index: number): boolean { return this.parentIndex(index) >= 0; }

    private leftChild (index: number): number | undefined { return this.storage[this.leftChildIndex(index)]; }
    private rightChild(index: number): number | undefined { return this.storage[this.rightChildIndex(index)]; }
    private parent    (index: number): number | undefined { return this.storage[this.parentIndex(index)]; }

    private ensureCapacity(): void {
        if (this.length < this.capacity) {
            return;
        }
        const tempStorage = this.storage;
        this.capacity *= 2;
        this.storage = new Array(this.capacity);
        for (let i = 0; i < this.length; i++) {
            this.storage[i] = tempStorage[i];
        }
    }

    private heapifyUp(): void {
        if (this.length === 0) {
            return;
        }
        let index = this.length - 1;
        while (this.hasParent(index) && (this.parent(index) as number) > (this.storage[index] as number)) {
            this.swap(this.parentIndex(index), index);
            index = this.parentIndex(index);
        }
    }

    private heapifyDown(): void {
        if (this.length === 0) {
            return;
        }
        let index = 0
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.leftChildIndex(index) as number;
            if (this.hasRightChild(index) && (this.rightChild(index) as number) < (this.leftChild(index) as number)) {
                smallerChildIndex = this.rightChildIndex(index);
            }
            if ((this.storage[index] as number) <= (this.storage[smallerChildIndex] as number)) {
                break;
            }
            this.swap(smallerChildIndex, index);
            index = smallerChildIndex;
        }
    }

    private swap(indexOne: number, indexTwo: number): void {
        const temp = this.storage[indexOne];
        this.storage[indexOne] = this.storage[indexTwo];
        this.storage[indexTwo] = temp;
    }
}