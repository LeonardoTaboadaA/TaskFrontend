import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EquipoRequest } from './equipo.request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http:HttpClient) { }

  apiURL = environment.apiUrl + 'equipos'

  crearEquipo(equipoRequest: EquipoRequest): Observable<any> {
    return this.http.post<any>(this.apiURL + '/crear', equipoRequest);
  }

}
