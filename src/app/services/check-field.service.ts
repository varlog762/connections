import { Injectable } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';
import { Store } from '@ngrx/store';
import { emailDuplicationValidator } from '../validators/duplicated-email.validator';

@Injectable({
  providedIn: 'root',
})
export class CheckFieldService {
  constructor(private store: Store) {}

  isFieldInvalid(formGroup: FormGroup, fieldName: string): boolean | undefined {
    if (formGroup && fieldName) {
      return (
        formGroup.get(fieldName)?.invalid &&
        (formGroup.get(fieldName)?.dirty || formGroup.get(fieldName)?.touched)
      );
    }

    return true;
  }

  isFieldHasError(
    formGroup: FormGroup,
    fieldName: string,
    error: string
  ): boolean {
    if (formGroup && fieldName && error) {
      return !!formGroup.get(fieldName)?.errors?.[error];
    }

    return true;
  }

  emailDuplicationValidator(): ValidatorFn {
    return emailDuplicationValidator(this.store);
  }
}
