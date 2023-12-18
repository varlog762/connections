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
import { Subscription } from 'rxjs';

import {
  selectAttemptToLoadConversationHistory,
  selectConversationsHistoryList,
} from '../../redux/selectors/conversations.selectors';
import {
  loadConversationHistoryAction,
  sendConversationMessageAction,
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

  public messages!: MessageInterface[];

  public messageForm!: FormGroup;

  private attemptToLoadConversationHistorySubscr$!: Subscription;

  private conversationHistorySubscr$!: Subscription;

  public since: number | undefined;

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
      });
  }

  loadHistory(since: number | undefined): void {
    this.store.dispatch(
      loadConversationHistoryAction({
        payload: {
          conversationID: this.conversationID,
          since: since,
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

  private scrollToBottom(): void {
    if (this.messagesContainer) {
      const container = this.messagesContainer.nativeElement;
      container.scrollTop = container.scrollHeight;
    }
  }

  getMessageID(index: number, message: MessageInterface): string {
    return message.authorID + message.createdAt;
  }

  ngOnDestroy(): void {
    // this.attemptToLoadConversationHistorySubscr$.unsubscribe();
    this.conversationHistorySubscr$.unsubscribe();
  }
}
