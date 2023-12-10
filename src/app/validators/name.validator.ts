import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const name: string = control.value;

    if (!/^[a-zA-Z\s]*$/.test(name)) {
      return { nameErr: true };
    }

    return null;
  };
}
