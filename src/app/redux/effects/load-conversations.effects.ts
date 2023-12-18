import { Injectable } from '@angular/core';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';

import { ToastService } from '../../services/toast.service';
import { loadPeopleAction, peopleErrorAction } from '../actions/people.actions';
import { ManagePeopleService } from '../../services/manage-people.service';
import {
  attemptToLoadConversationsAction,
  loadConversationsSuccessAction,
} from '../actions/conversations.actions';
import { ConversationsService } from '../../services/conversations.service';

@Injectable()
export class LoadConversationsEffects {
  reg$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPeopleAction),
      switchMap(() =>
        this.conversationsSrv.loadConversations().pipe(
          mergeMap(res => {
            const conversations = res.Items.map(conversation =>
              this.conversationsSrv.modifyConversation(conversation)
            );

            if (res) {
              this.toastService.showConversationsSuccess(
                'Active Conversations Loaded Success'
              );
            }

            return [
              loadConversationsSuccessAction({ conversations }),
              attemptToLoadConversationsAction(),
            ];
          }),
          catchError((err: HttpErrorResponse) => {
            const errorType =
              err.error && err.error.type ? err.error.type : err.type;
            const errorMessage =
              err.error && err.error.message ? err.error.message : err.message;

            this.toastService.showConversationsError(errorMessage);

            return of(peopleErrorAction({ errorType, errorMessage }));
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
