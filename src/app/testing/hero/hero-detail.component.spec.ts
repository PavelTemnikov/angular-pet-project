import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from "./hero-detail.component";

describe('when navigate to existing hero', () => {
    let fixture: ComponentFixture<HeroDetailComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            declarations: [HeroDetailComponent]
        });
        fixture = TestBed.createComponent(HeroDetailComponent);
    });

    it('should convert hero name to Title Case', () => {
        fixture.detectChanges();

        const ne: HTMLElement = fixture.nativeElement as HTMLElement;
        const nameInput = ne.querySelector('input');
        const nameDisplay = ne.querySelector('span');

        nameInput!.value = 'quick brown fox';
        nameInput?.dispatchEvent(new Event('input'));

        fixture.detectChanges();

        expect(nameDisplay?.textContent).toBe('Quick Brown Fox');
    });
});