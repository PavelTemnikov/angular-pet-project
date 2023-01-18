import { MasterService, ValueService } from "./demo";

///////// Fakes /////////
export class FakeService extends ValueService {
    override value = 'fake service value'; 
}

describe('demo (no TestBed):', () => {
    // Straight Jasmine testing without Angular's testing support
    describe('ValueService', () => {
        let valueService: ValueService;

        beforeEach(() => {
            valueService = new ValueService();
        })

        it('#getValue should return \'real value\'', () => {
            expect(valueService.getValue()).toBe('real value');
        });

        it('#getObservableValue should return \'observable value\'', (done) => {
            valueService.getObservableValue().subscribe(v => {
                expect(v).toBe('observable value');
                done();
            });
        });

        it('#getPromiseValue should return \'promise value\'', (done) => {
            valueService.getPromiseValue().then(v => {
                expect(v).toBe('promise value');
                done();
            })
        });
    });

    // MasterService requires injection of a ValueService
    describe('Master Service without Angular testing support', () => {
        let masterService: MasterService;

        it('#getValue should return \'real value\' from real service', () => {
            masterService = new MasterService(new ValueService());
            expect(masterService.getValue()).toBe('real value');
        });

        it('#getValue should return \'fake service value\' from fake service', () => {
            masterService = new MasterService(new FakeService());
            expect(masterService.getValue()).toBe('fake service value');
        });

        it('#getValue should return \'fake value\' from fake object', () => {
            const fakeObj = { getValue: () => 'fake value' } as ValueService;
            masterService = new MasterService(fakeObj);
            expect(masterService.getValue()).toBe('fake value');
        });

        it('#getValue should return stubbed value from a spy', () => {
            const stubValue = 'stub value';
            const valueServiceSpy = jasmine.createSpyObj<ValueService>('ValueService', ['getValue']);
            valueServiceSpy.getValue.and.returnValue(stubValue);
            masterService = new MasterService(valueServiceSpy);

            expect(masterService.getValue()).withContext('service returns stub value').toBe(stubValue);
            expect(valueServiceSpy.getValue.calls.count()).withContext('spy method is called once').toBe(1);
            expect(valueServiceSpy.getValue.calls.mostRecent().returnValue).toBe(stubValue);
        });
    });
});
