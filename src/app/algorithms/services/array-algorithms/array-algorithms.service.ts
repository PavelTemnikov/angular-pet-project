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

    // https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
    // Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
    // Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

    // Constraints:
    //     n == nums.length
    //     1 <= n <= 10^5
    //     1 <= nums[i] <= n

    // O(n) - time
    // O(n) - space
    findAllNumbersDisappearedInArray1(nums: number[]): number[] {
        const result: number[] = [];
        let cache: boolean[] = new Array(nums.length + 1);
        for (let i = 0; i < nums.length; i++) {
            cache[nums[i]] = true;
        }
        for (let i = 1; i < cache.length; i++) {
            if (!cache[i]) {
                result.push(i);
            }
        }
        return result;
    }

    // O(n) - time
    // O(1) - space
    findAllNumbersDisappearedInArray2(nums: number[]): number[] {
        const hash = (value: number) => -1 * value;
        const unHash = (value: number) => Math.abs(value);
        const isHashed = (value: number) => value < 0;

        let result: number[] = [];
        for (let i = 0; i < nums.length; i++) {
            const value = isHashed(nums[i]) ? unHash(nums[i]) : nums[i];
            if (!isHashed(nums[value - 1])) {
                nums[value - 1] = hash(nums[value - 1]);
            }
        }
        for (let i = 0; i < nums.length; i++) {
            if (!isHashed(nums[i])) {
                result.push(i + 1);
            }
        }
        return result;
    }

    // https://leetcode.com/problems/single-number/
    // Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
    // You must implement a solution with a linear runtime complexity and use only constant extra space.

    // Constraints:
    //     1 <= nums.length <= 3 * 10^4
    //     -3 * 10^4 <= nums[i] <= 3 * 10^4
    //     Each element in the array appears twice except for one element which appears only once.

    // Input: nums = [2,2,1]; Output: 1
    // Input: nums = [4,1,2,1,2]; Output: 4
    // Input: nums = [1]; Output: 1

    // O(n) - time
    // O(1) - space
    singleNumber1(nums: number[]): number {
        let result = nums[0];
        for (let i = 1; i < nums.length; i++) {
            result ^= nums[i];
        }
        return result;
    };

    // O(n) - time
    // O(n) - space
    singleNumber2(nums: number[]): number {
        const cache: {[key: string]: number} = {};
        for (let i = 0; i < nums.length; i++) {
            if (cache[nums[i]] === undefined) {
                cache[nums[i]] = 0;
            }
            cache[nums[i]] += 1;
        }
        for (let prop in cache) {
            if (cache[prop] === 1) {
                return Number(prop);
            }
        }
        return -1;
    }
}
