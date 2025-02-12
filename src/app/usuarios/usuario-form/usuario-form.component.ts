import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioRequest } from '../usuario.request';
import { primeraLetraMayuscula } from 'src/app/utilidades/validaciones/primera-letra-mayuscula';
import { ValidacionService } from 'src/app/utilidades/validaciones/validacion.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit{
  formCrearUsuario!: FormGroup;
  listaCargos: string[] = [
    'Gerente',
    'Supervisor',
    'Asistente',
    'Operario'
  ];

  listaRoles: string[] = [
    'Administrador',
    'Usuario',
    'Supervisor'
  ];

  constructor(private fb: FormBuilder, private validacionService: ValidacionService)
  {

  }

  @Input()
  errores: string[] = [];

  @Output()
  onSubmit: EventEmitter<UsuarioRequest> = new EventEmitter<UsuarioRequest>();

  guardarUsuario(){
    this.onSubmit.emit(this.formCrearUsuario.value);
  }

  ngOnInit(): void {
    this.formCrearUsuario = this.fb.group({
      dni: ['', {
        validators: [
          Validators.required,
          Validators.pattern('^[0-9]{8}$')
        ]
      }],

      nombre: ['', {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$'),
          primeraLetraMayuscula()
        ]
      }],

      apellidoPaterno: ['', {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$'),
          primeraLetraMayuscula()
        ]
      }],

      apellidoMaterno: ['', {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$'),
          primeraLetraMayuscula()
        ]
      }],

      email: ['', {
        validators: [
          Validators.required,
          Validators.email
        ]
      }],

      numeroCelular: ['', {
        validators: [
          Validators.required,
          Validators.pattern(/^9/),
          Validators.pattern(/^[0-9]{9}$/)
        ]
      }],

      direccion: ['', {
        validators: [
          Validators.required,
          Validators.maxLength(500),
          primeraLetraMayuscula()
        ]
      }],

      cargo: ['', {
        validators: [
          Validators.required
        ]
      }],

      username: ['', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z0-9._-]+$'),
        ]
      }],

      password: ['', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-]).{8,}$'),
        ]
      }],

      rol: ['', {
        validators: [
          Validators.required
        ]
      }],

    });

  }

  obtenerErrorCampoDni(){
    var campoDni = this.formCrearUsuario.get('dni');
    if(campoDni?.hasError('required'))
    {
      return 'Este campo es requerido';
    }

    if(campoDni?.hasError('pattern'))
    {
      return 'Debe tener 8 dígitos';
    }

    return '';
  }

  obtenerErrorCampoNombre() {
    const campoNombre = this.formCrearUsuario.get('nombre');
    if (campoNombre?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (campoNombre?.hasError('minlength')) {
      return 'Debe tener al menos 2 caracteres';
    }
    if (campoNombre?.hasError('maxlength')) {
      return 'No debe superar los 50 caracteres';
    }
    if (campoNombre?.hasError('pattern')) {
      return 'Solo se permiten letras y espacios';
    }
    if (campoNombre?.hasError('primeraLetraMayuscula')) {
      return campoNombre.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }

  obtenerErrorCampoApellidoPaterno() {
    const campoApellidoPaterno = this.formCrearUsuario.get('apellidoPaterno');
    if (campoApellidoPaterno?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (campoApellidoPaterno?.hasError('minlength')) {
      return 'Debe tener al menos 2 caracteres';
    }
    if (campoApellidoPaterno?.hasError('maxlength')) {
      return 'No debe superar los 50 caracteres';
    }
    if (campoApellidoPaterno?.hasError('pattern')) {
      return 'Solo se permiten letras y espacios';
    }
    if (campoApellidoPaterno?.hasError('primeraLetraMayuscula')) {
      return campoApellidoPaterno.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }

  obtenerErrorCampoApellidoMaterno() {
    const campoApellidoMaterno = this.formCrearUsuario.get('apellidoMaterno');
    if (campoApellidoMaterno?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (campoApellidoMaterno?.hasError('minlength')) {
      return 'Debe tener al menos 2 caracteres';
    }
    if (campoApellidoMaterno?.hasError('maxlength')) {
      return 'No debe superar los 50 caracteres';
    }
    if (campoApellidoMaterno?.hasError('pattern')) {
      return 'Solo se permiten letras y espacios';
    }
    if (campoApellidoMaterno?.hasError('primeraLetraMayuscula')) {
      return campoApellidoMaterno.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }

  obtenerErrorCampoEmail() {
    const campoEmail = this.formCrearUsuario.get('email');
    if (campoEmail?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (campoEmail?.hasError('email')) {
      return 'Correo electrónico no válido';
    }
    return '';
  }

  obtenerErrorCampoNumeroCelular() {
    const campoCelular = this.formCrearUsuario.get('numeroCelular');
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

  obtenerErrorCampoDireccion() {
    const campoDireccion = this.formCrearUsuario.get('direccion');
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

  obtenerErrorCampoCargo() {
    const campoCargo = this.formCrearUsuario.get('cargo');
    if (campoCargo?.hasError('required')) {
      return 'Este campo es requerido';
    }
    return '';
  }

  obtenerErrorCampoUsername() {
    const campoUsername = this.formCrearUsuario.get('username');
    if (campoUsername?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (campoUsername?.hasError('minlength')) {
      return 'Debe tener al menos 3 caracteres';
    }
    if (campoUsername?.hasError('maxlength')) {
      return 'No debe superar los 20 caracteres';
    }
    if (campoUsername?.hasError('pattern')) {
      return 'Solo se permiten letras, números, puntos (.), guiones bajos (_) y guiones medios (-)';
    }
    return '';
  }

  obtenerErrorCampoPassword() {
    const campoPassword = this.formCrearUsuario.get('password');
    if (campoPassword?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (campoPassword?.hasError('minlength')) {
      return 'Debe tener al menos 8 caracteres';
    }
    if (campoPassword?.hasError('pattern')) {
      return 'Debe contener al menos una letra mayúscula, una minúscula, un número y un carácter especial';
    }
    return '';
  }

  obtenerErrorCampoRol() {
    const campoRol = this.formCrearUsuario.get('rol');
    if (campoRol?.hasError('required')) {
      return 'Este campo es requerido';
    }
    return '';
  }

  validarSoloNumeros(event: KeyboardEvent): boolean {
    const charCode = event.charCode;
    return charCode >= 48 && charCode <= 57;
  }

  validarSoloLetras(event: KeyboardEvent): boolean {
    return this.validacionService.validarSoloLetras(event);
  }
}
