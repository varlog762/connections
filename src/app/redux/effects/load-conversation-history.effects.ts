import { Injectable } from '@angular/core';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';

import { ToastService } from '../../services/toast.service';
import { ConversationsService } from '../../services/conversations.service';
import {
  conversationsErrorAction,
  loadConversationHistoryAction,
  loadHistorySuccessAction,
} from '../actions/conversations.actions';
import { TimerService } from '../../services/timer.service';

@Injectable()
export class LoadConversationHistoryEffects {
  reg$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadConversationHistoryAction),
      switchMap(({ payload }) =>
        this.conversationsSrv
          .loadConversationHistory(payload.conversationID, payload.since)
          .pipe(
            mergeMap(res => {
              const hystory = res.Items.map(message =>
                this.conversationsSrv.modifyMessage(message)
              );

              if (payload.isLoadManual) {
                this.timerSrv.startConversationTimer();
              }

              return [
                loadHistorySuccessAction({
                  payload: {
                    conversationID: payload.conversationID,
                    messages: hystory,
                  },
                }),
              ];
            }),
            catchError((err: HttpErrorResponse) => {
              const errorType =
                err.error && err.error.type ? err.error.type : err.type;
              const errorMessage =
                err.error && err.error.message
                  ? err.error.message
                  : err.message;

              this.toastService.showConversationsError(errorMessage);

              return of(conversationsErrorAction({ errorType, errorMessage }));
            })
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private toastService: ToastService,
    private conversationsSrv: ConversationsService,
    private timerSrv: TimerService
  ) {}
}
