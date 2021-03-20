import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AconteceComponent } from './acontece.component';

describe('AconteceComponent', () => {
  let component: AconteceComponent;
  let fixture: ComponentFixture<AconteceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AconteceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AconteceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
