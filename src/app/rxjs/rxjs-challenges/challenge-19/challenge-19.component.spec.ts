import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenge19Component } from './challenge-19.component';

describe('Challenge19Component', () => {
  let component: Challenge19Component;
  let fixture: ComponentFixture<Challenge19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Challenge19Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Challenge19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
