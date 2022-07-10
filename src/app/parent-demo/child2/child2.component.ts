import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  varFromChild: any;
  constructor(private empService: EmployeeService) {

    this.empService.mybehaviourSubject.subscribe(res => {
      this.varFromChild = res;
    })
  }

  ngOnInit() {


  }

}
