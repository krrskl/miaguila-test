/* Ngrx */
import { props, createAction } from '@ngrx/store';

/* Models */
import { Trip } from '@core/models/trip.model';

const TripActionsTypes = {
  GET_TRIPS: '[TRIP] Get trips',
  GET_TRIPS_SUCCESS: '[TRIP] Get trips success',

  TRIP_FAILURE: '[TRIP] Failure',
};

export const getTrips = createAction(TripActionsTypes.GET_TRIPS);

export const getTripsSuccess = createAction(
  TripActionsTypes.GET_TRIPS_SUCCESS,
  props<{ trips: Trip[] }>(),
);

export const tripFailure = createAction(
  TripActionsTypes.TRIP_FAILURE,
  props<{ error: string }>(),
);
