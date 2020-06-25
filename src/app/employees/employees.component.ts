import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  nomePortal: string;

  courses: string[] = ['Java', 'Node', 'Python'];

  constructor() {

    this.nomePortal = 'http://loiane.training';
  }

  ngOnInit(): void {
  }

}
