import { Injectable } from '@angular/core';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';

import { ToastService } from '../../services/toast.service';
import {
  groupsErrorAction,
  loadGroupsAction,
  loadGroupsSuccessAction,
} from '../actions/groups.actions';
import { ManageGroupsService } from '../../services/manage-groups.service';
import { GroupResponseInterface } from '../../models/group-response.interface';
import { TimerService } from '../../services/timer.service';

@Injectable()
export class LoadGroupsEffects {
  reg$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadGroupsAction),
      switchMap(({ isLoadManual }) =>
        this.manageGroupsSrv.loadGroups().pipe(
          mergeMap(res => {
            const groups = res.Items.map((group: GroupResponseInterface) =>
              this.manageGroupsSrv.modifyGroup(group)
            );

            if (res) {
              this.toastService.showSuccess('Groups Loaded Success');
            }

            if (isLoadManual) {
              this.timerSrv.startGroupsTimer();
            }

            return [loadGroupsSuccessAction({ groups })];
          }),
          catchError((err: HttpErrorResponse) => {
            const errorType =
              err.error && err.error.type ? err.error.type : err.type;
            const errorMessage =
              err.error && err.error.message ? err.error.message : err.message;

            this.toastService.showError(errorMessage);

            return of(groupsErrorAction({ errorType, errorMessage }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private toastService: ToastService,
    private manageGroupsSrv: ManageGroupsService,
    private timerSrv: TimerService
  ) {}
}
