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
                if (arr[j - 1] > arr[j]) {
                    const temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
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
    selectionSort(nums: number[]): number[] {
        for (let i = 0; i < nums.length - 1; i++) {
            let minIndex = i;

            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] < nums[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                [ nums[i], nums[minIndex] ] = [ nums[minIndex], nums[i] ];
            }
        }
        return nums;
    }

    // O(n^2) - time
    // O(1) - space
    insertionSort(nums: number[]): number[] {
        for (let i = 1; i < nums.length; i++) {
            let currentIndex = i;

            while (nums[currentIndex - 1] !== undefined && nums[currentIndex] < nums[currentIndex - 1]) {
                [ nums[currentIndex], nums[currentIndex - 1] ] = [ nums[currentIndex - 1], nums[currentIndex] ];
                currentIndex--;
            }
        }
        return nums;
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
    mergeSort(arr: number[], tempArr: number[] = [], start = 0, end = arr.length - 1): number[] {
        if (start >= end) {
            return arr;
        }
        const middle = Math.floor( (start + end) / 2 );
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
        const middleIndex = Math.floor( (right + left) / 2 );
        const pivotElm = arr[middleIndex];

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
