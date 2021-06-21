import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailingComponent } from './containers/emailing.component';

const routes: Routes = [
  { path: '', component: EmailingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailingRoutingModule { }
