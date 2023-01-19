import { first } from "rxjs";
import { DashboardHeroComponent } from "../dashboard/dashboard-hero.component";
import { LightswitchComponent, MasterService, ValueService } from "./demo";

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

    describe('LightswitchComp', () => {
        it('#clicked() should toggle #isOn', () => {
            const comp = new LightswitchComponent();
            expect(comp.isOn).withContext('off at first').toBe(false);
            comp.clicked();
            expect(comp.isOn).withContext('on after first click').toBe(true);
            comp.clicked();
            expect(comp.isOn).withContext('off after first click').toBe(false);
        });

        it('#clicked() should set #message to "is on"', () => {
            const comp = new LightswitchComponent();
            expect(comp.message).withContext('off at first').toMatch(/is off/i);
            comp.clicked();
            expect(comp.message).withContext('on after click').toMatch(/is on/i);
        });
    });

    describe('DashboardHeroComponent class only', () => {
        it('raises the selected event when clicked', () => {
            const comp = new DashboardHeroComponent();
            const hero = { id: 1, name: 'name' };
            comp.hero = hero;

            comp.selected.pipe(first()).subscribe(selectedHero => expect(selectedHero).toEqual(hero));
            comp.click();
        });
    });
});
