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

    // https://leetcode.com/problems/missing-number/
    // Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
    // Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

    // Constraints:
    //     n == nums.length
    //     1 <= n <= 10^4
    //     0 <= nums[i] <= n
    //     All the numbers of nums are unique.

    // O(n) - time
    // O(n) - space
    missingNumber1(nums: number[]): number {
        let cache: boolean[] = new Array(nums.length + 1);
        for (let i = 0; i < nums.length; i++) {
            cache[nums[i]] = true;
        }
        for (let i = 0; i < cache.length; i++) {
           if (!cache[i]) {
               return i;
           }
        }
        return -1;
    }

    // O(n) - time
    // O(1) - space
    missingNumber2(nums: number[]): number {
        const hash = (value: number) => -1 * (value + 1);
        const unhash = (value: number) => Math.abs(value) - 1;
        const isHashed = (value: number) => value < 0;

        for (let i = 0; i < nums.length; i++) {
            let value = isHashed(nums[i]) ? unhash(nums[i]) : nums[i]; // in nums[i] can be hashed value
            if (nums[value] !== undefined && !isHashed(nums[value])) {
                nums[value] = hash(nums[value]); // use value as index to mark that it appears in nums
            }
        }
        for (let i = 0; i < nums.length; i++) {
            if (!isHashed(nums[i])) {
                return i;
            }
        }
        return nums.length;
    }

    // O(n) - time
    // O(1) - space
    missingNumber3(nums: number[]): number {
        // to find missing value will do next: (sum of indexes + length) - sum of values
        let result = nums.length;
        for (let i = 0; i < nums.length; i++) {
            result += (i - nums[i]);
        }
        return result;
    }

    }
}
