import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cotizacion-cotizar',
  templateUrl: './cotizacion-cotizar.component.html',
  styleUrls: ['./cotizacion-cotizar.component.css']
})
export class CotizacionCotizarComponent implements OnInit{

  formCotizar!: FormGroup;
  idCotizacion!: number;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder)
  {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.idCotizacion = +paramMap.get('idCotizacion')!;
    });


    this.formCotizar = this.fb.group({
      precio: ['', {
        validators: [
          Validators.required
        ]
      }]
    });
  }

}
