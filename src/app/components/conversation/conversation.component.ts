import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import {
  selectConversationTimerValue,
  selectConversationsHistoryList,
  selectIsConvRefreshInProgress,
  selectShowPopup,
  selectSubmitingProgress,
} from '../../redux/selectors/conversations.selectors';
import {
  convSubmitBtnDesableAction,
  conversationRefreshBtnDisableAction,
  deleteConversationAction,
  hidePopupAction,
  loadConversationHistoryAction,
  sendConversationMessageAction,
  showPopupAction,
} from '../../redux/actions/conversations.actions';
import { UserNamespace } from '../../namespaces/user.namespace';

import { MessageComponent } from '../message/message.component';
import { MessageInterface } from '../../models/message.interface';
import { SortByDatePipe } from '../../pipes/sort-by-date.pipe';
import { SortMessagesByDatePipe } from '../../pipes/sort-messages-by-date.pipe';

@Component({
  selector: 'app-conversation',
  standalone: true,
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MessageComponent,
    SortByDatePipe,
    SortMessagesByDatePipe,
  ],
})
export class ConversationComponent implements OnInit, OnDestroy {
  @ViewChild('messagesContainer') messagesContainer: ElementRef | undefined;

  public currentUser = UserNamespace.currentUser;

  public conversationID!: string;

  public companionName: string | null = null;

  public messages!: MessageInterface[];

  public messageForm!: FormGroup;

  public isRefreshing$!: Observable<boolean>;

  public conversationTimerValue$!: Observable<number | null>;

  private conversationHistorySubscr$!: Subscription;

  public since: number | undefined;

  public isShowPopup$!: Observable<boolean>;

  public isSubmitInProgress$!: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private readonly store: Store,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.conversationID = this.route.snapshot.paramMap.get(
      'conversationID'
    ) as string;

    this.initializeForm();

    this.subscribeToConversationMessages();

    if (!this.messages.length) {
      this.loadHistory(undefined);
    }

    if (this.since) {
      this.loadHistory(this.since);
    }

    this.conversationTimerValue$ = this.store.select(
      selectConversationTimerValue
    );

    this.isRefreshing$ = this.store.select(selectIsConvRefreshInProgress);

    this.isShowPopup$ = this.store.select(selectShowPopup);

    this.isSubmitInProgress$ = this.store.select(selectSubmitingProgress);
  }

  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  initializeForm(): void {
    this.messageForm = this.fb.group({
      message: [''],
    });
  }

  subscribeToConversationMessages(): void {
    this.conversationHistorySubscr$ = this.store
      .select(selectConversationsHistoryList)
      .subscribe(conversations => {
        const conversation = conversations.find(
          conv => conv[this.conversationID] !== undefined
        );

        this.messages = conversation ? conversation[this.conversationID] : [];

        this.getSince();

        this.getCompanionName(this.messages);
      });
  }

  getCompanionName(messages: MessageInterface[]): void {
    const companionID = messages.find(
      message => message.authorID !== this.currentUser['rs-uid']
    );

    this.companionName = UserNamespace.getCurrentCompanionName(
      companionID?.authorID as string
    );
  }

  loadHistory(since: number | undefined, isLoadManual: boolean = false): void {
    this.store.dispatch(
      loadConversationHistoryAction({
        payload: {
          conversationID: this.conversationID,
          since: since,
          isLoadManual: isLoadManual,
        },
      })
    );
  }

  getSince(): void {
    this.since = +this.messages.reduce((latest, current) => {
      const currentCreatedAt = +current.createdAt;

      return currentCreatedAt > latest ? currentCreatedAt : latest;
    }, 0);
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.messageForm.get('message')?.value) {
      const createdAt = new Date().getTime();

      this.store.dispatch(
        sendConversationMessageAction({
          payload: {
            createdAt: createdAt,
            authorID: this.currentUser['rs-uid'],
            conversationID: this.conversationID,
            message: this.messageForm.get('message')?.value,
            since: this.since,
          },
        })
      );
      this.messageForm.get('message')?.reset();
    }
  }

  refreshPeople() {
    this.loadHistory(this.since, true);
    this.store.dispatch(conversationRefreshBtnDisableAction());
  }

  scrollToBottom(): void {
    if (this.messagesContainer) {
      const container = this.messagesContainer.nativeElement;
      container.scrollTop = container.scrollHeight;
    }
  }

  deleteConversation(): void {
    this.store.dispatch(
      deleteConversationAction({ conversationID: this.conversationID })
    );
    this.store.dispatch(convSubmitBtnDesableAction());
  }

  hidePopup(): void {
    this.store.dispatch(hidePopupAction());
  }

  showPopup(): void {
    this.store.dispatch(showPopupAction());
  }

  getMessageID(index: number, message: MessageInterface): string {
    return message.authorID + message.createdAt;
  }

  ngOnDestroy(): void {
    this.conversationHistorySubscr$.unsubscribe();
  }
}
