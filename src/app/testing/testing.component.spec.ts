import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponent } from './testing.component';
import { TwainComponent } from './twain/twain.component';
import { TwainService } from './twain/twain.service';

describe('TestingComponent', () => {
    let component: TestingComponent;
    let fixture: ComponentFixture<TestingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [TestingComponent, TwainComponent],
            providers: [TwainService]
        })
            .compileComponents();

        fixture = TestBed.createComponent(TestingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
