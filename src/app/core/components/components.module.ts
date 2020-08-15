import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    // Angular reactive forms
    FormsModule,
    ReactiveFormsModule,
    // Angular Material
    MatSidenavModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    // Angular reactive forms
    FormsModule,
    ReactiveFormsModule,
    // Angular Material
    MatSidenavModule,
    SidenavComponent,
  ],
  providers: [],
  declarations: [SidenavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
