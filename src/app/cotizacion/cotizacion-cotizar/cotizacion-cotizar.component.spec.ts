import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionCotizarComponent } from './cotizacion-cotizar.component';

describe('CotizacionCotizarComponent', () => {
  let component: CotizacionCotizarComponent;
  let fixture: ComponentFixture<CotizacionCotizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CotizacionCotizarComponent]
    });
    fixture = TestBed.createComponent(CotizacionCotizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
