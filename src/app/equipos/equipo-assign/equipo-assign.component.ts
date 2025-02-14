import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { EquipoCreateComponent } from '../equipo-create/equipo-create.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-equipo-assign',
  templateUrl: './equipo-assign.component.html',
  styleUrls: ['./equipo-assign.component.css']
})
export class EquipoAssignComponent implements OnInit{
  @Input() parentForm!: FormGroup;
  @Output() equiposSeleccionados = new EventEmitter<number[]>(); // Emitirá los IDs seleccionados

  filteredOptionsList: Observable<any[]>[] = [];

  // Lista de equipos ahora vive dentro del componente
  equiposDisponibles = [
    { idEquipo: 1, marca: 'HP', modelo: 'Pavilion', nombreEquipo: 'Equipo 1' },
    { idEquipo: 2, marca: 'Dell', modelo: 'Inspiron', nombreEquipo: 'Equipo 2' },
    { idEquipo: 3, marca: 'Lenovo', modelo: 'ThinkPad', nombreEquipo: 'Equipo 3' },
    { idEquipo: 4, marca: 'Apple', modelo: 'MacBook Pro', nombreEquipo: 'Equipo 4' },
    { idEquipo: 5, marca: 'Asus', modelo: 'ZenBook', nombreEquipo: 'Equipo 5' },
  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
  }



  ngOnInit(): void {

    if (!this.parentForm.get('equipos')) {
      this.parentForm.addControl('equipos', this.fb.array([]));
    }
    this.agregarEquipo(); // Agregar una fila inicial
  }

  nuevoEquipo(){
    this.dialog.open(EquipoCreateComponent, {
      disableClose: true,
      width: "auto",
    }).afterClosed().subscribe(resultado => {

    });
  }

  get equiposFormArray(): FormArray {
    return this.parentForm.get('equipos') as FormArray;
  }

  agregarEquipo() {
    const equipoFormGroup = this.fb.group({
      searchMaMoNom: [''],
    });

    this.equiposFormArray.push(equipoFormGroup);

    const index = this.equiposFormArray.length - 1;
    const control = equipoFormGroup.get('searchMaMoNom');

    this.filteredOptionsList[index] = control!.valueChanges.pipe(
      startWith(''),
      map(value => {
        if (typeof value === 'string') {
          return this._filter(value);
        }
        return this.equiposDisponibles; // Si es un objeto, no filtrar
      })
    );

    control!.valueChanges.subscribe((selectedValue: any) => {
      console.log("Valor seleccionado en Autocomplete:", selectedValue);

      if (typeof selectedValue === 'object' && selectedValue?.idEquipo) {
        control?.setValue(selectedValue, { emitEvent: false }); // Guarda el objeto completo
        this.emitirEquiposSeleccionados(); // Vuelve a emitir los IDs actualizados
      }
    });
  }


  eliminarFila(index: number) {
    this.equiposFormArray.removeAt(index);
    this.emitirEquiposSeleccionados(); // Emitir los cambios
  }

  private _filter(value: any): any[] {
    if (!value) {
      return this.equiposDisponibles; // Si es nulo, devolver todos los equipos
    }

    // Verificar si value es un objeto y extraer el string si es necesario
    const filterValue = typeof value === 'string'
        ? value.toLowerCase()
        : typeof value === 'object' && value.searchMaMoNom
          ? value.searchMaMoNom.toLowerCase()
          : '';

    console.log("Valor filtrado:", filterValue);

    return this.equiposDisponibles.filter(option =>
      option.marca.toLowerCase().includes(filterValue) ||
      option.nombreEquipo.toLowerCase().includes(filterValue)
    );
  }

  displayFn(equipo: any): string {
    return equipo && equipo.marca ? `${equipo.marca} - ${equipo.nombreEquipo}` : '';
  }

  emitirEquiposSeleccionados() {
    console.log("Valores actuales en equiposFormArray:", this.equiposFormArray.value);

    const ids = this.equiposFormArray.controls
      .map(control => control.value.searchMaMoNom?.idEquipo)
      .filter(id => id != null);

    console.log("IDs seleccionados en EquipoAssignComponent:", ids);
    this.equiposSeleccionados.emit(ids);
  }

}
