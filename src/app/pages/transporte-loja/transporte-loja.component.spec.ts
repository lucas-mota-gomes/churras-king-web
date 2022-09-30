import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteLojaComponent } from './transporte-loja.component';

describe('TransporteLojaComponent', () => {
  let component: TransporteLojaComponent;
  let fixture: ComponentFixture<TransporteLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransporteLojaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransporteLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
