import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ToastService } from '../../services/toast.service';
import {
  nameSetFalseAction,
  profileErrorAction,
  updateUsernameAction,
  updateUsernameShowMessageAction,
} from '../actions/user-profile.actions';
import { UpdateProfileService } from '../../services/update-profile-username.service';

@Injectable()
export class UpdateUsernameEffects {
  profile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUsernameAction),
      switchMap(({ payload }) =>
        this.UpdateProfileService.updateName({ name: payload }).pipe(
          mergeMap(() => {
            return [
              updateUsernameShowMessageAction({ name: payload }),
              nameSetFalseAction(),
            ];
          }),
          catchError((err: HttpErrorResponse) => {
            console.log(err.type);
            const errorType =
              err.error && err.error.type ? err.error.type : err.type;
            const errorMessage =
              err.error && err.error.message ? err.error.message : err.message;

            this.toastService.showError(errorMessage);
            console.log(err);
            return of(profileErrorAction({ errorType, errorMessage }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private UpdateProfileService: UpdateProfileService,
    private toastService: ToastService
  ) {}
}
