import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { ValidacionService } from 'src/app/utilidades/validaciones/validacion.service';

@Component({
  selector: 'app-visita-atender',
  templateUrl: './visita-atender.component.html',
  styleUrls: ['./visita-atender.component.css']
})
export class VisitaAtenderComponent implements OnInit {
  formAtender!: FormGroup;
  idAtencion!: number;
  filteredOptionsList: Observable<any[]>[] = [];

  equiposDisponibles = [
    { idEquipo: 1, marca: 'HP', modelo: 'Pavilion', nombreEquipo: 'Equipo 1' },
    { idEquipo: 2, marca: 'Dell', modelo: 'Inspiron', nombreEquipo: 'Equipo 2' },
    { idEquipo: 3, marca: 'Lenovo', modelo: 'ThinkPad', nombreEquipo: 'Equipo 3' },
    { idEquipo: 4, marca: 'Apple', modelo: 'MacBook Pro', nombreEquipo: 'Equipo 4' },
    { idEquipo: 5, marca: 'Asus', modelo: 'ZenBook', nombreEquipo: 'Equipo 5' },
  ];

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private validacionService: ValidacionService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.idAtencion = +paramMap.get('idAtencion')!;
    });

    this.formAtender = this.fb.group({
      precio: ['', Validators.required],
      equipos: this.fb.array([]) // Array para manejar equipos
    });

    this.agregarEquipo(); // Agregar una fila inicial
  }

  get equiposFormArray(): FormArray {
    return this.formAtender.get('equipos') as FormArray;
  }

  agregarEquipo() {
    const equipoFormGroup = this.fb.group({
      searchMaMoNom: ['', Validators.required],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      diagnostico: ['', [Validators.required]]
    });

    this.equiposFormArray.push(equipoFormGroup);

    const index = this.equiposFormArray.length - 1;
    const control = equipoFormGroup.get('searchMaMoNom');

    this.filteredOptionsList[index] = control!.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? this._filter(value) : this.equiposDisponibles))
    );

    control!.valueChanges.subscribe((selectedValue: any) => {
      if (typeof selectedValue === 'object' && selectedValue?.idEquipo) {
        control?.setValue(selectedValue, { emitEvent: false });
      }
    });
  }

  eliminarFila(index: number) {
    this.equiposFormArray.removeAt(index);
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.equiposDisponibles.filter(option =>
      option.marca.toLowerCase().includes(filterValue) ||
      option.nombreEquipo.toLowerCase().includes(filterValue)
    );
  }

  displayFn(equipo: any): string {
    return equipo && equipo.marca ? `${equipo.marca} - ${equipo.nombreEquipo}` : '';
  }

  nuevaAtencion() {
    this.agregarEquipo();
  }

  validarSoloNumeros(event: KeyboardEvent): boolean {
    return this.validacionService.validarSoloNumeros(event);
  }

  obtenerErrorCampoEquipo(index: number): string {
    const campoEquipo = this.equiposFormArray.at(index).get('searchMaMoNom');

    if (campoEquipo?.hasError('required')) {
      return 'Este campo es requerido';
    }

    return '';
  }

  obtenerErrorCampoCantidad(index: number): string {
    const campoCantidad = this.equiposFormArray.at(index).get('cantidad');

    if (campoCantidad?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (campoCantidad?.hasError('min')) {
      return 'Debe tener por lo menos una unidad';
    }

    return '';
  }

  obtenerErrorCampoDiagnostico(index: number): string {
    const campoDiagnostico = this.equiposFormArray.at(index).get('diagnostico');

    if (campoDiagnostico?.hasError('required')) {
      return 'Este campo es requerido';
    }

    return '';
  }


}
