import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MatSidenavModule,
  MatStepperModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    // Angular reactive forms
    FormsModule,
    ReactiveFormsModule,
    // Angular Material
    MatSidenavModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    // Angular reactive forms
    FormsModule,
    ReactiveFormsModule,
    // Angular Material
    MatSidenavModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    // Components
    SidenavComponent,
    MapComponent,
  ],
  providers: [],
  declarations: [SidenavComponent, MapComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
