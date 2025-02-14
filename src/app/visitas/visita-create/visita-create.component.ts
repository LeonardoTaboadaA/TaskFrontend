import { VisitaService } from './../visita.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VisitaRequest } from '../visita.request';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';


@Component({
  selector: 'app-visita-create',
  templateUrl: './visita-create.component.html',
  styleUrls: ['./visita-create.component.css']
})
export class VisitaCreateComponent {
  errores: string[] = [];

  constructor(
      private router: Router,
      private visitaService:VisitaService,
      ) {}

  guardarVisita(visitaRequest : VisitaRequest){
      console.log(visitaRequest);
      this.visitaService.crearVisita(visitaRequest).subscribe(() => {
        this.router.navigate(['visitas']);

      }, (error) => this.errores = parsearErroresAPI(error));
    }
}
