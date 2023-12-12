import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';

import { ToastService } from '../../services/toast.service';
import {
  hasBeenLoadedAction,
  loadProfileSuccessAction,
  loadUserProfileAction,
  profileErrorAction,
} from '../actions/user-profile.actions';
import { LoadUserProfileService } from '../../services/load-user-profile.service';
import { ProfileResponceInterface } from '../../models/profile-response-interface';
import { selectUserProfile } from '../selectors/user-profile.selectors';
import { UserProfileInterface } from '../../models/user-profile.interface';

@Injectable()
export class UserProfileEffects {
  profile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserProfileAction),
      withLatestFrom(this.store.pipe(select(selectUserProfile))),
      switchMap(([action, userProfile]) => {
        if (userProfile) {
          this.toastService.showSuccess('Profile Load Successful');
          this.router.navigate(['/profile']);

          return of(hasBeenLoadedAction());
        } else {
          return this.loadUserProfileService.loadProfile().pipe(
            map((res: ProfileResponceInterface) => {
              this.toastService.showSuccess('Profile Load Successful');
              this.router.navigate(['/profile']);

              const userProfile: UserProfileInterface = {
                email: res.email.S,
                uid: res.uid.S,
                name: res.name.S,
                createdAt: res.createdAt.S,
              };

              return loadProfileSuccessAction(userProfile);
            }),
            catchError((err: HttpErrorResponse) => {
              const errorType =
                err.error && err.error.type ? err.error.type : err.type;
              const errorMessage =
                err.error && err.error.message
                  ? err.error.message
                  : err.message;

              this.toastService.showError(errorMessage);

              return of(profileErrorAction({ errorType, errorMessage }));
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
