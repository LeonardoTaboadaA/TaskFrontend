import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ClienteCreateComponent } from 'src/app/clientes/cliente-create/cliente-create.component';

@Component({
  selector: 'app-cotizacion-create',
  templateUrl: './cotizacion-create.component.html',
  styleUrls: ['./cotizacion-create.component.css']
})
export class CotizacionCreateComponent implements OnInit{

  ngOnInit(): void {

  }

  formCrearCotizacion: FormGroup;
  filteredOptions: Observable<any[]>;
  imagenPrincipal: File | null = null;
  imagenSecundaria: File | null = null;

  // Lista de ejemplo de RUCs y Razones Sociales
  options = [
    { ruc: '12345678901', razonSocial: 'Empresa 1' },
    { ruc: '23456789012', razonSocial: 'Empresa 2' },
    { ruc: '34567890123', razonSocial: 'Empresa 3' }
  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog)
  {
    this.formCrearCotizacion = this.fb.group({
      searchRucRazSo: ['', [Validators.required]],
      equipo: ['', [Validators.required]]
    });

    // Filtro de opciones basadas en el texto ingresado
    this.filteredOptions = this.formCrearCotizacion.get('searchRucRazSo')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  listaEquipos: string[] = [
    'Ventilador',
    'Refrigerador',
    'Microondas'
  ];

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.ruc.toLowerCase().includes(filterValue) ||
      option.razonSocial.toLowerCase().includes(filterValue)
    );
  }

  nuevaAtencion(){

  }

  nuevoEquipo(){

  }

  guardarCotizacion(){

  }
  nuevoCliente(){
    this.dialog.open(ClienteCreateComponent, {
      disableClose: true,
      width: "auto"
    })
  }

  onFileSelected(event: Event, tipo: 'principal' | 'secundaria') {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (tipo === 'principal') {
        this.imagenPrincipal = file;
      } else {
        this.imagenSecundaria = file;
      }
    }
  }


  validarTexto(event: KeyboardEvent): boolean {
    const tecla = event.key;
    if (tecla === 'Backspace') return true;
    const patron = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/;
    return patron.test(tecla);
  }
}
