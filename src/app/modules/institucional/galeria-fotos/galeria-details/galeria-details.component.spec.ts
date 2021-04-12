import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaDetailsComponent } from './galeria-details.component';

describe('GaleriaDetailsComponent', () => {
  let component: GaleriaDetailsComponent;
  let fixture: ComponentFixture<GaleriaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
