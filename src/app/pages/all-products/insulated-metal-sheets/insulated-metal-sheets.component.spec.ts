import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsulatedMetalSheetsComponent } from './insulated-metal-sheets.component';

describe('InsulatedMetalSheetsComponent', () => {
  let component: InsulatedMetalSheetsComponent;
  let fixture: ComponentFixture<InsulatedMetalSheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsulatedMetalSheetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsulatedMetalSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
