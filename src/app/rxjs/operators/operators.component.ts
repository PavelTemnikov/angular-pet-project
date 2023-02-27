import { Component, Inject, OnInit } from '@angular/core';
import { auditTime, fromEvent, interval, map, mergeScan, of, switchScan, timer } from "rxjs";
import { DOCUMENT } from "@angular/common";
import { take } from "rxjs/internal/operators/take";

@Component({
  selector: 'app-operators',
  template: `
    <p>
      operators works!
    </p>
  `,
  styles: [
  ]
})
export class OperatorsComponent implements OnInit{
  constructor(@Inject(DOCUMENT) private documentRef: Document) {}

  ngOnInit() {
    // this.mergeScan();
    // this.switchScan();
  }

  mergeScan(): void {
    fromEvent(this.documentRef, 'click').pipe(
        map(() => 100),
        mergeScan((acc, current) => {
          return interval(2000).pipe(map(v => v + acc + current));
        }, 1)
    )
    .subscribe(console.log);
  }

  switchScan(): void {
    fromEvent(this.documentRef, 'click').pipe(
        map(() => 100),
        switchScan((acc, current) => {
          return interval(2000).pipe(map(v => v + acc + current));
        }, 1)
    )
    .subscribe(console.log);
  }
}
