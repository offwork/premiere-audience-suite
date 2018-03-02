import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';

import { SharedMaterialModulesModule } from '@suite/shared-material-modules';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NxModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModulesModule,
    RouterModule.forRoot([{ path: '', loadChildren: '@suite/premiere-auth#PremiereAuthModule' }], {
      initialNavigation: 'enabled'
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
