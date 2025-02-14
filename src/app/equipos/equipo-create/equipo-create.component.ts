import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EquipoService } from '../equipo.service';
import { EquipoRequest } from '../equipo.request';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-equipo-create',
  templateUrl: './equipo-create.component.html',
  styleUrls: ['./equipo-create.component.css']
})
export class EquipoCreateComponent {
  errores: string[] = [];

  constructor(
    private router: Router,
    private equipoService:EquipoService,
    public dialogoReferencia: MatDialogRef<EquipoCreateComponent>) {}

  guardarEquipo(equipoRequest : EquipoRequest){
    this.equipoService.crearEquipo(equipoRequest).subscribe(() => {
      this.dialogoReferencia.close();
    }, (error) => this.errores = parsearErroresAPI(error));
  }
}
