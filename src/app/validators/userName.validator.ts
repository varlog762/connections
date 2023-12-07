import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export function usernameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    if (!/^[a-zA-Z\s]*$/.test(value)) {
      return { 'usernameValidator': true };
    }

    return null;
  };
}
