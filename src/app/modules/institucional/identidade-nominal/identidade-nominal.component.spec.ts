import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentidadeNominalComponent } from './identidade-nominal.component';

describe('IdentidadeNominalComponent', () => {
  let component: IdentidadeNominalComponent;
  let fixture: ComponentFixture<IdentidadeNominalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentidadeNominalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentidadeNominalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
