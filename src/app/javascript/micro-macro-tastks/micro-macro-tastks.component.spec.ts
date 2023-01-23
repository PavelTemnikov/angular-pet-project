import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroMacroTastksComponent } from './micro-macro-tastks.component';

describe('MicroMacroTastksComponent', () => {
  let component: MicroMacroTastksComponent;
  let fixture: ComponentFixture<MicroMacroTastksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroMacroTastksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroMacroTastksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
