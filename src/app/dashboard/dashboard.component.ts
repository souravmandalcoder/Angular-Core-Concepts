import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  catchNumber: any;

  constructor() { }

  ngOnInit() {
    this.catchNumber =
      localStorage.getItem('myNum') ?
        localStorage.getItem('myNum') : undefined;

  }

}
