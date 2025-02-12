import { ValidacionService } from './../../utilidades/validaciones/validacion.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipoRequest } from '../equipo.request';

@Component({
  selector: 'app-equipo-form',
  templateUrl: './equipo-form.component.html',
  styleUrls: ['./equipo-form.component.css']
})
export class EquipoFormComponent implements OnInit{
  formCrearEquipo!: FormGroup;

  constructor(private fb: FormBuilder, private validacionService: ValidacionService)
  {

  }

  @Input()
  errores: string[] = [];

  @Output()
  onSubmit: EventEmitter<EquipoRequest> = new EventEmitter<EquipoRequest>();

  guardarEquipo(){
    this.onSubmit.emit(this.formCrearEquipo.value);
  }

  ngOnInit(): void {
    this.formCrearEquipo = this.fb.group({
      marca: ['', {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      }],

      modelo: ['', {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      }],

      nombreEquipo: ['', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ]
      }],

    });
  }

  obtenerErrorCampoMarca(){
    const campoMarca = this.formCrearEquipo.get('marca');
    if(campoMarca?.hasError('required'))
    {
      return 'Este campo es requerido';
    }

    if(campoMarca?.hasError('minlength'))
    {
      return 'Debe tener mínimo 2 caracteres';
    }
    if (campoMarca?.hasError('maxlength')) {
      return 'Debe tener máximo 50 caracteres';
    }
    return '';
  }

  obtenerErrorCampoModelo() {
    const campoModelo = this.formCrearEquipo.get('modelo');
    if (campoModelo?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (campoModelo?.hasError('minlength')) {
      return 'Debe tener mínimo 2 caracteres';
    }
    if (campoModelo?.hasError('maxlength')) {
      return 'Debe tener máximo 50 caracteres';
    }

    return '';
  }

  obtenerErrorCampoNombreEquipo() {
    const campoNEquipo = this.formCrearEquipo.get('nombreEquipo');
    if (campoNEquipo?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (campoNEquipo?.hasError('minlength')) {
      return 'Debe tener mínimo 3 caracteres';
    }
    if (campoNEquipo?.hasError('maxlength')) {
      return 'Debe tener máximo 100 caracteres';
    }
    return '';
  }

  validarSoloLetras(event: KeyboardEvent): boolean {
    return this.validacionService.validarSoloLetras(event);
  }
}
