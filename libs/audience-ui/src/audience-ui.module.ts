import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedMaterialModulesModule } from '@suite/shared-material-modules';

@NgModule({
  imports: [CommonModule, FormsModule, SharedMaterialModulesModule]
})
export class AudienceUiModule {}
