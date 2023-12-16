import { Injectable } from '@angular/core';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';

import { ToastService } from '../../services/toast.service';
import { TimerService } from '../../services/timer.service';
import {
  loadCompanionsSuccessAction,
  loadPeopleAction,
  peopleErrorAction,
} from '../actions/people.actions';
import { ManagePeopleService } from '../../services/manage-people.service';
import { CompanionItemResponseInterface } from '../../models/companion-item-response.interface';

@Injectable()
export class LoadCompanionsEffects {
  reg$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPeopleAction),
      switchMap(({ isLoadManual }) =>
        this.managePeopleSrv.loadCompanions().pipe(
          mergeMap(res => {
            const companions = res.Items.map(
              (companion: CompanionItemResponseInterface) =>
                this.managePeopleSrv.modifyCompanion(companion)
            );

            if (res) {
              this.toastService.showCompanionsSuccess(
                'Active Conversations Loaded Success'
              );
            }

            return [loadCompanionsSuccessAction({ companions })];
          }),
          catchError((err: HttpErrorResponse) => {
            const errorType =
              err.error && err.error.type ? err.error.type : err.type;
            const errorMessage =
              err.error && err.error.message ? err.error.message : err.message;

            this.toastService.showCompanionsError(errorMessage);

            return of(peopleErrorAction({ errorType, errorMessage }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private toastService: ToastService,
    private managePeopleSrv: ManagePeopleService,
    private timerSrv: TimerService
  ) {}
}
