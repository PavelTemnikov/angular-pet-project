import { SortingAlgorithmsService } from './sorting-algorithms.service';

describe('SortingAlgorithmsService', () => {
    let service: SortingAlgorithmsService;
    let sortedArr: number[];
    let notSortedArr: number[];
    let negativeArr: number[];
    let negativeArrSorted: number[];

    beforeEach(() => {
        service = new SortingAlgorithmsService();
        sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
        negativeArr = [-1, 0, 5, -10, 20, 13, -7, 3, 2, -3];
        negativeArrSorted = [-10, -7, -3, -1, 0, 2, 3, 5, 13, 20];
    });

    it('bubbleSort()', () => {
        expect(service.bubbleSort(notSortedArr)).toEqual(sortedArr);
        expect(service.bubbleSort(negativeArr)).toEqual(negativeArrSorted);
    });

    it('selectionSort()', () => {
        expect(service.selectionSort(notSortedArr)).toEqual(sortedArr);
        expect(service.selectionSort(negativeArr)).toEqual(negativeArrSorted);
    });

    it('insertionSort()', () => {
        expect(service.insertionSort(notSortedArr)).toEqual(sortedArr);
        expect(service.insertionSort(negativeArr)).toEqual(negativeArrSorted);
    });

    it('heapSort()', () => {
        expect(service.heapSort(notSortedArr)).toEqual(sortedArr);
        expect(service.heapSort(negativeArr)).toEqual(negativeArrSorted);
    });
});
