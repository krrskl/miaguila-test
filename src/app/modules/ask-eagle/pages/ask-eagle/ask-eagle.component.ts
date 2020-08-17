import { Component, OnInit, ViewChild } from '@angular/core';
import { MapService } from '@core/services/map.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { defaultData } from '@core/utils/forms';
import { Location } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { AppState } from '@core/store/reducers/app.reducers';
import { UserActions } from '@core/store/users-store/actions';
import { Observable } from 'rxjs';
import { Direction } from '@core/models/direction.model';
import {
  selectFavoritesAddress,
  selectUserPending,
} from '@core/store/users-store/selectors/user.selectors';
import { MatVerticalStepper } from '@angular/material';

@Component({
  selector: 'app-ask-eagle',
  templateUrl: './ask-eagle.component.html',
  styleUrls: ['./ask-eagle.component.scss'],
})
export class AskEagleComponent implements OnInit {
  stepIndex = 0;
  origin?: Direction;
  destination?: Direction;

  @ViewChild('stepper', { static: true }) stepper: MatVerticalStepper;
  form: FormGroup;

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
    private activeRoute: ActivatedRoute,
    private store$: Store<AppState>,
  ) {
    const { type, location } = this.activeRoute.snapshot.params;
    this.stepIndex = type === 'origin' ? 0 : 1;

    if (location) {
      console.log(location);
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      origin: defaultData(),
      destination: defaultData(),
    });

    this.mapService.buildMap();

    this.store$.dispatch(UserActions.getFavoritesAddress());

    this.store$.select('user').subscribe(({ origin, destination }) => {
      if (origin && !this.stepper.selectedIndex) {
        this.origin = origin;
        this.form.patchValue({ origin: origin.name });
        this.stepper.next();
      }

      if (destination && this.stepper.selectedIndex) {
        this.destination = destination;
        this.form.patchValue({ destination: destination.name });
      }
    });
  }

  changeStepper(stepper: any): void {
    const { label } = stepper.selected;

    this.locationService.replaceState(`ask-eagle/${label}/`);
  }

  send(): void {}
}
