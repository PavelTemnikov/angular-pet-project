import { ArrayAlgorithmsService } from './array-algorithms.service';

describe('ArrayAlgorithmsService', () => {
    let service: ArrayAlgorithmsService;

    beforeEach(() => {
        service = new ArrayAlgorithmsService();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('containsDuplicate()', () => {
        let nums = [1,2,3,1];
        expect(service.containsDuplicate(nums)).toBeTrue();

        nums = [1,2,3,4];
        expect(service.containsDuplicate(nums)).toBeFalse();

        nums = [1,1,1,3,3,4,3,2,4,2];
        expect(service.containsDuplicate(nums)).toBeTrue();
    });

    it('missingNumber1()', () => {
        let nums = [3,0,1];
        expect(service.missingNumber1(nums)).toBe(2);

        nums = [0,1];
        expect(service.missingNumber1(nums)).toBe(2);

        nums = [9,6,4,2,3,5,7,0,1];
        expect(service.missingNumber1(nums)).toBe(8);
    });

    it('missingNumber2()', () => {
        let nums = [3,0,1];
        expect(service.missingNumber2(nums)).toBe(2);

        nums = [0,1];
        expect(service.missingNumber2(nums)).toBe(2);

        nums = [9,6,4,2,3,5,7,0,1];
        expect(service.missingNumber2(nums)).toBe(8);

        nums = [9,6,4,2,3,5,7,8,1];
        expect(service.missingNumber2(nums)).toBe(0);
    });

    it('missingNumber3()', () => {
        let nums = [3,0,1];
        expect(service.missingNumber3(nums)).toBe(2);

        nums = [0,1];
        expect(service.missingNumber3(nums)).toBe(2);

        nums = [9,6,4,2,3,5,7,0,1];
        expect(service.missingNumber3(nums)).toBe(8);

        nums = [9,6,4,2,3,5,7,8,1];
        expect(service.missingNumber3(nums)).toBe(0);
    });

    it('findAllNumbersDisappearedInArray1', () => {
        let nums = [4,3,2,7,8,2,3,1];
        expect(service.findAllNumbersDisappearedInArray1(nums)).toEqual([5, 6]);

        nums = [1,1];
        expect(service.findAllNumbersDisappearedInArray1(nums)).toEqual([2]);
    });

    it('findAllNumbersDisappearedInArray2', () => {
        let nums = [4,3,2,7,8,2,3,1];
        expect(service.findAllNumbersDisappearedInArray2(nums)).toEqual([5, 6]);

        nums = [1,1];
        expect(service.findAllNumbersDisappearedInArray2(nums)).toEqual([2]);
    });

    it('singleNumber1()', () => {
        let nums = [2,2,1];
        expect(service.singleNumber1(nums)).toBe(1);

        nums = [4,1,2,1,2];
        expect(service.singleNumber1(nums)).toBe(4);

        nums = [1];
        expect(service.singleNumber1(nums)).toBe(1);
    });

    it('singleNumber2()', () => {
        let nums = [2,2,1];
        expect(service.singleNumber2(nums)).toBe(1);

        nums = [4,1,2,1,2];
        expect(service.singleNumber2(nums)).toBe(4);

        nums = [1];
        expect(service.singleNumber2(nums)).toBe(1);
    });
});
