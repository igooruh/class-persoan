import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesComponent } from './employees.component';
import { EmployeesService } from './employees.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EmployeesComponent
  ],
  exports: [
    EmployeesComponent
  ],
  providers: [
    EmployeesService
  ]
})
export class EmployeesModule { }
