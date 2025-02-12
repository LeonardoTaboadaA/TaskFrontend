import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { UsuarioRequest } from '../usuario.request';
import { Router } from '@angular/router';
import { ValidacionService } from 'src/app/utilidades/validaciones/validacion.service';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent{

  errores: string[] = [];

  constructor(private router: Router, private usuarioService:UsuarioService)
  {

  }

  guardarUsuario(usuarioRequest : UsuarioRequest){
    this.usuarioService.crearUsuario(usuarioRequest).subscribe(() => {
      this.router.navigate(['usuarios']);
    }, (error) => this.errores = parsearErroresAPI(error));
  }



}
