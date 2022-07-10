import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { EmployeeService } from '../core/services/employee.service';

@Component({
  selector: 'app-observables-demo',
  templateUrl: './observables-demo.component.html',
  styleUrls: ['./observables-demo.component.scss']
})
export class ObservablesDemoComponent implements OnInit {

  constructor(private myService: EmployeeService) { }

  subject = new ReplaySubject();
  ngOnInit() {
    // create Observable
    // emit response and errors
    // observers will subscribe to the observable
    this.myService.setData('Chetan');

    this.subject.next('1');

    this.subject.subscribe(res => {
      console.log(res);
    })

    this.subject.next('2');




    const obs1 = new Observable(

      x => {
        x.next('hello');
        x.error('error');
      }

    );

    obs1.subscribe(

      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    )

    const obs = new Observable(x => {
      // do some checks 
      if (true) {
        x.next('Chetan');
        x.next('Priya');
        x.next('Atul');

      }
      else {
        x.error('Error Occured');
      }
    })
    // map, pipe,distinctuntillchanged, debouncetime, forkjoin, tap, 
    obs.subscribe(

      (success) => {
        console.log(success);
      },

      (error) => {
        console.log(error);
      })

    obs.subscribe(

      (x) => {
        console.log(x);
      },

      (y) => {
        console.log(y);
      })

    obs.subscribe(

      (x) => {
        console.log(x);
      },

      (y) => {
        console.log(y);
      })
  }

  test() {
    this.subject.next('3');
    this.subject.subscribe(res => {
      console.log(res);
    })
  }

}
