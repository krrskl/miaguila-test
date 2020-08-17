import { Injectable } from '@angular/core';

/* Ngrx */
import { Actions, createEffect, ofType } from '@ngrx/effects';

/* Services  */
import { UserService } from '@core/services/user.service';

/* Rxjs */
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

/* Actions */
import { UserActions } from '../actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  getFavoritesAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getFavoritesAddress),
      mergeMap(() =>
        this.userService.getFavoritesAddress().pipe(
          map(({ data }) => data),
          map(({ favorites }) =>
            UserActions.getFavoritesAddressSuccess({ favorites }),
          ),
          catchError(this.handleError),
        ),
      ),
    ),
  );

  private handleError(error) {
    return of(UserActions.userFailure({ error: error.message }));
  }
}
