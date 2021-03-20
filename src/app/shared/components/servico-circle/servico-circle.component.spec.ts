import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoCircleComponent } from './servico-circle.component';

describe('ServicoCircleComponent', () => {
  let component: ServicoCircleComponent;
  let fixture: ComponentFixture<ServicoCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
