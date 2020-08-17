import { InjectionToken } from '@angular/core';

/* Ngrx */
import {
  ActionReducerMap,
  Action,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

/* Reducers */
import * as fromUSER from '@core/store/users-store/reducers/user.reducer';

/* Environment */
import { environment } from '@env/environment';

export interface AppState {
  [fromUSER.userFeatureKey]: fromUSER.UserState;
}

/**
 * Combination of the `Reducers` to be used in the` Store`
 */
export const appReducers = new InjectionToken<
  ActionReducerMap<AppState, Action>
>('Root reducers', {
  factory: () => ({
    [fromUSER.userFeatureKey]: fromUSER.userReducer,
  }),
});

/**
 * Function to manage logs when interacting with the `Store`.
 */
export function logger(
  reducer: ActionReducer<AppState>,
): ActionReducer<AppState> {
  return (state, action) => {
    const result = reducer(state, action);
    return result;
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
