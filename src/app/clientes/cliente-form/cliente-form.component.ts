import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteRequest } from '../cliente.request';
import { primeraLetraMayuscula } from 'src/app/utilidades/validaciones/primera-letra-mayuscula';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  formCrearCliente!: FormGroup;

  constructor(private fb: FormBuilder)
  {

  }

  @Input()
  errores: string[] = [];

  @Output()
  onSubmit: EventEmitter<ClienteRequest> = new EventEmitter<ClienteRequest>();

  ngOnInit(): void {
    this.formCrearCliente = this.fb.group({
      ruc: ['', {
        validators: [
          Validators.required,
          Validators.pattern(/^\d{11}$/)
        ]
      }],

      razonSocial: ['', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
          primeraLetraMayuscula()
        ]
      }],

      numeroCelular: ['', {
        validators: [
          Validators.required,
          Validators.pattern(/^9/),
          Validators.pattern(/^[0-9]{9}$/)
        ]
      }],

      email: ['', {
        validators: [
          Validators.required,
          Validators.email
        ]
      }],

      direccion: ['', {
        validators: [
          Validators.required,
          Validators.maxLength(500),
          primeraLetraMayuscula()
        ]
      }],
      equipos: this.fb.array([]),
      idEquipos: [[]]
    });

  }

  actualizarEquipos(ids: number[]) {
    console.log("Actualizando idEquipos en ClienteFormComponent:", ids);
    this.formCrearCliente.patchValue({ idEquipos: ids });
  }

  guardarCliente() {
    const formValue = this.formCrearCliente.value;


    // Construir un nuevo objeto con la estructura correcta de ClienteRequest
    const clienteRequest: ClienteRequest = {
      ruc: formValue.ruc,
      razonSocial: formValue.razonSocial,
      numeroCelular: formValue.numeroCelular,
      email: formValue.email,
      direccion: formValue.direccion,
      idEquipos: formValue.idEquipos
    };

    // Emitir solo los datos necesarios en el formato correcto
    this.onSubmit.emit(clienteRequest);
    console.log(clienteRequest);
  }

  obtenerErrorCampoRuc(){
    var campoRuc = this.formCrearCliente.get('ruc');
    if(campoRuc?.hasError('required'))
    {
      return 'Este campo es requerido';
    }

    if(campoRuc?.hasError('pattern'))
    {
      return 'Debe tener 11 dígitos';
    }

    return '';
  }

  obtenerErrorCampoRazonSocial() {
    const campoRS = this.formCrearCliente.get('razonSocial');
    if (campoRS?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (campoRS?.hasError('minlength')) {
      return 'Debe tener al menos 3 caracteres';
    }
    if (campoRS?.hasError('maxlength')) {
      return 'Debe tener menos de 255 caracteres';
    }
    if(campoRS?.hasError('primeraLetraMayuscula')){
      return campoRS.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }

  obtenerErrorCampoNumeroCelular() {
    const campoCelular = this.formCrearCliente.get('numeroCelular');
    if (campoCelular?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (campoCelular?.hasError('pattern') && !/^9/.test(campoCelular.value)) {
      return 'Debe comenzar con 9';
    }
    if (campoCelular?.hasError('pattern') && !/^[0-9]{9}$/.test(campoCelular.value)) {
      return 'Debe tener 9 dígitos';
    }
    return '';
  }

  obtenerErrorCampoEmail() {
    const campoEmail = this.formCrearCliente.get('email');
    if (campoEmail?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (campoEmail?.hasError('email')) {
      return 'Correo electrónico no válido';
    }
    return '';
  }

  obtenerErrorCampoDireccion() {
    const campoDireccion = this.formCrearCliente.get('direccion');
    if (campoDireccion?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (campoDireccion?.hasError('maxlength')) {
      return 'Debe tener menos de 500 caracteres';
    }
    if(campoDireccion?.hasError('primeraLetraMayuscula')){
      return campoDireccion.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }

  validarSoloNumeros(event: KeyboardEvent): boolean {
    const charCode = event.charCode;
    return charCode >= 48 && charCode <= 57;
  }

}
