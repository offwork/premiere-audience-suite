import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutComponent, SimpleLayoutComponent } from '@suite/premiere-layout';

import { RouterComponent } from './components/router/router.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'router', pathMatch: 'full' },
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      { path: '', loadChildren: '@suite/premiere-auth#PremiereAuthModule' },
      { path: 'router', component: RouterComponent },
      { path: 'not-found', component: NotFoundComponent },
    ]
  },
  { 
    path: '', 
    component: FullLayoutComponent,
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
