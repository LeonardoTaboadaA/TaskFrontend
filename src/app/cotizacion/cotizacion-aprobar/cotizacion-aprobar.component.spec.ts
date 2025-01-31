import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionAprobarComponent } from './cotizacion-aprobar.component';

describe('CotizacionAprobarComponent', () => {
  let component: CotizacionAprobarComponent;
  let fixture: ComponentFixture<CotizacionAprobarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CotizacionAprobarComponent]
    });
    fixture = TestBed.createComponent(CotizacionAprobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
