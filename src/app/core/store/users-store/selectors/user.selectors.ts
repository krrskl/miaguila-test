/* Ngrx */
import { createSelector, createFeatureSelector } from '@ngrx/store';
/* Reducers */
import * as fromROOT from '@core/store/reducers/app.reducers';

import { UserState, userFeatureKey } from '../reducers/user.reducer';

export const selectUsersState = createFeatureSelector<
  fromROOT.AppState,
  UserState
>(userFeatureKey);

export const selectUserPending = createSelector(
  selectUsersState,
  (state: UserState) => state.pending,
);

export const selectFavoritesAddress = createSelector(
  selectUsersState,
  (state: UserState) => state.favorites,
);
