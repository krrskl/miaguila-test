import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MapService } from '@core/services/map.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { defaultData } from '@core/utils/forms';
import { Location } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { AppState } from '@core/store/reducers/app.reducers';
import { UserActions } from '@core/store/users-store/actions';
import { Observable, Subscription } from 'rxjs';
import { Direction } from '@core/models/direction.model';
import {
  selectFavoritesAddress,
  selectUserPending,
} from '@core/store/users-store/selectors/user.selectors';
import { MatVerticalStepper, MatExpansionPanel } from '@angular/material';
import { TripAppState } from '@core/store/trips-store/reducers/trip.reducer';
import { TripActions } from '@core/store/trips-store/actions';

@Component({
  selector: 'app-ask-eagle',
  templateUrl: './ask-eagle.component.html',
  styleUrls: ['./ask-eagle.component.scss'],
})
export class AskEagleComponent implements OnInit, OnDestroy {
  tripStoreSubscription: Subscription;
  userStoreSubscription: Subscription;

  stepIndex = 0;
  origin?: Direction;
  destination?: Direction;
  form: FormGroup;
  label: string;

  @ViewChild('stepper', { static: true }) stepper: MatVerticalStepper;
  @ViewChild('expansion', { static: true }) expansion: MatExpansionPanel;

  public favorites$: Observable<Direction[]> = this.store$.pipe(
    select(selectFavoritesAddress),
  );

  public userLoading$: Observable<boolean> = this.store$.pipe(
    select(selectUserPending),
  );
  constructor(
    private mapService: MapService,
    private formBuilder: FormBuilder,
    private locationService: Location,
    private store$: Store<AppState>,
    private tripStore$: Store<TripAppState>,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      origin: defaultData(),
      destination: defaultData(),
    });

    this.form.statusChanges.subscribe(() => {
      if (this.origin && this.origin.name !== this.form.value.origin) {
        this.origin = null;
        this.destination = null;
      }

      if (
        this.destination &&
        this.destination.name !== this.form.value.destination
      ) {
        this.destination = null;
      }
    });

    this.mapService.buildMap();

    this.mapService.createMapboxDirection();

    this.store$.dispatch(UserActions.getFavoritesAddress());
    this.tripStore$.dispatch(TripActions.getTrips());

    this.userStoreSubscription = this.store$
      .select('user')
      .subscribe(({ origin, destination }) => {
        if (origin && !this.stepper.selectedIndex) {
          this.origin = origin;
          // Removing all routes of the map
          this.mapService.getMapboxDirections.removeRoutes();
          // Set origin coordenates in the map
          this.mapService.getMapboxDirections.setOrigin(origin.location);
          // Update the reactive form
          this.form.patchValue({ origin: origin.name });
          // Next step
          this.stepper.next();
          // Update the route in the browser
          this.updateRoute();
        }

        if (destination && this.stepper.selectedIndex) {
          this.destination = destination;
          // Removing all routes of the map if not origin selected
          if (!this.origin) {
            this.mapService.getMapboxDirections.removeRoutes();
          }
          // Set destination coordenates in the map
          this.mapService.getMapboxDirections.setDestination(
            destination.location,
          );
          // Update the reactive form
          this.form.patchValue({ destination: destination.name });
          // Close expansion
          this.expansion.close();
          // Update the route in the browser
          this.updateRoute();
        }
      });

    this.mapService.statusMap.subscribe(state => {
      if (state) {
        this.tripStoreSubscription = this.tripStore$
          .select('trips')
          .subscribe(({ trip }) => {
            if (trip) {
              this.mapService.getMapboxDirections.setOrigin(trip.from.location);
              this.mapService.getMapboxDirections.setDestination(
                trip.to.location,
              );
              this.expansion.close();
            }
          });
      }
    });
  }

  /**
   * Function to dispatch when the stepper change of step
   */
  changeStepper(stepper: any): void {
    const { label } = stepper.selected;
    this.label = label;
  }

  /**
   * Its function will be to update the route in the browser
   */
  updateRoute(): void {
    const origin = this.origin
      ? `${this.origin.location[0]},${this.origin.location[1]}`
      : '';

    const destination = this.destination
      ? `${this.destination.location[0]},${this.destination.location[1]}`
      : '';

    this.locationService.replaceState(
      `ask-eagle/${this.label}/${origin};${destination}`,
    );
  }

  /**
   * Function to dispatch when the form is valid
   */
  send(): void {}

  /**
   * Function to dispatch when the view is destroyed
   */
  ngOnDestroy(): void {
    this.userStoreSubscription.unsubscribe();
    this.tripStoreSubscription.unsubscribe();
  }
}
