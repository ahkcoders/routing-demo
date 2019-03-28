import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3> You Selected Department with ID : {{departmentId}} </h3>

    <p>
      <button (click)="showOverview()" > Overview </button>
      <button (click)="showContact()"> Contact </button>
    </p>
    <router-outlet></router-outlet>

    <a (click)="goPrevious()"> Previous </a>
    <a (click)="goNext()"> Next </a>

    <div>
      <button (click)="gotoDepartments()"> Back </button>
    </div>

  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  public departmentName;
  public selectedId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
     // tslint:disable-next-line: radix
     let id = parseInt(this.route.snapshot.paramMap.get('id'));
     this.departmentId = id;

    /* this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line: radix
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    }); */
  }

  goPrevious() {
    let previousId = this.departmentId - 1 ;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    let nextId = this.departmentId + 1 ;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments',{id:selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

}
