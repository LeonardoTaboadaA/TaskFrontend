import { AbstractControl, ValidatorFn } from "@angular/forms";

export function fechaHoraNoPasada(): ValidatorFn {
  return (control: AbstractControl) => {
    if (!control.value) return null;

    const fechaHoraIngresada = new Date(control.value);
    const fechaHoraActual = new Date();

    if (fechaHoraIngresada <= fechaHoraActual) {
      return { fechaHoraNoPasada: true };
    }
    return null;
  };
}
