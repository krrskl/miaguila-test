import { ComponentsModule } from './../../core/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  ],
})
export class AskEagleModule {}
