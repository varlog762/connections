import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  registrationAction,
  registrationErrorAction,
  registrationSuccessAction
} from '../actions/auth.actions';
import { RegistrationRequestIntrface } from '../../models/registration-request.interface';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class RegistrationEffects {
  reg$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registrationAction),
      switchMap((formValue) =>
        this.authService.registration(formValue).pipe(
          mergeMap((res) => {
            console.log(res);
            return [registrationSuccessAction({ payload: res })]}),
          catchError((err: HttpErrorResponse) => {
            const errorType = err.error && err.error.type ? err.error.type : 'UnknownError';
            const errorMessage = err.error && err.error.message ? err.error.message : 'Unknown error occurred';
            return of(registrationErrorAction({ errorType, errorMessage }));
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}
}
