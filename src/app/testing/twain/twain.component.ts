import { Component, OnInit } from "@angular/core";
import { catchError, Observable, of, startWith } from "rxjs";
import { TwainService } from "./twain.service";

@Component({
    selector: 'twain-quote',
    template: `
        <p class="twain"><i>{{quote | async}}</i></p>
        <button type="button" (click)="getQuote()">Next Quote</button>
        <p class="error" *ngIf="errorMessage">{{errorMessage}}</p>
    `,
    styles: [
        `.twain { font-style: italic; } .error { color: red; }`
    ]
})
export class TwainComponent implements OnInit {
    errorMessage!: string;
    quote!: Observable<string>;

    constructor(private twainService: TwainService) {}

    ngOnInit(): void {
        this.getQuote();
    }

    getQuote() {
        this.errorMessage = '';
        this.quote = this.twainService.getQuote().pipe(
            startWith('...'),
            catchError(error => {
                // this.errorMessage = error.message || error.toString();
                setTimeout(() => this.errorMessage = error.message || error.toString());
                return of('...');
            })
        )
    }
}