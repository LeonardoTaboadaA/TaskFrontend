import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioRequest } from './usuario.request';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  apiURL = environment.apiUrl + 'usuarios'

  crearUsuario(usuarioRequest: UsuarioRequest): Observable<any> {
    return this.http.post<any>(this.apiURL + '/crear', usuarioRequest);
  }
}
