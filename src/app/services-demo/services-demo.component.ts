import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../core/services/employee.service';

@Component({
  selector: 'app-services-demo',
  templateUrl: './services-demo.component.html',
  styleUrls: ['./services-demo.component.scss']
})
export class ServicesDemoComponent implements OnInit {

  constructor(private empService: EmployeeService) { }

  displayedColumns: string[] = ['name', 'address', 'phone', 'company', 'actions'];
  dataSource: any;
  employee: Employee = new Employee();
  isEdit: boolean;

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    this.empService.getEmployee().subscribe(res => {
      this.dataSource = res;
    })
  }

  addRecord() {
    this.empService.addNewEmployee(this.employee).subscribe(res => {
      this.getEmployee();
    })
  }

  deleteEmployee(empId: number) {
    this.empService.deleteEmployee(empId).subscribe(res => {
      this.getEmployee();
    })
  }

  editEmployee(employee: Employee) {
    debugger
    this.isEdit = true;
    this.employee = employee;
  }

  updateRecord() {
    debugger;
    this.empService.updateEmployee(this.employee).subscribe(res => {
      debugger
      this.employee = new Employee();
      this.getEmployee();
    })
    this.isEdit = false;
  }
}

export class Employee {
  name: string;
  address: string;
  phone: number;
  company: string;
}