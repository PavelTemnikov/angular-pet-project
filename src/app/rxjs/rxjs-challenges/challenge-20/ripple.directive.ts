import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, OnDestroy } from '@angular/core';
import { fromEvent, map, mergeMap, tap } from 'rxjs';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { take } from 'rxjs/internal/operators/take';
import { Subscription } from 'rxjs/internal/Subscription';

@Directive({
    selector: '[ripple]'
})
export class RippleDirective implements OnDestroy {
    private subscribtion: Subscription

    constructor(@Inject(DOCUMENT) documentRef: Document, @Inject(ElementRef) { nativeElement }: ElementRef<HTMLElement>) {
        this.subscribtion = fromEvent<MouseEvent>(nativeElement, 'mousedown').pipe(
            map(event => createRipple(nativeElement, event, documentRef)),
            tap(ripple => nativeElement.appendChild(ripple)),
            mergeMap(ripple => 
                forkJoin([
                    fromEvent(ripple, 'animationend').pipe(take(1)),
                    fromEvent(documentRef, 'mouseup').pipe(take(1))
                ])
                .pipe(
                    tap(() => ripple.style.animationName = 'rippleOff'),
                    mergeMap(() => fromEvent(ripple, 'animationend').pipe(take(1))),
                    tap(() => nativeElement.removeChild(ripple))
                )
            )
        )
        .subscribe();
    }

    ngOnDestroy(): void {
        this.subscribtion.unsubscribe();
    }
}

function createRipple(nativeElement: HTMLElement, event: MouseEvent, documentRef: Document): HTMLElement {
    const rect = nativeElement.getBoundingClientRect();
    const radius = getRadius(event.offsetX, event.offsetY, rect);
    const ripple = documentRef.createElement("div");
    
    ripple.className = "ripple";
    ripple.setAttribute("style", getRippleStyle(event, radius));
    
    return ripple;
}

function getRippleStyle(
    { offsetX, offsetY }: MouseEvent,
    radius: number
): string {
    const size = radius * 2;
    const x = offsetX - radius;
    const y = offsetY - radius;

    return `
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
    `;
}

function getRadius(
    x: number,
    y: number,
    { left, top, right, bottom }: DOMRect
): number {
    return Math.max(
        ...[[left, top], [left, bottom], [right, top], [right, bottom]].map(
            ([a, b]) => getDistance(x + left, y + top, a, b)
        )
    );
}

function getDistance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
