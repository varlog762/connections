import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { debounceTime, switchMap, take } from 'rxjs/operators';
import { selectDuplicatedEmails } from '../redux/selectors/auth.selectors';

export function emailDuplicationValidator(store: Store): ValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const email: string = control.value;

    return store.select(selectDuplicatedEmails).pipe(
      take(1),
      switchMap(duplicatedEmails => {
        const isDuplicated = duplicatedEmails.includes(email);

        return of(isDuplicated ? { emailDuplicated: true } : null);
      }),
      debounceTime(300)
    );
  };
}
