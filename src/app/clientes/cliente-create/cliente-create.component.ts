import { ClienteRequest } from './../cliente.request';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent {
  errores: string[] = [];

  constructor(
    private router: Router,
    private clienteService:ClienteService,
    ) {}

  guardarCliente(clienteRequest : ClienteRequest){
    console.log(clienteRequest);
    this.clienteService.crearCliente(clienteRequest).subscribe(() => {
      this.router.navigate(['clientes']);

    }, (error) => this.errores = parsearErroresAPI(error));
  }
}
