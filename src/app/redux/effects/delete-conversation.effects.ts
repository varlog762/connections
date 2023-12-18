import { Injectable } from '@angular/core';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';

import { ToastService } from '../../services/toast.service';
import {
  conversationsErrorAction,
  deleteConversationAction,
  deleteConversationSuccessAction,
} from '../actions/conversations.actions';
import { ConversationsService } from '../../services/conversations.service';
import { Router } from '@angular/router';

@Injectable()
export class DeleteConversationEffects {
  reg$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteConversationAction),
      switchMap(({ conversationID }) =>
        this.conversationsSrv.deleteConversation(conversationID).pipe(
          mergeMap(() => {
            this.toastService.showSuccess('Conversation Deleted Success');
            this.router.navigate(['/']);
            return [
              deleteConversationSuccessAction({
                conversationID: conversationID,
              }),
            ];
          }),
          catchError((err: HttpErrorResponse) => {
            const errorType =
              err.error && err.error.type ? err.error.type : err.type;
            const errorMessage =
              err.error && err.error.message ? err.error.message : err.message;

            this.toastService.showError(errorMessage);

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
    private router: Router
  ) {}
}
