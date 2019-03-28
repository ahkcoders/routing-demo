import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
  <h3>
  Employees List
  </h3>

<ul class="items">
  <li *ngFor="let employee of employees">
      <span class="badge"> {{employee.id}} </span> {{employee.name}}
  </li>
</ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
  employees = [
    {id: 1, name: 'Aasif'},
    {id: 2, name: 'Praik'},
    {id: 3, name: 'Kshitij'},
    {id: 4, name: 'Amol'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
