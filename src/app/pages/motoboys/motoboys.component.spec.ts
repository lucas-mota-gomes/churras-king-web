import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoboysComponent } from './motoboys.component';

describe('MotoboysComponent', () => {
  let component: MotoboysComponent;
  let fixture: ComponentFixture<MotoboysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoboysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoboysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
