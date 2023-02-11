import { Injectable } from '@angular/core';
import { AlgorithmsModule } from '../../algorithms.module';
import { MinNumberHeap } from '../../data-structures/heap';

@Injectable({
    providedIn: AlgorithmsModule
})
export class SortingAlgorithmsService {

    constructor() { }

    // O(n^2) - time
    // O(1) - space
    bubbleSort(arr: number[]): number[] {
        for (let i = 0; i < arr.length - 1; i++) {
            let isSwapped = false;
            for (let j = 1; j < arr.length - i; j++) {
                if (arr[j] < arr[j - 1]) {
                    const temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                    isSwapped = true;
                }
            }
            if (!isSwapped) {
                break;
            }
        }
        return arr;
    }

    // O(n^2) - time
    // O(1) - space
    selectionSort(arr: number[]): number[] {
        for (let i = 0; i < arr.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                const temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
        return arr;
    }

    // O(n^2) - time
    // O(1) - space
    insertionSort(arr: number[]): number[] {
        for (let i = 1; i < arr.length; i++) {
            let currentIndex = i;
            while (currentIndex > 0 && arr[currentIndex] < arr[currentIndex - 1]) {
                const temp = arr[currentIndex];
                arr[currentIndex] = arr[currentIndex - 1];
                arr[currentIndex - 1] = temp;
                currentIndex--;
            }
        }
        return arr;
    }

    // O(n * log(n)) - time
    // O(n) - space
    heapSort(nums: number[]): number[] {
        const sortedArr = [];
        const heap = new MinNumberHeap();
        for (let i = 0; i < nums.length; i++) { heap.add(nums[i]); }
        while (!heap.isEmpty()) {
            sortedArr.push( heap.poll() );
        }
        return sortedArr;
    }

    // O(log(n) * n) - time
    // O(n) - space
    mergeSort(arr: number[], tempArr = new Array(arr.length), start = 0, end = arr.length - 1): number[] {
        if (start >= end) {
            return arr;
        }
        const middle = Math.floor((start + end) / 2);
        this.mergeSort(arr, tempArr, start, middle);
        this.mergeSort(arr, tempArr, middle + 1, end);

        let firstPointer = start;
        let secondPointer = middle + 1;
        let index = start;

        while (firstPointer <= middle && secondPointer <= end) {
            if (arr[firstPointer] <= arr[secondPointer]) {
                tempArr[index] = arr[firstPointer];
                firstPointer++;
            }
            else {
                // arr[firstPointer] > arr[secondPointer]
                tempArr[index] = arr[secondPointer];
                secondPointer++;
            }
            index++;
        }
        for (let i = firstPointer;  i <= middle; i++, index++) { tempArr[index] = arr[i]; }
        for (let i = secondPointer; i <= end;    i++, index++) { tempArr[index] = arr[i]; }
        for (let i = start;         i <= end;    i++)          { arr[i] = tempArr[i]; }

        return arr;
    }

    // O(n * log(n)) - time
    // O(log(n)) - space (because of recursion stack keeping in memory)
    quickSort(arr: number[], start = 0, end = arr.length - 1): number[] {
        if (start >= end) {
            return arr;
        }
        let left = start;
        let right = end;
        const middle = Math.floor( (right + left) / 2 );
        const pivotElm = arr[middle];

        while (left <= right) {
            while (arr[left] < pivotElm) {
                left++;
            }
            while (arr[right] > pivotElm) {
                right--;
            }
            if (left <= right) {
                const temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;

                left++;
                right--;
            }
        }
        this.quickSort(arr, start, left - 1);
        this.quickSort(arr, left, end);
        
        return arr;
    }
}
