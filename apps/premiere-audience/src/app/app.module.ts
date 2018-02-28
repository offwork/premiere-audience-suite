import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';

import { SharedMaterialModulesModule } from '@suite/shared-material-modules';
import { AudienceLayoutModule } from '@suite/audience-layout';
import { AudienceUiModule } from '@suite/audience-ui';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NxModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModulesModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
