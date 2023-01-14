import { TestBed } from '@angular/core/testing';

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
});
