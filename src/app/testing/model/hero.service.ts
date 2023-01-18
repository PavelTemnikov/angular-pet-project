import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, tap } from "rxjs";
import { Hero } from "./hero";

@Injectable()
export class HeroService {
    readonly heroesUrl = 'api/heroes';

    constructor(private http: HttpClient) { }

    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl).pipe(
            tap(() => console.log('fetched heroes')),
            catchError(this.handleError<Hero[]>('getHeroes'))
        );
    }

    /**
     * @param operation - name of the operation that failed
     */
    private handleError<T>(operation = 'operation') {
        return (error: HttpErrorResponse): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error);

            // If a native error is caught, do not transform it. We only want to
            // transform response errors that are not wrapped in an `Error`.
            if (error.error instanceof Event) {
                throw error.error;
            }

            const message = `server returned code ${error.status} with body "${error.error}"`;
            // TODO: better job of transforming error for user consumption
            throw new Error(`${operation} failed: ${message}`);
        };

    }
}