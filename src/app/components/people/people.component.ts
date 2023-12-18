import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import {
  loadPeopleAction,
  peopleRefreshBtnDisableAction,
} from '../../redux/actions/people.actions';

import { ModifiedPersonInterface } from '../../models/modified-person.interface';
import {
  selectIsPeopleRefreshing,
  selectPeopleList,
  selectPeopleTimerValue,
} from '../../redux/selectors/people.selectors';
import { ConversationInterface } from '../../models/conversation.interface';
import { PersonItemComponent } from '../person-item/person-item.component';
import { CurrentUserInterface } from '../../models/current-user.interface';
import { loadConversationsAction } from '../../redux/actions/conversations.actions';
import { selectAttemptToLoadConversations } from '../../redux/selectors/conversations.selectors';

@Component({
  selector: 'app-people',
  standalone: true,
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss',
  imports: [CommonModule, PersonItemComponent],
})
export class PeopleComponent implements OnInit, OnDestroy {
  public peopleList!: ModifiedPersonInterface[];

  public conversationsList!: ConversationInterface[];

  private peopleListSubscription$!: Subscription;

  public isPeopleRefreshing$!: Observable<boolean>;

  public peopleTimerValue$!: Observable<number | null>;

  private wasAttemptToLoadConversationsSubscr$!: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isPeopleRefreshing$ = this.store.select(selectIsPeopleRefreshing);

    this.peopleTimerValue$ = this.store.select(selectPeopleTimerValue);

    this.checkListOfPeople();

    this.checkListOfConversations();
  }

  checkListOfPeople(): void {
    this.peopleListSubscription$ = this.store
      .select(selectPeopleList)
      .subscribe(list => {
        if (!list?.length) {
          this.store.dispatch(loadPeopleAction({ isLoadManual: false }));
        }

        const currentUser: CurrentUserInterface = JSON.parse(
          localStorage.getItem('currentUser') as string
        );

        this.peopleList = list.filter(
          person => person.uid !== currentUser['rs-uid']
        );
      });
  }

  checkListOfConversations(): void {
    this.wasAttemptToLoadConversationsSubscr$ = this.store
      .select(selectAttemptToLoadConversations)
      .subscribe(wasAttempt => {
        if (!wasAttempt) {
          this.store.dispatch(loadConversationsAction());
        }
      });
  }

  refreshPeople() {
    this.store.dispatch(loadPeopleAction({ isLoadManual: true }));
    this.store.dispatch(peopleRefreshBtnDisableAction());
  }

  getGroupID(index: number, personItem: ModifiedPersonInterface): string {
    return personItem.uid;
  }

  ngOnDestroy(): void {
    this.peopleListSubscription$.unsubscribe();
    this.wasAttemptToLoadConversationsSubscr$.unsubscribe();
  }
}
