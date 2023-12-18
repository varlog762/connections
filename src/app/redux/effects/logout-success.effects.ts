import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {
  authStateClearAction,
  logoutShowMessageAndClearState,
} from '../actions/auth.actions';
import { ToastService } from '../../services/toast.service';
import { userProfileStateClearAction } from '../actions/user-profile.actions';
import { DeleteCookiesService } from '../../services/delete-cookies.service';
import { groupsStateClearAction } from '../actions/groups.actions';
import { peopleStateClearAction } from '../actions/people.actions';
import { conversationsStateClearAction } from '../actions/conversations.actions';

@Injectable()
export class LogoutSuccessEffects {
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutShowMessageAndClearState),
      mergeMap(() => {
        localStorage.clear();
        sessionStorage.clear();

        this.toastService.showSuccess('Logout Success');
        this.router.navigate(['/signin']);

        return [
          authStateClearAction(),
          userProfileStateClearAction(),
          groupsStateClearAction(),
          peopleStateClearAction(),
          conversationsStateClearAction(),
        ];
      })
    )
  );

  constructor(
    private actions$: Actions,
    private toastService: ToastService,
    private router: Router,
    private delCookiesSrv: DeleteCookiesService
  ) {}
}
