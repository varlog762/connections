import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password: string = control.value;

    if (password.length < 8) {
      return { lengthErr: true };
    }

    if (!/\d/.test(password)) {
      return { digitErr: true };
    }

    if (!/[a-z]/.test(password)) {
      return { lowercaseErr: true };
    }

    if (!/[A-Z]/.test(password)) {
      return { uppercaseErr: true };
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return { specialCharacterErr: true };
    }

    return null;
  };
}
