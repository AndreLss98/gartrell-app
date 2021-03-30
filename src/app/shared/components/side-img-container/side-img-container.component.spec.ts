import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideImgContainerComponent } from './side-img-container.component';

describe('SideImgContainerComponent', () => {
  let component: SideImgContainerComponent;
  let fixture: ComponentFixture<SideImgContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideImgContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideImgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
