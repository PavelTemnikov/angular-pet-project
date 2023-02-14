export class MinNumberHeap {
    private capacity = 10;
    private length = 0;
    private items: (number | undefined)[] = new Array(10);

    private leftChildIndex (index: number): number { return 2 * index + 1; }
    private rightChildIndex(index: number): number { return 2 * index + 2; }
    private parentIndex    (index: number): number { return Math.floor( (index - 1) / 2 ); }

    private hasLeftChild (index: number): boolean { return this.leftChildIndex(index) < this.length; }
    private hasRightChild(index: number): boolean { return this.rightChildIndex(index) < this.length; }
    private hasParent    (index: number): boolean { return this.parentIndex(index) >= 0; }

    private leftChild (index: number): number | undefined { return this.items[ this.leftChildIndex(index) ]; }
    private rightChild(index: number): number | undefined { return this.items[ this.rightChildIndex(index) ]; }
    private parent    (index: number): number | undefined { return this.items[ this.parentIndex(index) ]; }

    private swap(indexOne: number, indexTwo: number): void {
        const temp = this.items[indexOne];
        this.items[indexOne] = this.items[indexTwo];
        this.items[indexTwo] = temp;
    }

    private ensureExtraCapacity(): void {
        if (this.length === this.capacity) {
            const tempItems = this.items;
            this.capacity *= 2;
            this.items = new Array(this.capacity);
            for (let i = 0; i< tempItems.length; i++) { this.items[i] = tempItems[i]; }
        }
    }

    private heapifyUp(): void {
        if (this.length === 0) {
            return;
        }
        let index = this.length - 1;
        while (this.hasParent(index) && (this.parent(index) as number) > (this.items[index] as number)) {
            this.swap(this.parentIndex(index), index);
            index = this.parentIndex(index);
        }
    }

    private heapifyDown(): void {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChaildIndex = this.leftChildIndex(index);
            if (this.hasRightChild(index) && (this.rightChild(index) as number) < (this.leftChild(index) as number)) {
                smallerChaildIndex = this.rightChildIndex(index);
            }
            if ((this.items[index] as number) < (this.items[smallerChaildIndex] as number)) {
                break;
            }
            this.swap(smallerChaildIndex, index);
            index = smallerChaildIndex;
        }
    }

    public peek(): number {
        if (this.length === 0) throw Error('can\'t peek item as heap is empty');
        return this.items[0] as number;
    }

    public poll(): number {
        if (this.length === 0) throw Error('can\'t poll item as heap is empty');
        const item = this.items[0] as number;

        this.items[0] = this.items[this.length - 1];
        this.items[this.length - 1] = undefined;
        this.length -= 1;

        this.heapifyDown();

        return item;
    }

    public add(item: number): void {
        this.ensureExtraCapacity();
        this.items[this.length] = item;
        this.length += 1;
        this.heapifyUp();
    }

    public isEmpty(): boolean { return this.length === 0; }
}