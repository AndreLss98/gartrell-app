import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEventFormComponent } from './register-event-form.component';

describe('RegisterEventFormComponent', () => {
  let component: RegisterEventFormComponent;
  let fixture: ComponentFixture<RegisterEventFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEventFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
