/* Ngrx */
import { props, createAction } from '@ngrx/store';

/* Models */
import { Direction } from '@core/models/direction.model';

const UserActionsTypes = {
  GET_FAVORITES_ADDRESS: '[USER] Get favorites address',
  GET_FAVORITES_ADDRESS_SUCCESS: '[USER] Get favorites address success',

  USER_FAILURE: '[USER] Failure',
};

export const getFavoritesAddress = createAction(
  UserActionsTypes.GET_FAVORITES_ADDRESS,
);

export const getFavoritesAddressSuccess = createAction(
  UserActionsTypes.GET_FAVORITES_ADDRESS,
  props<{ favorites: Direction[] }>(),
);

export const userFailure = createAction(
  UserActionsTypes.USER_FAILURE,
  props<{ error: string }>(),
);
