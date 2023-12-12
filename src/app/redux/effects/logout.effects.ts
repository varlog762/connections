import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ToastService } from '../../services/toast.service';
import { profileErrorAction } from '../actions/user-profile.actions';
import {
  doLogoutAction,
  logoutShowMessageAndClearState,
} from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class LogoutEffects {
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(doLogoutAction),
      switchMap(() =>
        this.authService.logout().pipe(
          mergeMap(() => {
            return [logoutShowMessageAndClearState()];
          }),
          catchError((err: HttpErrorResponse) => {
            const errorType =
              err.error && err.error.type ? err.error.type : err.type;
            const errorMessage =
              err.error && err.error.message ? err.error.message : err.message;

            this.toastService.showError(errorMessage);

            return of(profileErrorAction({ errorType, errorMessage }));
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
