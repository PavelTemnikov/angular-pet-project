import { BannerComponent } from "./banner.component";
import { ComponentFixture, waitForAsync, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

describe('BannerComponent', () => {
    let comp: BannerComponent;
    let fixture: ComponentFixture<BannerComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [BannerComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BannerComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(comp).toBeDefined();
    });

    it('should contain "Hello, I am banner"', () => {
        const bannerElement: HTMLElement = fixture.nativeElement;
        expect(bannerElement.textContent).toContain('Hello, I am banner');
    });

    it('should have <p> with "Hello, I am banner"', () => {
        // const bannerElement: HTMLElement = fixture.nativeElement;
        const bannerElement: HTMLElement = fixture.debugElement.nativeElement;
        expect(bannerElement.querySelector('p')?.textContent).toBe('Hello, I am banner');
    });

    it('should find the <p> with fixture.debugElement.query(By.css)', () => {
        const p = fixture
            .debugElement
            .query(By.css('p'))
            .nativeElement as HTMLElement;

        expect(p.textContent).toBe('Hello, I am banner');
    });
});