import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../core/services/employee.service';

@Component({
  selector: 'app-flex-demo',
  templateUrl: './flex-demo.component.html',
  styleUrls: ['./flex-demo.component.scss']
})
export class FlexDemoComponent implements OnInit {
  obsDemoValue: any

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.empService.mybehaviourSubject.subscribe(res => {

      debugger;
      this.obsDemoValue = res;
    });
  }

}
