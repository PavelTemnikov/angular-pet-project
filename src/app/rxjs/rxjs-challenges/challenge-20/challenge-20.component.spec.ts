import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challenge20Component } from './challenge-20.component';

describe('Challenge20Component', () => {
  let component: Challenge20Component;
  let fixture: ComponentFixture<Challenge20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Challenge20Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Challenge20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
