import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ToastService } from '../../services/toast.service';
import {
  updateUsernameShowMessageAction,
  updateUsernameSuccessAction,
} from '../actions/user-profile.actions';

@Injectable()
export class UpdateUsernameSuccessEffects {
  reg$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUsernameShowMessageAction),
      mergeMap(name => {
        this.toastService.showSuccess('Name Updated Success');

        return [updateUsernameSuccessAction(name)];
      })
    )
  );

  constructor(
    private actions$: Actions,
    private toastService: ToastService
  ) {}
}
