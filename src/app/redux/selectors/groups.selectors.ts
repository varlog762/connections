import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GroupsStateInterface } from '../../models/groups-state.interface';

export const selectGroupsFeature =
  createFeatureSelector<GroupsStateInterface>('groupsState');

export const selectIsShowForm = createSelector(
  selectGroupsFeature,
  state => state.isShowForm
);

export const selectGroupList = createSelector(
  selectGroupsFeature,
  state => state.groupList
);

export const selectIsNewGroupSubmiting = createSelector(
  selectGroupsFeature,
  state => state.isNewGroupSubmitInProgress
);