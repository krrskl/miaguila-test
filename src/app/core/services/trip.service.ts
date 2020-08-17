import { Injectable } from '@angular/core';
import { ApiService } from '@core/services/api/api.service';
import { Observable } from 'rxjs';
import { TRIPS } from '@core/constant';

@Injectable({
  providedIn: 'root',
})
export class TripService extends ApiService {
  /**
   * Get all trips from the api
   */
  getTrips(): Observable<any> {
    return this.get(TRIPS.GET_ALL_TRIPS);
  }
}
