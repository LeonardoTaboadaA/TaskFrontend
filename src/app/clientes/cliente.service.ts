import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClienteRequest } from './cliente.request';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  apiURL = environment.apiUrl + 'clientes'

  crearCliente(clienteRequest: ClienteRequest): Observable<any> {
    return this.http.post<any>(this.apiURL + '/crear', clienteRequest);
  }

}
