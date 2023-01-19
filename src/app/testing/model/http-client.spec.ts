import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed, TestComponentRenderer } from "@angular/core/testing";

interface Data {
    name: string;
}

const testUrl = '/data';

describe('HttpClient testing', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('can test HttpClient.get', () => {
        const testData = { name: 'Test Data' };

        httpClient.get<Data>(testUrl).subscribe(data => {
            expect(data).toEqual(testData);
        });

        const req = httpTestingController.expectOne(testUrl);
        expect(req.request.method).toBe('GET');
        req.flush(testData);
    });

    it('can test HttpClient.get with matching header', () => {
        const testData = { name: 'Test Data' };
        const authToken = 'my-auth-token';

        httpClient.get<Data>(testUrl, { headers: new HttpHeaders({ Authorization: authToken }) })
            .subscribe(data => {
                expect(data).toEqual(testData);
            });

        const req = httpTestingController.expectOne(req => req.url === testUrl && req.headers.has('Authorization') && req.headers.get('Authorization') === authToken);
        req.flush(testData);
    });

    it('can test multiple requests', () => {
        const testData = [{ name: 'first' }, { name: 'second' }, { name: 'third' }, { name: 'forth' }];

        httpClient.get<Data[]>(testUrl).subscribe(data => expect(data.length).withContext('should have no data').toBe(0));
        httpClient.get<Data>(testUrl).subscribe(data => expect(data).withContext('should be first element from expected data array').toEqual(testData[0]));
        httpClient.get<Data[]>(testUrl).subscribe(data => expect(data).withContext('should be expected data').toEqual(testData));

        const requests = httpTestingController.match(testUrl);
        requests[0].flush([]);
        requests[1].flush(testData[0]);
        requests[2].flush(testData);
    });

    it('can test for 404 error', () => {
        const errorMessage = 'error message';

        httpClient.get<Data>(testUrl).subscribe({
            next: () => fail('should be error with 404 error'),
            error: (error: HttpErrorResponse) => {
                expect(error.error).withContext('message').toBe(errorMessage);
                expect(error.status).withContext('status').toBe(404);
            }
        });

        const req = httpTestingController.expectOne(testUrl);
        req.flush(errorMessage, { status: 404, statusText: 'Not Found' });
    });

    // it('can test for network error', done => {
    it('can test for network error', () => {
        const errorEvent = new ProgressEvent('error');

        httpClient.get<Data>(testUrl).subscribe({
            next: () => fail('should be error'),
            error: (error: HttpErrorResponse) => {
                expect(error.error).toEqual(errorEvent);
                // done();
            }
        });

        const req = httpTestingController.expectOne(testUrl);
        req.error(errorEvent);
    });
});