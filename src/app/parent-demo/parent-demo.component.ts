import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parent-demo',
  templateUrl: './parent-demo.component.html',
  styleUrls: ['./parent-demo.component.scss']
})
export class ParentDemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("Hello from parent onchanges")
  }
  ngDoCheck(): void {
    console.log("Hello from parent ngDoCheck")
  }
  ngAfterContentInit(): void {
    console.log("Hello from parent ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("Hello from parent ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("Hello from parent ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("Hello from parent ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("Hello from parent ngOnDestroy")
  }

  someVariableInParentComponent: string = "Hello from parent";
  receivedNumber: number = 1;
  constructor() {
    console.log("Hello from parent constructor")
  }

  ngOnInit() {
    console.log("Hello from parent ngOnInit")
  }

  someMethodInParent(event: any) {
    this.receivedNumber = event;
  }

  detectChanges() {
    this.receivedNumber = 2;
  }

}
