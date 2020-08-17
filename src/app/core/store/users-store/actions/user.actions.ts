/* Ngrx */
import { props, createAction } from '@ngrx/store';

/* Models */
import { Direction } from '@core/models/direction.model';

const UserActionsTypes = {
  GET_FAVORITES_ADDRESS: '[USER] Get favorites address',
  GET_FAVORITES_ADDRESS_SUCCESS: '[USER] Get favorites address success',

  SET_DIRECTION_ORIGIN: '[USER] Set origin direction',
  SET_DIRECTION_DESTINATION: '[USER] Set destination direction',

  USER_FAILURE: '[USER] Failure',
};

export const getFavoritesAddress = createAction(
  UserActionsTypes.GET_FAVORITES_ADDRESS,
);

export const getFavoritesAddressSuccess = createAction(
  UserActionsTypes.GET_FAVORITES_ADDRESS_SUCCESS,
  props<{ favorites: Direction[] }>(),
);

export const setDirectionOrigin = createAction(
  UserActionsTypes.SET_DIRECTION_ORIGIN,
  props<{ origin: Direction }>(),
);

export const setDirectionDestination = createAction(
  UserActionsTypes.SET_DIRECTION_DESTINATION,
  props<{ destination: Direction }>(),
);

export const userFailure = createAction(
  UserActionsTypes.USER_FAILURE,
  props<{ error: string }>(),
);
