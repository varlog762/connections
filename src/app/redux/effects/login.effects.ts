import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';

import { BackendErrors } from '../../enums/backend-errors.enum';
import {
  loginAction,
  loginSuccessAction,
  regRedirectAndShowMessageAction,
  registrationAction,
  authErrorAction,
  registrationSuccessAction,
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
            return loginSuccessAction({
              payload: {
                token: res.token,
                uid: res.uid,
                email: formValue.email,
              },
            });
          }),
          // return [
          //   registrationSuccessAction({ payload: res }),
          //   regRedirectAndShowMessageAction(),
          // ]}),
          catchError((err: HttpErrorResponse) => {
            const errorType =
              err.error && err.error.type
                ? err.error.type
                : BackendErrors.UNKNOWN_ERROR;
            const errorMessage =
              err.error && err.error.message
                ? err.error.message
                : BackendErrors.UNKNOWN_ERROR;

            this.toastService.showError(errorMessage);

            if (errorType === BackendErrors.DUPLICATED_EMAILS) {
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
    private toastService: ToastService
  ) {}
}
