/* Ngrx */
import { createSelector, createFeatureSelector } from '@ngrx/store';
/* Reducers */
import {
  UserAppState,
  UserState,
  userFeatureKey,
} from '../reducers/user.reducer';

export const selectUsersState = createFeatureSelector<UserAppState, UserState>(
  userFeatureKey,
);

export const selectUserPending = createSelector(
  selectUsersState,
  (state: UserState) => state.pending,
);

export const selectFavoritesAddress = createSelector(
  selectUsersState,
  (state: UserState) => state.favorites,
);
