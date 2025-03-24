import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolycarbonateSheetComponent } from './polycarbonate-sheet.component';

describe('PolycarbonateSheetComponent', () => {
  let component: PolycarbonateSheetComponent;
  let fixture: ComponentFixture<PolycarbonateSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolycarbonateSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolycarbonateSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
