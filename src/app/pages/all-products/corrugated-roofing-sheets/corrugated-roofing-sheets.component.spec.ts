import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrugatedRoofingSheetsComponent } from './corrugated-roofing-sheets.component';

describe('CorrugatedRoofingSheetsComponent', () => {
  let component: CorrugatedRoofingSheetsComponent;
  let fixture: ComponentFixture<CorrugatedRoofingSheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrugatedRoofingSheetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorrugatedRoofingSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
