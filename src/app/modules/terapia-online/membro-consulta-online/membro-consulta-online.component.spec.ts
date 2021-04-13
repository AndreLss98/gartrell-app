import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembroConsultaOnlineComponent } from './membro-consulta-online.component';

describe('MembroConsultaOnlineComponent', () => {
  let component: MembroConsultaOnlineComponent;
  let fixture: ComponentFixture<MembroConsultaOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembroConsultaOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembroConsultaOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
