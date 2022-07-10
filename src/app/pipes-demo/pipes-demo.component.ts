import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.scss']
})
export class PipesDemoComponent implements OnInit {

  constructor() { }

  joiningDate: Date = new Date();

  testPipe: string = 'TestPipe';

  insertNum: number;

  originalList: number[] = [3, 2, 1, 4, 5, 6, 10, 22];

  ngOnInit() {
  }

  insertNumber() {
    if (this.insertNum) {
      this.originalList.push(this.insertNum)
    }

    localStorage.setItem('myNum', this.insertNum.toString());
  }


}
