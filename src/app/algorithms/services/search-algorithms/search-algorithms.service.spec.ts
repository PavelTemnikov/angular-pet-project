import { SearchAlgorithmsService } from "./search-algorithms.service";

describe('SearchAlgorithmsService', () => {
  let service: SearchAlgorithmsService;

  beforeEach(() => {
    service = new SearchAlgorithmsService();
  });

  it('binarySearch() should search number in sorted array', () => {
    expect(service.binarySearch([], 1)).toBe(-1);
    expect(service.binarySearch([1], 1)).toBe(0);
    expect(service.binarySearch([1, 2], 1)).toBe(0);
    expect(service.binarySearch([1, 2], 2)).toBe(1);
    expect(service.binarySearch([1, 5, 10, 12], 1)).toBe(0);
    expect(service.binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 17)).toBe(5);
    expect(service.binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 1)).toBe(0);
    expect(service.binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 100)).toBe(7);
    expect(service.binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 0)).toBe(-1);
  });
});