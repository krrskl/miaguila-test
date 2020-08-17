import { Component, OnInit, Input } from '@angular/core';
import { Direction } from '@core/models/direction.model';
import { Store } from '@ngrx/store';
import { AppState } from '@core/store/reducers/app.reducers';
import { UserActions } from '@core/store/users-store/actions';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss'],
})
export class DirectionComponent implements OnInit {
  @Input() public data: Direction;
  @Input() public stepIndex?: number;
  @Input() public disabled?: boolean;

  constructor(private store$: Store<AppState>) {}

  ngOnInit() {}

  select(): void {
    if (this.stepIndex === undefined) {
      return;
    }

    if (this.stepIndex === 0) {
      this.store$.dispatch(
        UserActions.setDirectionOrigin({ origin: this.data }),
      );
    } else {
      this.store$.dispatch(
        UserActions.setDirectionDestination({ destination: this.data }),
      );
    }
  }
}
