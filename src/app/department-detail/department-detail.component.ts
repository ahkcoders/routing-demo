import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3> You Selected Department with ID : {{departmentId}} </h3>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  public departmentName;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;    
  }

}
