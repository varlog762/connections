import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function usernameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const { value } = control;

    if (!/^[a-zA-Z\s]*$/.test(value)) {
      return { usernameValidator: true };
    }

    return null;
  };
}
