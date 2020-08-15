import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import * as mapboxgl from 'mapbox-gl';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private mapbox = mapboxgl as typeof mapboxgl;
  private map: mapboxgl.Map;
  private style = `mapbox://styles/mapbox/light-v10`;
  private lat = 11.2270716;
  private lng = -74.2011552;
  private zoom = 11;

  private mapSubject = new BehaviorSubject<boolean>(false);
  public statusMap = this.mapSubject.asObservable();

  constructor() {
    this.mapbox.accessToken = environment.map_box_token;
  }

  /**
   * Function to build the map component.
   */
  public buildMap(): void {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.on('load', () => this.mapSubject.next(true));
  }
}
