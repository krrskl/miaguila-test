import { ComponentsModule } from './../../core/components/components.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/* Ngrx (Store, Effects) */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

/* Reducer */
import {
  tripFeatureKey,
  reducerTrip,
} from '@core/store/trips-store/reducers/trip.reducer';

/* Effects */
import { TripEffects } from '@core/store/trips-store/effects';

/* Components */
import { AskEagleRoutingModule } from './ask-eagle-routing.module';
import { AskEagleComponent } from './pages/ask-eagle/ask-eagle.component';
import { ComponentsAskEagleModule } from './components/ask-eagle.component';

@NgModule({
  declarations: [AskEagleComponent],
  imports: [
    CommonModule,
    AskEagleRoutingModule,
    ComponentsModule,
    ComponentsAskEagleModule,
    StoreModule.forFeature(tripFeatureKey, reducerTrip),
    EffectsModule.forFeature([TripEffects]),
  ],
})
export class AskEagleModule {}
