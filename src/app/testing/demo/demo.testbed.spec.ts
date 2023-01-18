import { TestBed } from "@angular/core/testing";
import { MasterService, ValueService } from "./demo";

describe('demo (with TestBed):', () => {
    describe('MasterService', () => {
        let valueServiceSpy: jasmine.SpyObj<ValueService>;
        let masterService: MasterService;

        beforeEach(() => {
            const spy = jasmine.createSpyObj<ValueService>('ValueService', ['getValue']);
            TestBed.configureTestingModule({
                providers: [
                    MasterService,
                    { provide: ValueService, useValue: spy }
                ]
            });
            masterService = TestBed.inject(MasterService);
            valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;
        });

        it('#getValue should return stub value from spy', () => {
            const stubValue = 'stub value';
            valueServiceSpy.getValue.and.returnValue(stubValue);

            expect(masterService.getValue()).withContext('service returned stub value').toBe(stubValue);
            expect(valueServiceSpy.getValue.calls.count()).withContext('spy method was called once').toBe(1);
            expect(valueServiceSpy.getValue.calls.mostRecent().returnValue).toBe(stubValue);
        });
    });
});