import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription, take } from 'rxjs';

import { ModifiedPersonInterface } from '../../models/modified-person.interface';
import { Store } from '@ngrx/store';

import { ConversationInterface } from '../../models/conversation.interface';
import { createConversationAction } from '../../redux/actions/conversations.actions';
import { selectConversationsList } from '../../redux/selectors/conversations.selectors';

@Component({
  selector: 'app-person-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-item.component.html',
  styleUrl: './person-item.component.scss',
})
export class PersonItemComponent implements OnInit, OnDestroy {
  @Input() personItem!: ModifiedPersonInterface;

  public activeConversation: ConversationInterface | undefined;

  private conversationsListSubscr$!: Subscription;

  constructor(
    private readonly store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getConversation();
  }

  createOrGoToConversation(): void {
    localStorage.setItem(this.personItem.uid, this.personItem.name);
    if (this.activeConversation) {
      this.router.navigate(['conversation', this.activeConversation.id]);
    } else {
      this.store.dispatch(
        createConversationAction({ payload: this.personItem.uid })
      );
    }
  }

  getConversation(): void {
    this.conversationsListSubscr$ = this.store
      .select(selectConversationsList)
      .subscribe(conversations => {
        this.activeConversation = conversations.find(
          conv => conv.companionID === this.personItem.uid
        );
      });
  }

  ngOnDestroy(): void {
    this.conversationsListSubscr$.unsubscribe();
  }
}
