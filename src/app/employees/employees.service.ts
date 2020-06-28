import { Injectable } from '@angular/core';

@Injectable()
export class EmployeesService {

  constructor() { }

  getCourses() {
    return ['Marcella', 'Paula', 'Carol', 'Ana', 'Maria'];
  }
}
