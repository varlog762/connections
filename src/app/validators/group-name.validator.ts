import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function groupNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const name: string = control.value;

    if (/[!@#$%^&*(),.?":{}|<>]/.test(name)) {
      return { specialCharacterErr: true };
    }

    return null;
  };
}
