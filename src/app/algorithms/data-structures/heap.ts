export class MinNumberHeap {
    private capacity = 10;
    private length = 0;
    private items: (number | undefined)[] = new Array(10);

    public leftChildIndex (index: number): number { return 2 * index + 1; }
    public rightChildIndex(index: number): number { return 2 * index + 2; }
    public parentIndex    (index: number): number { return Math.floor( (index - 1) / 2 ); }

    public hasLeftChild (index: number): boolean { return this.leftChildIndex(index) < this.length; }
    public hasRightChild(index: number): boolean { return this.rightChildIndex(index) < this.length; }
    public hasParent    (index: number): boolean { return this.parentIndex(index) >= 0; }

    public leftChild (index: number): number | undefined { return this.items[ this.leftChildIndex(index) ]; }
    public rightChild(index: number): number | undefined { return this.items[ this.rightChildIndex(index) ]; }
    public parent    (index: number): number | undefined { return this.items[ this.parentIndex(index) ]; }

    private swap(indexOne: number, indexTwo: number): void {
        [ this.items[indexOne], this.items[indexTwo] ] = [ this.items[indexTwo], this.items[indexOne] ];
    }

    private ensureExtraCapacity(): void {
        if (this.length === this.capacity) {
            const tempItems = this.items;
            this.capacity *= 2;
            this.items = new Array(this.capacity);
            tempItems.forEach((item, i) => this.items[i] = item);
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

    public heapifyUp(): void {
        if (this.length === 0) {
            return;
        }
        let index = this.length - 1;
        while (this.hasParent(index) && (this.parent(index) as number) > (this.items[index] as number)) {
            this.swap(this.parentIndex(index), index);
            index = this.parentIndex(index);
        }
    }

    public heapifyDown(): void {
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
}