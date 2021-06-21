import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLinkedinComponent } from './containers/home-linkedin/home-linkedin.component';
import { NewPostLinkedinComponent } from './containers/new-post-linkedin/new-post-linkedin.component';
import { ListOfPublicationsLinkedinComponent } from './containers/list-of-publications-linkedin/list-of-publications-linkedin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLinkedinComponent
  }, {
    path: 'home',
    component: HomeLinkedinComponent
  }, {
    path: 'newPost',
    component: NewPostLinkedinComponent
  }, {
    path: 'listOfPublications',
    component: ListOfPublicationsLinkedinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkedinRoutingModule { }
