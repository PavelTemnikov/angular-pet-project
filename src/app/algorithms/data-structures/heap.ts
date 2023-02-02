export class MinNumberHeap {
    private capacity = 10;
    private length = 0;
    private items: number[] = new Array(10);

    public leftChildIndex (index: number): number { return 2 * index + 1; }
    public rightChildIndex(index: number): number { return 2 * index + 2; }
    public parentIndex    (index: number): number { return Math.floor( (index - 1) / 2 ); }

    public hasLeftChild (index: number): boolean { return this.leftChildIndex(index) < this.length; }
    public hasRightChild(index: number): boolean { return this.rightChildIndex(index) < this.length; }
    public hasParent    (index: number): boolean { return this.parentIndex(index) >= 0; }

    public leftChild (index: number): number { return this.items[ this.leftChildIndex(index) ]; }
    public rightChild(index: number): number { return this.items[ this.rightChildIndex(index) ]; }
    public parent    (index: number): number { return this.items[ this.parentIndex(index) ]; }

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
        return this.items[0];
    }
}