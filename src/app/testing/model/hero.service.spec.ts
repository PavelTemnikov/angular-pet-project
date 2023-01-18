import { HeroService } from "./hero.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { from, of } from 'rxjs';

describe ('HeroesService (with spies)', () => {
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    let heroService: HeroService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj<HttpClient>('HttpClient', ['get']);
        heroService = new HeroService(httpClientSpy);
    });

    it('should return expected heroes (HttpClient called once)', done => {
        const expectedHeroes = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];
        httpClientSpy.get.and.returnValue( from(Promise.resolve(expectedHeroes)) );

        heroService.getHeroes().subscribe({
            next: heroes => {
                expect(heroes).withContext('expected heroes').toEqual(expectedHeroes);
                done();
            },
            error: done.fail
        });

        expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
    });

    it('should return an error when the server returns a 404', done => {
        const errorResponse = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404,
            statusText: 'Not Found'
        });

        httpClientSpy.get.and.returnValue(from(Promise.reject(errorResponse)));

        heroService.getHeroes().subscribe({
            next: () => done.fail('expected an error, got heroes'),
            error: (error: HttpErrorResponse) => {
                expect(error.message).toContain('test 404 error');
                done();
            }
        });
    });
});