import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionCreateComponent } from './cotizacion-create.component';

describe('CotizacionCreateComponent', () => {
  let component: CotizacionCreateComponent;
  let fixture: ComponentFixture<CotizacionCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CotizacionCreateComponent]
    });
    fixture = TestBed.createComponent(CotizacionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
