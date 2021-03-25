import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiaOnlineComponent } from './terapia-online.component';

describe('TerapiaOnlineComponent', () => {
  let component: TerapiaOnlineComponent;
  let fixture: ComponentFixture<TerapiaOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerapiaOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerapiaOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
