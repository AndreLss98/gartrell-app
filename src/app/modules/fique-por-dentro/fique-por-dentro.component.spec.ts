import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiquePorDentroComponent } from './fique-por-dentro.component';

describe('FiquePorDentroComponent', () => {
  let component: FiquePorDentroComponent;
  let fixture: ComponentFixture<FiquePorDentroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiquePorDentroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiquePorDentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
