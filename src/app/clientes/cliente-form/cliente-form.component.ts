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

  filteredOptionsList: Observable<any[]>[] = [];
  equipos = [
    { idEquipo: 1, marca: 'HP', modelo: 'Pavilion', nombreEquipo: 'Equipo 1' },
    { idEquipo: 2, marca: 'Dell', modelo: 'Inspiron', nombreEquipo: 'Equipo 2' },
    { idEquipo: 3, marca: 'Lenovo', modelo: 'ThinkPad', nombreEquipo: 'Equipo 3' },
    { idEquipo: 4, marca: 'Apple', modelo: 'MacBook Pro', nombreEquipo: 'Equipo 4' },
    { idEquipo: 5, marca: 'Asus', modelo: 'ZenBook', nombreEquipo: 'Equipo 5' },
  ];


  constructor(private fb: FormBuilder)
  {

  }

  @Input()
  errores: string[] = [];

  @Output()
  onSubmit: EventEmitter<ClienteRequest> = new EventEmitter<ClienteRequest>();

  guardarCliente() {
    const formValue = this.formCrearCliente.value;

    // Extraer solo los idEquipo de los objetos seleccionados en el array equipos
    const idEquipos = formValue.equipos.map((equipo: any) => equipo.searchMaMoNom.idEquipo);

    // Construir un nuevo objeto con la estructura correcta de ClienteRequest
    const clienteRequest: ClienteRequest = {
      ruc: formValue.ruc,
      razonSocial: formValue.razonSocial,
      numeroCelular: formValue.numeroCelular,
      email: formValue.email,
      direccion: formValue.direccion,
      idEquipos: idEquipos
    };

    // Emitir solo los datos necesarios en el formato correcto
    this.onSubmit.emit(clienteRequest);
    console.log(clienteRequest);
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

      equipos: this.fb.array([])
    });

    this.agregarEquipo();
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

  nuevoEquipo(){

  }

  private _filter(value: any): any[] {
    if (!value) {
      return this.equipos; // Si es nulo, devolver todos los equipos
    }

    // Verificar si value es un objeto y extraer el string si es necesario
    const filterValue = typeof value === 'string'
        ? value.toLowerCase()
        : typeof value === 'object' && value.searchMaMoNom
          ? value.searchMaMoNom.toLowerCase()
          : '';

    console.log("Valor filtrado:", filterValue);

    return this.equipos.filter(option =>
      option.marca.toLowerCase().includes(filterValue) ||
      option.nombreEquipo.toLowerCase().includes(filterValue)
    );
  }

  // Getter para acceder al FormArray de equipos
  get equiposFormArray(): FormArray {
    return this.formCrearCliente.get('equipos') as FormArray;
  }

  // Método para agregar una nueva fila de equipo
  agregarEquipo() {
    const equipoFormGroup = this.fb.group({
      searchMaMoNom: [''],
    });

    this.equiposFormArray.push(equipoFormGroup);

    const index = this.equiposFormArray.length - 1;
    const control = equipoFormGroup.get('searchMaMoNom');

    // Asigna el observable de opciones filtradas a la posición correspondiente
    this.filteredOptionsList[index] = control!.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }



  // Método para eliminar una fila de equipo
  eliminarFila(index: number) {
    this.equiposFormArray.removeAt(index);
  }

  // Método para obtener los IDs de los equipos seleccionados
  obtenerIdEquipos(): number[] {
    return this.equiposFormArray.controls
      .map(control => control.value.searchMaMoNom?.idEquipo) // Extraer el idEquipo
      .filter(id => id != null); // Filtrar valores nulos
  }

  validarSoloNumeros(event: KeyboardEvent): boolean {
    const charCode = event.charCode;
    return charCode >= 48 && charCode <= 57;
  }

  displayFn(equipo: any): string {
    return equipo && equipo.marca ? `${equipo.marca} - ${equipo.nombreEquipo}` : '';
  }

}
