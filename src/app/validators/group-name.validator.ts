import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function groupNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const name: string = control.value;

    if (/^[a-zA-Z0-9\s]*$/.test(name)) {
      return null;
    }

    return { specialCharacterErr: true };
  };
}
