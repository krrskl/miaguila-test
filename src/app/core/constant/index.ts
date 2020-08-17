import { environment } from '@env/environment';

export const USER = {
  GET_FAVORITES_ADDRESS: `${environment.base_api}/favorites.json`,
};

export const TRIPS = {
  GET_ALL_TRIPS: `${environment.base_api}/trips.json`,
};
