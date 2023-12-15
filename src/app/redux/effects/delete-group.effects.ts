import { Injectable } from '@angular/core';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';

import { ToastService } from '../../services/toast.service';
import {
  deleteGroupAction,
  deleteGroupSuccessAction,
  groupsErrorAction,
} from '../actions/groups.actions';
import { ManageGroupsService } from '../../services/manage-groups.service';
import { GroupDeletingRequestInterface } from '../../models/group-deleting-request.interface';

@Injectable()
export class DeleteGroupEffects {
  reg$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteGroupAction),
      switchMap((groupID: GroupDeletingRequestInterface) =>
        this.manageGroupsSrv.deleteGroup(groupID).pipe(
          mergeMap(() => {
            this.toastService.showSuccess('Group Deleted Success');
            return [deleteGroupSuccessAction(groupID)];
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
