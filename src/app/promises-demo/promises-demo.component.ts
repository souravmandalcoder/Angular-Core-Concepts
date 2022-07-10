import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises-demo',
  templateUrl: './promises-demo.component.html',
  styleUrls: ['./promises-demo.component.scss']
})
export class PromisesDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var prom = new Promise(
      (resolve, reject) => {
        if (true) {
          resolve('Promise is resolved 1');
          resolve('Promise is resolved');
          resolve('Promise is resolved');
        } else {
          reject(Error('Error Occured'));
        }
      },

    );

    prom.then(x => console.log(x))
      .catch(x => console.log(x))


  }

}
