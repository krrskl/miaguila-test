import { Injectable } from '@angular/core';

/* Ngrx */
import { Actions, createEffect, ofType } from '@ngrx/effects';

/* Services  */
import { TripService } from '@core/services/trip.service';

/* Rxjs */
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

/* Actions */
import { TripActions } from '../actions';

@Injectable()
export class TripEffects {
  constructor(private actions$: Actions, private tripService: TripService) {}

  getTrips$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TripActions.getTrips),
      mergeMap(() =>
        this.tripService.getTrips().pipe(
          map(({ data }) => data),
          map(({ trips: trip }) => TripActions.getTripsSuccess({ trip })),
          catchError(this.handleError),
        ),
      ),
    ),
  );

  private handleError(error) {
    return of(TripActions.tripFailure({ error: error.message }));
  }
}
