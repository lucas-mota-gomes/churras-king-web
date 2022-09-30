import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProlaboreComponent } from './prolabore.component';

describe('ProlaboreComponent', () => {
  let component: ProlaboreComponent;
  let fixture: ComponentFixture<ProlaboreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProlaboreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProlaboreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
