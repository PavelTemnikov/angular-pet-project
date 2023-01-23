import { Component } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-micro-macro-tastks',
  template: `
    <p>
      micro-macro-tastks works!
    </p>
  `,
  styles: [
  ]
})
export class MicroMacroTastksComponent {
    // event loop algorithm:
    //     1. Dequeue and run the oldest task from the macrotask queue (e.g. “script”).
    //     2. Execute all microtasks:
    //         - While the microtask queue is not empty:
    //             - Dequeue and run the oldest microtask.
    //     3. Render changes if any.
    //     4. If the macrotask queue is empty, wait till a macrotask appears.
    //     5. Go to step 1.

    // To schedule a new macrotask:
    //     - Use zero delayed setTimeout(f).
    // That may be used to split a big calculation-heavy task into pieces, for the browser to be able to react to user events and show progress between them.
    // Also, used in event handlers to schedule an action after the event is fully handled (bubbling done).

    // To schedule a new microtask:
    //     - Use queueMicrotask(f).
    //     - Also promise handlers go through the microtask queue.
    // There’s no UI or network event handling between microtasks: they run immediately one after another.

    constructor() {
        console.log('start console.log');                          // first

        setTimeout(() => console.log('setTimeout'), 0);            // fourth   (set macrotask)

        of('Observable').pipe(delay(0)).subscribe(console.log);    // fiveth   (set macrotask)

        Promise.resolve().then(() => console.log('Promise'));      // third    (set microtask)

        console.log('finish console.log');                         // second
    }
}
