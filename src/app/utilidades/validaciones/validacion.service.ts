import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  constructor() { }

  validarSoloLetras(event: KeyboardEvent): boolean {
    const tecla = event.key;
    if (tecla === 'Backspace') return true; // Permitir retroceso
    const patron = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/; // Solo letras y espacios
    return patron.test(tecla);
  }
}
