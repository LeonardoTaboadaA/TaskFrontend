import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteRequest } from '../cliente.request';

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

  guardarCliente(){
    this.onSubmit.emit(this.formCrearCliente.value);
  }

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
          Validators.maxLength(255)
        ]
      }],

      numeroCelular: ['', {
        validators: [
          Validators.required,
          Validators.pattern(/^[9][0-9]{8}$/)
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
          Validators.maxLength(500)
        ]
      }]
    });
  }
}
