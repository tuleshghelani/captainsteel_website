import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapezoidalProfileSheetsComponent } from './trapezoidal-profile-sheets.component';

describe('TrapezoidalProfileSheetsComponent', () => {
  let component: TrapezoidalProfileSheetsComponent;
  let fixture: ComponentFixture<TrapezoidalProfileSheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrapezoidalProfileSheetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrapezoidalProfileSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
