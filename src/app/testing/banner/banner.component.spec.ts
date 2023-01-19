import { BannerComponent } from "./banner.component";
import { ComponentFixture, waitForAsync, TestBed } from "@angular/core/testing";

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
});