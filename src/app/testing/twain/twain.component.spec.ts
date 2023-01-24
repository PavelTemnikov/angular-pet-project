import { Component } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { delay, interval, of, take, throwError } from "rxjs";
import { TwainComponent } from "./twain.component";
import { TwainService } from "./twain.service";

describe('TwainComponent', () => {
    let fixture: ComponentFixture<TwainComponent>;
    let comp: TwainComponent;
    let getQuoteSpy: jasmine.Spy;
    let quoteEl: HTMLElement | null;
    let testQuote: string;

    const errorMessage = () => {
        const el = (fixture.nativeElement as HTMLElement).querySelector('.error');
        return el ? el.textContent : null;
    };

    beforeEach(() => {
        testQuote = 'Test Quote';

        const twainService = jasmine.createSpyObj<TwainService>('TwainService', ['getQuote']);
        getQuoteSpy = twainService.getQuote.and.returnValue(of(testQuote));

        TestBed.configureTestingModule({
            declarations: [TwainComponent],
            providers: [{ provide: TwainService, useValue: twainService }]
        });

        fixture = TestBed.createComponent(TwainComponent);
        comp = fixture.componentInstance;
        quoteEl = (fixture.nativeElement as HTMLElement).querySelector('.twain');
    });   
    
    describe('when test with synchronous observable', () => {
        it('should show quote after component initialized', () => {
            fixture.detectChanges();
            expect(quoteEl?.textContent).toBe(testQuote);
            expect(getQuoteSpy.calls.any()).withContext('getQuote() called').toBe(true);
        });

        // Use `fakeAsync` because the component error calls `setTimeout`
        it('should display error when TwainService fails', fakeAsync(() => {
            getQuoteSpy.and.returnValue(throwError(() => new Error('TwainService test failure')));

            fixture.detectChanges();

            tick(); // flush the component's setTimeout()

            fixture.detectChanges();

            expect(errorMessage()).withContext('should display error').toContain('test failure');
            expect(quoteEl?.textContent).withContext('should show placeholder').toBe('...');
        }));
    });

    describe('tick() tests', () => {
        it('should run timeout callback with delay after call tick with millis', fakeAsync(() => {
            let called = false;
            setTimeout(() => {
                called = true;
            }, 100);

            tick(100);

            expect(called).toBe(true);
        }));

        it('should run new macro task callback with delay after call tick with millis', fakeAsync(() => {
            function nestedTimer(cb: () => any): void {
                setTimeout(() => setTimeout(cb));
            }

            const callback = jasmine.createSpy('callback');
            nestedTimer(callback);
            expect(callback).not.toHaveBeenCalled();

            tick(0);

            expect(callback).toHaveBeenCalled();
        }));

        it('should not run new macro task callback with delay after call tick with millis', fakeAsync(() => {
            function nestedTimer(cb: () => any): void {
                setTimeout(() => setTimeout(cb));
            }

            const callback = jasmine.createSpy('callback');
            nestedTimer(callback);
            expect(callback).not.toHaveBeenCalled();

            tick(0, { processNewMacroTasksSynchronously: false });

            expect(callback).not.toHaveBeenCalled();

            tick(0, { processNewMacroTasksSynchronously: false });

            expect(callback).toHaveBeenCalled();
        }));

        it('should get Date diff correctly in fakeAsync', fakeAsync(() => {
            const start = Date.now();
            tick(100);
            const end = Date.now();
            expect(end - start).toBe(100);
        }));

        it('should get Date diff correctly in fakeAsync with rxjs scheduler', fakeAsync(() => {
            let result = '';
            of('hello').pipe(delay(1000)).subscribe(v => result = v);
            expect(result).toBe('');

            tick(1000);

            expect(result).toBe('hello');

            const start = new Date().getTime();
            let dateDiff = 0;
            interval(1000).pipe(take(2)).subscribe(v => dateDiff = new Date().getTime() - start);

            tick(1000);

            expect(dateDiff).toBe(1000);

            tick(1000);

            expect(dateDiff).toBe(2000);
        }));
    });

    describe('use jasmine.clock()', () => {
        beforeEach(() => jasmine.clock().install());

        afterEach(() => jasmine.clock().uninstall());

        it('should auto enter fakeAsync', () => {
            // is in fakeAsync now, don't need to call fakeAsync(testFn)
            let called = false;
            setTimeout(() => called = true, 100);
            jasmine.clock().tick(100);
            expect(called).toBe(true);
        });
    });
});