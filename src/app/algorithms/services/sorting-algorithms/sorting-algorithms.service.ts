import { Injectable } from '@angular/core';
import { AlgorithmsModule } from '../../algorithms.module';

@Injectable({
    providedIn: AlgorithmsModule
})
export class SortingAlgorithmsService {

    constructor() { }

    // O(n^2) - time
    // O(1) - space
    bubbleSort(nums: number[]): number[] {
        let swapped = false;
        for (let i = 1; i < nums.length; i++) {
            for (let j = 0; j < nums.length - i; j++) {
                if (nums[j] > nums[j + 1]) {
                    [ nums[j], nums[j + 1] ] = [ nums[j + 1], nums[j] ];
                    swapped = true;
                }
            }
            if (!swapped) {
                break;
            }
        }
        return nums;
    }
}
