/* Ngrx */
import { createReducer, on } from '@ngrx/store';

/* Models */
import { Direction } from '@core/models/direction.model';

/* Actions */
import { UserActions } from '../actions';

export const userFeatureKey = 'user';

export interface UserState {
  pending: boolean;
  favorites: Direction[];
}

export const initialState: UserState = {
  pending: false,
  favorites: [],
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.getFavoritesAddress, state => ({ ...state, pending: true })),
  on(UserActions.getFavoritesAddressSuccess, (state, { favorites }) => ({
    ...state,
    pending: false,
    favorites,
  })),
  on(UserActions.userFailure, state => ({ ...state, pending: false })),
);
