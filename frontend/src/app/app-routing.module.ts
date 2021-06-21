import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('../app/pages/home/welcome.module').then(m => m.WelcomeModule) },
  { path: 'socialNetworks', loadChildren: () => import('../app/pages/social-networks/social-networks.module').then(m => m.SocialNetworksModule) },
  { path: 'emailing', loadChildren: () => import('../app/pages/emailing/emailing.module').then(m => m.EmailingModule) },
  { path: 'customerAnalysis', loadChildren: () => import('../app/pages/customer-analysis/customer-analysis.module').then(m => m.CustomerAnalysisModule) },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
