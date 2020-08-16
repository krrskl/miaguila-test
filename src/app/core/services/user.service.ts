import { ApiService } from '@core/services/api/api.service';
import { Injectable } from '@angular/core';
import { USER } from '@core/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ApiService {
  /**
   * Get all favorites address from the api
   */
  getFavoritesAddress(): Observable<any> {
    return this.get(USER.GET_FAVORITES_ADDRESS);
  }
}
