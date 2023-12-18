import { Injectable } from '@angular/core';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';

import { ToastService } from '../../services/toast.service';

import { peopleErrorAction } from '../actions/people.actions';
import { ConversationIdResponseInterface } from '../../models/conversation-id-response.interface';
import { ConversationsService } from '../../services/conversations.service';
import {
  createConversationAction,
  createConversationSuccessAction,
} from '../actions/conversations.actions';
import { Router } from '@angular/router';

@Injectable()
export class CreateConversationEffects {
  conversation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createConversationAction),
      switchMap(({ payload }) =>
        this.conversationsSrv.createConversation(payload).pipe(
          mergeMap(({ conversationID }: ConversationIdResponseInterface) => {
            if (conversationID) {
              this.toastService.showSuccess('Conversation Created Success');
              this.router.navigate(['conversation', conversationID]);
            }

            return [
              createConversationSuccessAction({
                payload: { id: conversationID, companionID: payload },
              }),
            ];
          }),
          catchError((err: HttpErrorResponse) => {
            const errorType =
              err.error && err.error.type ? err.error.type : err.type;
            const errorMessage =
              err.error && err.error.message ? err.error.message : err.message;

            this.toastService.showError(errorMessage);

            return of(peopleErrorAction({ errorType, errorMessage }));
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
