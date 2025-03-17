import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirVentilatorComponent } from './air-ventilator.component';

describe('AirVentilatorComponent', () => {
  let component: AirVentilatorComponent;
  let fixture: ComponentFixture<AirVentilatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirVentilatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirVentilatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
