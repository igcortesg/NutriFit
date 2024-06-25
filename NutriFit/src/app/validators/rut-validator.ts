import { AbstractControl, ValidationErrors } from '@angular/forms';

export function rutValidator(control: AbstractControl): ValidationErrors | null {
  const rut = control.value;
  if (!rut) {
    return null;
  }

  const cleanRut = rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase();
  if (cleanRut.length < 2) {
    return { invalidRut: true };
  }

  const body = cleanRut.slice(0, -1);
  const verifier = cleanRut.slice(-1);

  let sum = 0;
  let multiplier = 2;

  for (let i = 1; i <= body.length; i++) {
    sum += parseInt(body[body.length - i], 10) * multiplier;
    multiplier = multiplier < 7 ? multiplier + 1 : 2;
  }

  const mod = sum % 11;
  const computedVerifier = mod === 0 ? '0' : mod === 1 ? 'K' : (11 - mod).toString();

  return verifier === computedVerifier ? null : { invalidRut: true };
}
