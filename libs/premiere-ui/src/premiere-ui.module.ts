import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedMaterialModulesModule } from '@suite/shared-material-modules';

import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchActionComponent } from './components/search-action/search-action.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedMaterialModulesModule],
  declarations: [SearchBoxComponent, SearchActionComponent],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, SharedMaterialModulesModule, SearchBoxComponent, SearchActionComponent]
})
export class PremiereUiModule {}
