import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedMaterialModulesModule } from '@suite/shared-material-modules';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PremiereAuthRoutingModule {}
