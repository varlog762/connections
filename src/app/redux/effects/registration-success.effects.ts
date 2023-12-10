import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  regRedirectAndShowMessageAction,
  regRedirectionSuccessAction,
} from '../actions/auth.actions';
import { ToastService } from '../../services/toast.service';

@Injectable()
export class RegistrationSuccessEffects {
  reg$ = createEffect(() =>
    this.actions$.pipe(
      ofType(regRedirectAndShowMessageAction),
      mergeMap(() => {
        this.router.navigate(['/signin']);
        this.toastService.showSuccess('Registration successful');

        return [regRedirectionSuccessAction()];
      })
    )
  );

  constructor(
    private actions$: Actions,
    private toastService: ToastService,
    private router: Router
  ) {}
}
