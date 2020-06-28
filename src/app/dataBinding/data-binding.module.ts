import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingComponent } from './data-binding.component';
import { DataBindingService } from './data-binding.service';

@NgModule({
  declarations: [
    DataBindingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DataBindingComponent
  ],
  providers: [
    DataBindingService
  ]
})
export class DataBindingModule { }
