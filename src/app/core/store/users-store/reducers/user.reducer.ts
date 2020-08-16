/* Ngrx */
import { createReducer, on, Action } from '@ngrx/store';

/* Models */
import { Direction } from '@core/models/direction.model';

/* Actions */
import { UserActions } from '../actions';

/* Reducers */
import { AppState } from '@core/store/reducers/app.reducers';

export const userFeatureKey = 'user';

export interface UserState {
  pending: boolean;
  favorites: Direction[];
}

export interface UserAppState extends AppState {
  [userFeatureKey]: UserState;
}

export const initialState: UserState = {
  pending: false,
  favorites: [],
};

const userReducer = createReducer(
  initialState,
  on(UserActions.getFavoritesAddress, state => ({ ...state, pending: true })),
  on(UserActions.getFavoritesAddressSuccess, (state, { favorites }) => ({
    ...state,
    pending: false,
    favorites,
  })),
  on(UserActions.userFailure, state => ({ ...state, pending: false })),
);

export function reducerUser(state: UserState, action: Action) {
  return userReducer(state, action);
}
