import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';

import { SharedMaterialModulesModule } from '@suite/shared-material-modules';

import { PremiereLayoutModule } from '@suite/premiere-layout';
import { PremiereUiModule } from '@suite/premiere-ui';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterComponent } from './components/router/router.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NxModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModulesModule,
    PremiereLayoutModule,
    PremiereUiModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, NotFoundComponent, RouterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
