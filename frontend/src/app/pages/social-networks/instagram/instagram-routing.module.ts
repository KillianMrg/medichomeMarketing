import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInstagramComponent } from './containers/home-instagram/home-instagram.component';
import { NewPostInstagramComponent } from './containers/new-post-instagram/new-post-instagram.component';
import { ListOfPublicationsInstagramComponent } from './containers/list-of-publications-instagram/list-of-publications-instagram.component';
import { PublicationComponent } from './containers/publication/publication.component';

const routes: Routes = [
  {
    path: '',
    component: HomeInstagramComponent
  }, {
    path: 'home',
    component: HomeInstagramComponent
  }, {
    path: 'newPost',
    component: NewPostInstagramComponent
  }, {
    path: 'listOfPublications',
    component: ListOfPublicationsInstagramComponent
  }, {
    path: 'publication/:id0/:id1',
    component: PublicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstagramRoutingModule { }
