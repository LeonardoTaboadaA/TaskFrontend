import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VisitaRequest } from './visita.request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  constructor(private http:HttpClient) { }

    apiURL = environment.apiUrl + 'visitas'

    crearVisita(visitaRequest: VisitaRequest): Observable<any> {
      return this.http.post<any>(this.apiURL + '/crear', visitaRequest);
    }

}
