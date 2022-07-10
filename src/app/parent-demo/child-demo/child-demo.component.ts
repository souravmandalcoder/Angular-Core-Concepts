import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.scss']
})
export class ChildDemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("Hello from child onchanges")
    console.log(changes);
  }
  ngDoCheck(): void {
    console.log("Hello from child ngDoCheck")
  }
  ngAfterContentInit(): void {
    console.log("Hello from child ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("Hello from child ngAfterContentChecked")
  }

  ngAfterViewInit(): void {
    console.log("Hello from child ngAfterViewInit");
    this.secondAttributeInParentComponent = "Hello second";
  }
  ngAfterViewChecked(): void {
    console.log("Hello from child ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    // if form is invalid
    alert("do you wish to continue");
    // subject.unsubscribeall();
  }


  constructor(private myService: EmployeeService) {
    console.log("Hello from child constructor")

  }

  // parent to child - Input in child component - Property binding [propery]= value
  // child to parent - Output in child component - Event Binding (eventName)= methodName()


  @Input() someAttributeInParentComponent: string;

  @Input() secondAttributeInParentComponent: string = 'Hello from child';

  someNum: number;

  @Output() eventInChild: EventEmitter<number> = new EventEmitter<number>();


  ngOnInit() {
    console.log("Hello from child oninit")
    this.secondAttributeInParentComponent = "Hello second"
    // api call
  }

  sendNum() {
    this.eventInChild.emit(this.someNum);
  }

  updateNumber() {
    this.myService.setData(this.someNum);
  }


}
