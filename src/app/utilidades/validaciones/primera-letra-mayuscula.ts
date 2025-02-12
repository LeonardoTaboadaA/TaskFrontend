import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function primeraLetraMayuscula(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const valor = <string>control.value;

        // Si no hay valor o la cadena está vacía, la validación es exitosa
        if (!valor || valor.length === 0) {
          return null; // Retorna null en lugar de undefined
        }

        const primeraLetra = valor[0];
        if (primeraLetra !== primeraLetra.toUpperCase()) {
          // Retorna un objeto de errores si la primera letra no es mayúscula
          return {
            primeraLetraMayuscula: {
              mensaje: 'La primera letra debe ser mayúscula'
            }
          };
        }

        // Retorna null si la validación es exitosa
        return null;
    };
}
