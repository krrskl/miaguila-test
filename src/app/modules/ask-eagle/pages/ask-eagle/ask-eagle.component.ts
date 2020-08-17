import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-ask-eagle',
  templateUrl: './ask-eagle.component.html',
  styleUrls: ['./ask-eagle.component.scss'],
})
export class AskEagleComponent implements OnInit {
  stepIndex = 0;
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
  }

  changeStepper(stepper: any): void {
    const { label } = stepper.selected;

    this.locationService.replaceState(`ask-eagle/${label}/`);
  }
}
