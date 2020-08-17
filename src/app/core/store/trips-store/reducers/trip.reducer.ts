/* Ngrx */
import { createReducer, on, Action } from '@ngrx/store';
/* Models */
/* Actions */
import { TripActions } from '../actions';
/* Reducers */
import { AppState } from '@core/store/reducers/app.reducers';
import { Trip } from '@core/models/trip.model';

export const tripFeatureKey = 'trips';

export interface TripState {
  pending: boolean;
  trips: Trip[];
}

export interface TripAppState extends AppState {
  [tripFeatureKey]: TripState;
}

export const initialState: TripState = {
  pending: true,
  trips: [],
};

const tripReducer = createReducer(
  initialState,
  on(TripActions.getTrips, state => ({ ...state, pending: true })),
  on(TripActions.getTripsSuccess, (state, { trips }) => ({
    ...state,
    pending: false,
    trips,
  })),
  on(TripActions.tripFailure, state => ({ ...state, pending: false })),
);

export function reducerTrip(state: TripState, action: Action) {
  return tripReducer(state, action);
}
