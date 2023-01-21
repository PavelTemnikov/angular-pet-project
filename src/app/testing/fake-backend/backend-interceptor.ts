import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { QUOTES } from "../twain/twain.data";
import { Quote } from "../twain/quote";

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let response: Observable<HttpEvent<any>>;
        const pathnames = req.url.split('/');
        let id = Number(pathnames[pathnames.length - 1]);

        switch (true) {
            case req.url.startsWith('api/quotes/') && !!id:
                const quote = QUOTES.find(q => q.id === id);
                if (!quote) {
                    throw new HttpErrorResponse({ status: 404, statusText: 'Not Found' });
                }
                response = of(new HttpResponse<Quote>({ body: quote}));
                break;
            default:
                throw new HttpErrorResponse({ status: 404, statusText: 'Not Found' });
        }
        return response.pipe(delay(300));
    }
}