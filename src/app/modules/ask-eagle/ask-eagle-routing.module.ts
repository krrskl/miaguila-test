import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AskEagleComponent } from './pages/ask-eagle/ask-eagle.component';

const routes: Routes = [
  {
    path: 'ask-eagle/:type/:location',
    component: AskEagleComponent,
  },
  {
    path: '**',
    redirectTo: 'ask-eagle/origin/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AskEagleRoutingModule {}
