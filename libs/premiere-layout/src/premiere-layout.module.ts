import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedMaterialModulesModule } from '@suite/shared-material-modules';

import { FullLayoutComponent } from './components/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './components/simple-layout/simple-layout.component';

export const components: any[] = [SimpleLayoutComponent, FullLayoutComponent];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, SharedMaterialModulesModule],
  declarations: [...components],
  exports: [...components]
})
export class PremiereLayoutModule {}
