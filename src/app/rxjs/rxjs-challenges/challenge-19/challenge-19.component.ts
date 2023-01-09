import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { map, Observable, pairwise, scan, tap } from 'rxjs';

@Component({
    selector: 'app-challenge-nineteen',
    template: `
        <blockquote>
            Create Observable based on <code>requestAnimationFrame</code> and show FPS meter
        </blockquote>
        <p>
            FPS: {{fps$ | async}}
        </p>
        <blockquote (mousemove)="onMouseMove()">
            Slow down by moving mouse over here
        </blockquote>
    `,
    styles: [
    ]
})
export class Challenge19Component {

    public readonly fps$ = Challenge19Component.animationFrame(this.documentRef.defaultView || window).pipe(
        pairwise(),
        scan((acc, [prev, cur]) => {
            if (acc.push(1000 / (cur - prev)) > 60) {
                acc.shift();
            }
            return acc;
        }, [] as number[]),
        map(fpses => Math.round(fpses.reduce((acc, fps) => acc + fps, 0) / fpses.length))
    );

    constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {}

    public onMouseMove(): void {
        // Let's just introduce lag by heavy calculations
        console.log(Challenge19Component.fibonacci(35));
    }


    private static animationFrame({ requestAnimationFrame, cancelAnimationFrame }: Window): Observable<DOMHighResTimeStamp> {
        return new Observable(subscriber => {
            let id: DOMHighResTimeStamp;
            const callback = (timestamp: DOMHighResTimeStamp) => {
                subscriber.next(timestamp);
                id = requestAnimationFrame(callback);
            };
            id = requestAnimationFrame(callback);
            return () => { 
                cancelAnimationFrame(id); 
            }
        });
    }

    private static fibonacci(num: number): number {
        return num > 1 ? this.fibonacci(num - 1) + this.fibonacci(num - 2) : 1;
    }
}
