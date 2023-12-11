import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { BackendErrorsEnum } from '../../enums/backend-errors.enum';
import {
  loginAction,
  loginSuccessAction,
  authErrorAction,
} from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { LoginResponseInterface } from '../../models/login-response.interface';
import { LoginRequestInterface } from '../../models/login-request.interface';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap((formValue: LoginRequestInterface) =>
        this.authService.login(formValue).pipe(
          map((res: LoginResponseInterface) => {
            if (res) {
              const authData = {
                Authorization: `Bearer ${res.token}`,
                'rs-uid': res.uid,
                'rs-email': formValue.email,
              };

              const authDataString = JSON.stringify(authData);

              localStorage.setItem('currentUser', authDataString);

              this.toastService.showSuccess('Login successful');
              this.router.navigate(['/']);

              return loginSuccessAction({ payload: authData });
            }

            return authErrorAction({
              errorType: BackendErrorsEnum.UNKNOWN_ERROR,
              errorMessage: BackendErrorsEnum.UNKNOWN_ERROR,
              email: null,
            });
          }),
          catchError((err: HttpErrorResponse) => {
            const errorType =
              err.error && err.error.type
                ? err.error.type
                : BackendErrorsEnum.UNKNOWN_ERROR;
            const errorMessage =
              err.error && err.error.message
                ? err.error.message
                : BackendErrorsEnum.UNKNOWN_ERROR;

            this.toastService.showError(errorMessage);

            if (errorType === BackendErrorsEnum.LOGIN_NOT_FOUND) {
              return of(
                authErrorAction({
                  errorType,
                  errorMessage,
                  email: formValue.email,
                })
              );
            }

            return of(
              authErrorAction({ errorType, errorMessage, email: null })
            );
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {}
}
