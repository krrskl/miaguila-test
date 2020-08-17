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
  origin: Direction | null;
  destination: Direction | null;
}

export const initialState: UserState = {
  pending: false,
  favorites: [],
  origin: null,
  destination: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.getFavoritesAddress, state => ({ ...state, pending: true })),
  on(UserActions.getFavoritesAddressSuccess, (state, { favorites }) => ({
    ...state,
    pending: false,
    favorites,
  })),
  on(UserActions.setDirectionOrigin, (state, { origin }) => ({
    ...state,
    origin,
  })),
  on(UserActions.setDirectionDestination, (state, { destination }) => ({
    ...state,
    destination,
  })),
  on(UserActions.userFailure, state => ({ ...state, pending: false })),
);
