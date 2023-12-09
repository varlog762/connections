import { Injectable } from '@angular/core';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';

import { BackendErrors } from '../../enums/backend-errors.enum';
import {
  regRedirectAndShowMessageAction,
  registrationAction,
  registrationErrorAction,
  registrationSuccessAction
} from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Injectable()
export class RegistrationEffects {
  reg$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registrationAction),
      switchMap((formValue) =>
        this.authService.registration(formValue).pipe(
          mergeMap((res) => {
            
            return [
              registrationSuccessAction({ payload: res }),
              regRedirectAndShowMessageAction(),
            ]}),
          catchError((err: HttpErrorResponse) => {
            const errorType = err.error && err.error.type ? err.error.type : BackendErrors.UNKNOWN_ERROR;
            const errorMessage = err.error && err.error.message ? err.error.message : BackendErrors.UNKNOWN_ERROR;

            this.toastService.showError(errorMessage);

            console.log(formValue);

            if (errorType === BackendErrors.DUPLICATED_EMAILS) {
              return of(registrationErrorAction({ errorType, errorMessage, email: formValue.email }));
            }

            return of(registrationErrorAction({ errorType, errorMessage, email: null}));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions, private authService: AuthService, private toastService: ToastService) {}
}
