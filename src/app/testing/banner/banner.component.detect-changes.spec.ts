import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from "@angular/core/testing";
import { BannerComponent } from "./banner.component";

describe('BannerComponent (AutoChangeDetect)', () => {
    let fixture: ComponentFixture<BannerComponent>;
    let comp: BannerComponent;
    let h1: HTMLElement | null;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BannerComponent],
            providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
        });

        fixture = TestBed.createComponent(BannerComponent);
        comp = fixture.componentInstance;
        h1 = (fixture.nativeElement as HTMLElement).querySelector('h1');
    });

    it('should display original title', () => {
        // no fixture.detectChanges() needed
        expect(h1?.textContent).toBe(comp.title);
    });

    it('should still see original title after comp.title change', () => {
        const oldTitle = comp.title;
        comp.title = 'Changed Title';
        // Displayed title is old because Angular didn't hear the change :(
        expect(h1?.textContent).toBe(oldTitle);
    });

    it('should display updated title after detectChanges', () => {
        comp.title = 'Changed Title';
        fixture.detectChanges();
        expect(h1?.textContent).toBe('Changed Title');
    });
});