import { Injectable } from '@angular/core';
import { AlgorithmsModule } from '../../algorithms.module';

@Injectable({
    providedIn: AlgorithmsModule
})
export class ArrayAlgorithmsService {

    constructor() { }

    // https://leetcode.com/problems/contains-duplicate/
    // Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
    // O(n) - time
    // O(n) - space
    containsDuplicate(nums: number[]): boolean {
        const cache: {[key: number]: boolean} = {};
        for (const n of nums) {
            if (cache[n]) {
                return true;
            }
            cache[n] = true;
        }
        return false;
    }
}
