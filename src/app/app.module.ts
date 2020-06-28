import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './myFirstComponent/my-first.component';
import { CreatesComponentCommandLineComponent } from './creates-component-command-line/creates-component-command-line.component';

import { EmployeesModule } from '../app/employees/employees.module';
import { DataBindingModule } from '../app/dataBinding/data-binding.module';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    CreatesComponentCommandLineComponent
  ],
  imports: [
    BrowserModule,
    EmployeesModule,
    DataBindingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
