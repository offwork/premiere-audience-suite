import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedMaterialModulesModule } from '@suite/shared-material-modules';

import { PremiereAuthRoutingModule } from './premiere-auth-rounting.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthService } from './auth.service';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedMaterialModulesModule, PremiereAuthRoutingModule],
  declarations: [SignInComponent, SignUpComponent, ForgotPasswordComponent],
  providers: [AuthService]
})
export class PremiereAuthModule {}
