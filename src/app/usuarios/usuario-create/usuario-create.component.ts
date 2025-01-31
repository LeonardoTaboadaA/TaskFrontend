import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { UsuarioRequest } from '../usuario.request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit{
  formCrearUsuario: FormGroup;
  constructor(private fb: FormBuilder, private usuarioService:UsuarioService, private router: Router)
  {
    this.formCrearUsuario = this.fb.group({
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$'), Validators.minLength(2), Validators.maxLength(50)]],
      apellidoPaterno: ['', [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$'), Validators.minLength(2), Validators.maxLength(50)]],
      apellidoMaterno: ['', [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$'), Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      numeroCelular: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      direccion: ['', Validators.required, Validators.maxLength(100)],
      cargo: ['', Validators.required],
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+$'), Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-]).{8,}$')]],
      rol: ['', [Validators.required]]
    });
  }



  ngOnInit(): void {

  }

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

  guardarUsuario(){
    if (this.formCrearUsuario.invalid) {
      return this.formCrearUsuario.markAllAsTouched();
    }
    else{
      const modeloUsuario : UsuarioRequest = {
        dni : this.formCrearUsuario.value.dni,
        nombre : this.formCrearUsuario.value.nombre,
        apellidoPaterno : this.formCrearUsuario.value.apellidoPaterno,
        apellidoMaterno : this.formCrearUsuario.value.apellidoMaterno,
        email : this.formCrearUsuario.value.email,
        numeroCelular : this.formCrearUsuario.value.numeroCelular,
        direccion : this.formCrearUsuario.value.direccion,
        cargo : this.formCrearUsuario.value.cargo,
        userName : this.formCrearUsuario.value.username,
        password : this.formCrearUsuario.value.password,
        rol : this.formCrearUsuario.value.rol,
      }

      this.usuarioService.crearUsuario(modeloUsuario).subscribe(respuesta => {
        console.log(respuesta);
      })

    }
  }

  validarTexto(event: KeyboardEvent): boolean {
    const tecla = event.key;
    if (tecla === 'Backspace') return true;
    const patron = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/;
    return patron.test(tecla);
  }

}
