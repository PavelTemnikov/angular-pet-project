import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, switchMap, map, retry, of, throwError, concatWith, catchError } from "rxjs";
import { Quote } from "./quote";

@Injectable()
export class TwainService {
    private nextId = 1;

    constructor(private httpClient: HttpClient) {}

    getQuote(): Observable<string> {
        return new Observable(subscriber => subscriber.next(this.nextId++)).pipe(
            // tap(() => { throw new Error('Simulated server error'); }),
            // tap(() => { throw new HttpErrorResponse({ status: 404 })}),
            switchMap(id => this.httpClient.get<Quote>(`api/quotes/${id}`)),
            map(q => q.quote),
            retry({
                count: 2,
                delay: error => {
                    if (error.status === 404) {
                        this.nextId = 1;
                        return of(null);
                    }
                    console.error(error);
                    return throwError(() => new Error('Cannot get Twain quotes from the server'));
                }
            }),
            // concatWith(throwError(() => new Error('There are no Twain quotes')))
            // catchError(() => { throw new Error('There are no Twain quotes') })
        );
    }
}