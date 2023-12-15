import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  decrementGroupsTimerValueAction,
  groupsRefreshBtnEnableAction,
} from '../redux/actions/groups.actions';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private timerValue = 60;

  constructor(private store: Store) {}

  startTimer() {
    const timer = setInterval(() => {
      this.store.dispatch(
        decrementGroupsTimerValueAction({ value: this.timerValue })
      );

      if (!this.timerValue) {
        clearInterval(timer);
        this.store.dispatch(decrementGroupsTimerValueAction({ value: null }));
        this.store.dispatch(groupsRefreshBtnEnableAction());
        this.timerValue = 60;
      } else {
        this.timerValue -= 1;
      }
    }, 1000);
  }
}
