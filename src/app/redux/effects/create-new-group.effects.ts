import { Injectable } from '@angular/core';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';

import { ToastService } from '../../services/toast.service';
import {
  createGroupSuccessAction,
  createNewGroupAction,
  groupsErrorAction,
  hideFormAction,
} from '../actions/groups.actions';
import { ManageGroupsService } from '../../services/manage-groups.service';
import { NewGroupResponseInterface } from '../../models/new-group-response.interface';

@Injectable()
export class CreateNewGroupEffects {
  reg$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createNewGroupAction),
      switchMap(({ payload }) =>
        this.manageGroupsSrv.createNewGroup({ name: payload.name }).pipe(
          mergeMap((res: NewGroupResponseInterface) => {
            if (res) {
              this.toastService.showSuccess('Group Created Success');
            }

            const newGroup = this.manageGroupsSrv.createNewGroupObject(
              res,
              payload.name
            );

            return [
              createGroupSuccessAction({ payload: newGroup }),
              hideFormAction(),
            ];
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
    private manageGroupsSrv: ManageGroupsService
  ) {}
}
