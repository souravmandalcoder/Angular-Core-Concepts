import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  constructor() { }


  oneWayDataBinding: string;
  twoWayDataBinding: string;
  changeColorNumber: number;
  propertyBindingText: string = 'number';

  isRed: boolean = true;
  ngOnInit() {
  }

  someMethodClicked() {
    this.oneWayDataBinding = 'Button is clicked';
    this.isRed = !this.isRed;
  }

  someMethodDblClicked() {
    this.oneWayDataBinding = 'Button is double clicked';
  }

  rightClicked() {
    this.oneWayDataBinding = 'Button is right clicked';
  }

}
