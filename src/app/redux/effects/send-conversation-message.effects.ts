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
  sendConversationMessageAction,
  sendConversationMessageSuccessAction,
} from '../actions/conversations.actions';

@Injectable()
export class SendConversationMessageEffects {
  reg$ = createEffect(() =>
    this.actions$.pipe(
      ofType(sendConversationMessageAction),
      switchMap(({ payload }) =>
        this.conversationsSrv
          .sendMessage({
            conversationID: payload.conversationID,
            message: payload.message,
          })
          .pipe(
            mergeMap(() => {
              return [
                loadConversationHistoryAction({
                  payload: {
                    conversationID: payload.conversationID,
                    since: payload.since,
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
    private conversationsSrv: ConversationsService
  ) {}
}
