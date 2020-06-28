import { Component, OnInit } from '@angular/core';

import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  nomePortal: string;

  employees: string[];

  constructor() {

    this.nomePortal = 'http://loiane.training';
  }

  ngOnInit(): void {
  }

}
