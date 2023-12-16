import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PeopleStateInerface } from '../../models/people-state.inerface';

export const selectPeopleFeature =
  createFeatureSelector<PeopleStateInerface>('peopleState');

export const selectPeopleList = createSelector(
  selectPeopleFeature,
  state => state.peopleList
);

export const selectCompanionsList = createSelector(
  selectPeopleFeature,
  state => state.companionsList
);

export const selectIsPeopleRefreshing = createSelector(
  selectPeopleFeature,
  state => state.isRefreshPeopleInProgress
);

export const selectPeopleTimerValue = createSelector(
  selectPeopleFeature,
  state => state.peopleTimerValue
);

export const selectAttemptToLoadCompanions = createSelector(
  selectPeopleFeature,
  state => state.wasAttemptToLoadCompanions
);
