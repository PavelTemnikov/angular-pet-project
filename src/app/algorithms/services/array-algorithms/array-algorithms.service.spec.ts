import { TestBed } from '@angular/core/testing';

import { ArrayAlgorithmsService } from './array-algorithms.service';

describe('ArrayAlgorithmsService', () => {
  let service: ArrayAlgorithmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayAlgorithmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
