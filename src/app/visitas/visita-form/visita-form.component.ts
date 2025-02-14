import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VisitaRequest } from '../visita.request';
import { primeraLetraMayuscula } from 'src/app/utilidades/validaciones/primera-letra-mayuscula';
import { fechaHoraNoPasada } from 'src/app/utilidades/validaciones/fecha-hora-no-pasada';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-visita-form',
  templateUrl: './visita-form.component.html',
  styleUrls: ['./visita-form.component.css']
})
export class VisitaFormComponent implements OnInit{
  formCrearVisita!: FormGroup;
  filteredOptions!: Observable<any[]>;

  constructor(private fb: FormBuilder)
  {

  }

  @Input()
  errores: string[] = [];

  @Output()
  onSubmit: EventEmitter<VisitaRequest> = new EventEmitter<VisitaRequest>();

  options = [
    { idCliente: 1, ruc: '12345678901', razonSocial: 'Empresa 1' },
    { idCliente: 2, ruc: '23456789012', razonSocial: 'Empresa 2' },
    { idCliente: 3, ruc: '34567890123', razonSocial: 'Empresa 3' }
  ];




  ngOnInit(): void {
    this.formCrearVisita = this.fb.group({
      buscarRucRazSo: ['', {
        validators: [
          Validators.required,
        ]
      }],
      asunto: ['', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
          primeraLetraMayuscula()
        ]
      }],

      fhvisita: ['', {
        validators: [
          Validators.required,
          fechaHoraNoPasada()
        ]
      }],

      idUsuario: ['', {
        validators: [
          Validators.required
        ]
      }],
      equipos: this.fb.array([]),
      idEquipos: [[]]

    });

    this.filteredOptions = this.formCrearVisita.get('buscarRucRazSo')!.valueChanges.pipe(
      startWith(''),
      map(value => {
        if (typeof value === 'string') {
          return this._filter(value);
        }
        return this.options;
      })
    );


  }

  actualizarEquipos(ids: number[]) {
    console.log("Actualizando idEquipos en VisitaFormComponent:", ids);
    this.formCrearVisita.patchValue({ idEquipos: ids });
  }

  guardarVisita() {
    const formValue = this.formCrearVisita.value;


    const clienteSeleccionado = formValue.buscarRucRazSo;

    // Asegurar que `idCliente` viene del objeto seleccionado
    const idCliente = clienteSeleccionado ? clienteSeleccionado.idCliente : null;

    const visitaRequest: VisitaRequest = {
      asunto: formValue.asunto,
      fhvisita: formValue.fhvisita,
      idUsuario: formValue.numeroCelular,
      idCliente: idCliente,
      idEquipos: formValue.idEquipos
    };

    this.onSubmit.emit(visitaRequest);
    console.log(visitaRequest);
  }

  obtenerErrorCampoAsunto(){
    const campoAsunto = this.formCrearVisita.get('asunto');
    if(campoAsunto?.hasError('required'))
    {
      return 'Este campo es requerido';
    }
    if (campoAsunto?.hasError('minlength')) {
      return 'Debe tener mínimo 3 caracteres';
    }
    if (campoAsunto?.hasError('maxlength')) {
      return 'Debe tener máximo 255 caracteres';
    }
    if (campoAsunto?.hasError('primeraLetraMayuscula')) {
      return campoAsunto.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }

  obtenerErrorCampoFHVisita() {
    const campoFHVisita = this.formCrearVisita.get('fhvisita');
    if (campoFHVisita?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (campoFHVisita?.hasError('fechaHoraNoPasada')) {
      return 'La fecha y hora deben ser futuras';
    }
    return '';
  }

  obtenerErrorCampoIdUsuario() {
    const campoIdUsuario = this.formCrearVisita.get('idUsuario');
    if (campoIdUsuario?.hasError('required')) {
      return 'Este campo es requerido';
    }

    return '';
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    console.log(filterValue)

    return this.options.filter(option =>
      option.ruc.toLowerCase().includes(filterValue) ||
      option.razonSocial.toLowerCase().includes(filterValue)
    );
  }

  displayFn(cliente: any): string {
    return cliente && cliente.ruc ? `${cliente.ruc} - ${cliente.razonSocial}` : '';
  }
}
