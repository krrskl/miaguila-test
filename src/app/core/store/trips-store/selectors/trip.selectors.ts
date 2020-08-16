/* Ngrx */
import { createSelector, createFeatureSelector } from '@ngrx/store';

/* Reducers */
import {
  TripAppState,
  TripState,
  tripFeatureKey,
} from '../reducers/trip.reducer';

export const selectTripsState = createFeatureSelector<TripAppState, TripState>(
  tripFeatureKey,
);

export const selectTripsPending = createSelector(
  selectTripsState,
  (state: TripState) => state.pending,
);

export const selectTrips = createSelector(
  selectTripsState,
  (state: TripState) => state.trips,
);
