import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsChallengesComponent } from './rxjs-challenges.component';

describe('RxjsChallengesComponent', () => {
  let component: RxjsChallengesComponent;
  let fixture: ComponentFixture<RxjsChallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsChallengesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
