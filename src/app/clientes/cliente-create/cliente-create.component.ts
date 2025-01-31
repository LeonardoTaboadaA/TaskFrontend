import { ClienteRequest } from './../cliente.request';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent {
  errores: string[] = [];

  constructor(private router: Router) {}

  guardarCliente(clienteRequest : ClienteRequest){

  }
}
