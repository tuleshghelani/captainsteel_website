import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimpingComponent } from './crimping.component';

describe('CrimpingComponent', () => {
  let component: CrimpingComponent;
  let fixture: ComponentFixture<CrimpingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrimpingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrimpingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
