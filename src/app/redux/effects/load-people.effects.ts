import { Injectable } from '@angular/core';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { ToastService } from '../../services/toast.service';
import { TimerService } from '../../services/timer.service';
import {
  loadCompanionsAction,
  loadPeopleAction,
  loadPeopleSuccessAction,
  peopleErrorAction,
} from '../actions/people.actions';
import { ManagePeopleService } from '../../services/manage-people.service';
import { PersonItemResponseInterface } from '../../models/person-item-response.interface';

@Injectable()
export class LoadPeopleEffects {
  reg$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPeopleAction),
      switchMap(({ isLoadManual }) =>
        this.managePeopleSrv.loadPeople().pipe(
          mergeMap(res => {
            const people = res.Items.map(
              (person: PersonItemResponseInterface) =>
                this.managePeopleSrv.modifyPerson(person)
            );

            if (res) {
              this.toastService.showPersonSuccess('People Loaded Success');
            }

            if (isLoadManual) {
              this.store.dispatch(loadCompanionsAction());
              this.timerSrv.startTimer();
            }

            return [loadPeopleSuccessAction({ people })];
          }),
          catchError((err: HttpErrorResponse) => {
            const errorType =
              err.error && err.error.type ? err.error.type : err.type;
            const errorMessage =
              err.error && err.error.message ? err.error.message : err.message;

            this.toastService.showPersonError(errorMessage);

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
    private timerSrv: TimerService,
    private store: Store
  ) {}
}
