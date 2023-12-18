import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  decrementGroupsTimerValueAction,
  groupsRefreshBtnEnableAction,
} from '../redux/actions/groups.actions';
import {
  decrementPeopleTimerValueAction,
  peopleRefreshBtnEnableAction,
} from '../redux/actions/people.actions';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private groupstimerValue = 60;
  private peopleTimerValue = 60;

  constructor(private store: Store) {}

  startGroupsTimer() {
    const timer = setInterval(() => {
      this.store.dispatch(
        decrementGroupsTimerValueAction({ value: this.groupstimerValue })
      );

      if (!this.groupstimerValue) {
        clearInterval(timer);
        this.store.dispatch(decrementGroupsTimerValueAction({ value: null }));
        this.store.dispatch(groupsRefreshBtnEnableAction());
        this.groupstimerValue = 60;
      } else {
        this.groupstimerValue -= 1;
      }
    }, 1000);
  }

  startPeopleTimer() {
    const timer = setInterval(() => {
      this.store.dispatch(
        decrementPeopleTimerValueAction({ value: this.peopleTimerValue })
      );

      if (!this.peopleTimerValue) {
        clearInterval(timer);
        this.store.dispatch(decrementPeopleTimerValueAction({ value: null }));
        this.store.dispatch(peopleRefreshBtnEnableAction());
        this.peopleTimerValue = 60;
      } else {
        this.peopleTimerValue -= 1;
      }
    }, 1000);
  }
}
