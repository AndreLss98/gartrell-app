import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflexoesComponent } from './reflexoes.component';

describe('ReflexoesComponent', () => {
  let component: ReflexoesComponent;
  let fixture: ComponentFixture<ReflexoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReflexoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReflexoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
