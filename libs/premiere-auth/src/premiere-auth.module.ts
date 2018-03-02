import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedMaterialModulesModule } from '@suite/shared-material-modules';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModulesModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: SignInComponent}
    ])
  ],
  declarations: [SignInComponent, SignUpComponent],
  providers: [AuthService]
})
export class PremiereAuthModule {}
