import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCreateComponent } from './usuario-create.component';

describe('UsuarioCreateComponent', () => {
  let component: UsuarioCreateComponent;
  let fixture: ComponentFixture<UsuarioCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioCreateComponent]
    });
    fixture = TestBed.createComponent(UsuarioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
