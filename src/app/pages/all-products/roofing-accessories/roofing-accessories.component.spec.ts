import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoofingAccessoriesComponent } from './roofing-accessories.component';

describe('RoofingAccessoriesComponent', () => {
  let component: RoofingAccessoriesComponent;
  let fixture: ComponentFixture<RoofingAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoofingAccessoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoofingAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
