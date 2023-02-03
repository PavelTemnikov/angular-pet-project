import { Injectable } from '@angular/core';
import { AlgorithmsModule } from '../../algorithms.module';

@Injectable({
  providedIn: AlgorithmsModule
})
export class SearchAlgorithmsService {

  // O(log(n)) - time
  // O(1) - space
  binarySearch(sortedArray: number[], seekElement: number): number {
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;
    let middleIndex: number;

    while (endIndex >= startIndex) {
      // middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
      middleIndex = Math.floor((startIndex + endIndex) / 2);

      if (seekElement === sortedArray[middleIndex]) {
        return middleIndex;
      }
      else if (seekElement > sortedArray[middleIndex]) {
        startIndex = middleIndex + 1;
      }
      else {
        // seekElement < sortedArray[middleIndex]
        endIndex = middleIndex - 1;
      }
    }
    return -1;
  }

}