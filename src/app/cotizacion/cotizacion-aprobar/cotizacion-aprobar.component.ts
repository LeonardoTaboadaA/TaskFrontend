import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cotizacion-aprobar',
  templateUrl: './cotizacion-aprobar.component.html',
  styleUrls: ['./cotizacion-aprobar.component.css']
})
export class CotizacionAprobarComponent implements OnInit{
  formAprobar!: FormGroup;
  idCotizacion!: number;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder)
  {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.idCotizacion = +paramMap.get('idCotizacion')!;
    });

  }

}
