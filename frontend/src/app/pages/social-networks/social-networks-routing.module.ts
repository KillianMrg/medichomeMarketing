import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'instagram', loadChildren: () => import('../social-networks/instagram/instagram.module').then(m => m.InstagramModule) },
  { path: 'facebook', loadChildren: () => import('../social-networks/facebook/facebook.module').then(m => m.FacebookModule) },
  { path: 'linkedin', loadChildren: () => import('../social-networks/linkedin/linkedin.module').then(m => m.LinkedinModule) },
  { path: '**', redirectTo: '/home' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialNetworksRoutingModule { }
