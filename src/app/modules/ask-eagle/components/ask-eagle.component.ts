import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectionComponent } from './direction/direction.component';

@NgModule({
  imports: [CommonModule],
  exports: [DirectionComponent],
  providers: [],
  declarations: [DirectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsAskEagleModule {}
