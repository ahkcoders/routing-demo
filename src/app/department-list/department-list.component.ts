import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department List
    </h3>

    <ul class="items">
      <li (click) = "onSelect(department)" [class.selected] = "iSelected(department)"  *ngFor="let department of departments">
          <span class="badge"> {{department.id}} </span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})

export class DepartmentListComponent implements OnInit {

  public selectedId;
  departments = [
    {id: 1, name: 'Angular'},
    {id: 2, name: 'Node'},
    {id: 3, name: 'MongoDB'},
    {id: 4, name: 'Ruby'},
    {id: 5, name: 'Bootstrap'}
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.selectedId = id;

    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line: radix
      const id = parseInt(params.get('id'));
      this.selectedId = id;
    });
 }

  onSelect(department) {
    console.log(department);
    // this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  iSelected(department) {
    return department.id === this.selectedId;
  }

}
