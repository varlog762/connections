import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import {
  loadCompanionsAction,
  loadPeopleAction,
} from '../../redux/actions/people.actions';

import { ModifiedPersonInterface } from '../../models/modified-person.interface';
import {
  selectAttemptToLoadCompanions,
  selectCompanionsList,
  selectPeopleList,
} from '../../redux/selectors/people.selectors';
import { ModifiedCompanionInterface } from '../../models/modified-companion.interface';
import { PersonItemComponent } from '../person-item/person-item.component';
import { CurrentUserInterface } from '../../models/current-user.interface';

@Component({
  selector: 'app-people',
  standalone: true,
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss',
  imports: [CommonModule, PersonItemComponent],
})
export class PeopleComponent implements OnInit, OnDestroy {
  public peopleList!: ModifiedPersonInterface[];

  public companionsList!: ModifiedCompanionInterface[];

  private peopleListSubscription$!: Subscription;

  // private companionsListSubscription$!: Subscription;

  private wasAttemptToLoadCompanionsSubscr$!: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.checkListOfPeople();

    this.checkListOfCompanions();
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

  checkListOfCompanions(): void {
    this.wasAttemptToLoadCompanionsSubscr$ = this.store
      .select(selectAttemptToLoadCompanions)
      .subscribe(wasAttempt => {
        if (!wasAttempt) {
          this.store.dispatch(loadCompanionsAction());
        }
      });
  }

  getGroupID(index: number, personItem: ModifiedPersonInterface): string {
    return personItem.uid;
  }

  ngOnDestroy(): void {
    this.peopleListSubscription$.unsubscribe();
    // this.wasAttemptToLoadCompanionsSubscr$.unsubscribe();
  }
}
