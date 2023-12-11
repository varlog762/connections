import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';

import { BackendErrorsEnum } from '../../enums/backend-errors.enum';
import { ToastService } from '../../services/toast.service';
import {
  loadProfileSuccessAction,
  loadUserProfileAction,
  profileErrorAction,
  testAction,
} from '../actions/user-profile.actions';
import { LoadUserProfileService } from '../../services/load-user-profile.service';
import { ProfileResponceInterface } from '../../models/profile-response-interface';
import { selectUserProfile } from '../selectors/user-profile.selectors';

@Injectable()
export class UserProfileEffects {
  profile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserProfileAction),
      withLatestFrom(this.store.pipe(select(selectUserProfile))),
      switchMap(([action, userProfile]) => {
        if (userProfile !== null) {
          this.toastService.showSuccess('Profile Load Successful');
          this.router.navigate(['/profile']);

          return of(testAction());
        } else {
          return this.loadUserProfileService.loadProfile().pipe(
            map((res: ProfileResponceInterface) => {
              this.toastService.showSuccess('Profile Load Successful');
              this.router.navigate(['/profile']);

              return loadProfileSuccessAction(res);
            }),
            catchError((err: HttpErrorResponse) => {
              const errorMessage =
                err.error && err.error.message
                  ? err.error.message
                  : err.message;

              this.toastService.showError(errorMessage);

              return of(profileErrorAction());
            })
          );
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private loadUserProfileService: LoadUserProfileService,
    private toastService: ToastService,
    private router: Router,
    private store: Store
  ) {}
}
