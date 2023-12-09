import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Store } from '@ngrx/store';
import { duplicatedEmailsSelector } from '../redux/selectors/auth.selectors';
import { take } from 'rxjs/operators';

export function emailDuplicationValidator(store: Store): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email: string = control.value;

    let duplicatedEmails: (string | null)[] = [];

    store.select(duplicatedEmailsSelector).pipe(take(1)).subscribe((emails) => {
      duplicatedEmails = emails || [];
    });

    const isDuplicated = duplicatedEmails.includes(email);

    return isDuplicated ? { emailDuplicated: true } : null;
  };
}
