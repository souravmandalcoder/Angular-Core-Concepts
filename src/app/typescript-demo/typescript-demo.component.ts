import { Component, OnInit } from '@angular/core';
import clonedeep from 'lodash.clonedeep';

@Component({
  selector: 'app-typescript-demo',
  templateUrl: './typescript-demo.component.html',
  styleUrls: ['./typescript-demo.component.scss']
})
export class TypescriptDemoComponent implements OnInit {

  // string, number, any, Date , boolean

  testString: string = 'c';
  testString1: string = 'test String';
  emp: Employee[] = []; // multiple employees
  empSingle: Employee = new Employee();           // single employee

  // int, double, float, big int, == > number

  testSomething: any = new Date();

  testNumber: number;

  testDate: Date = new Date();

  testBoolean: boolean = false;

  // variableName : type = value

  arrNumbers: number[] = [4, 5, 6, 7, 7, 7, 1, 2, 3];
  arr2: number[] = [10, 11, 12];
  incrementedArr: any[];

  x: number = 2;
  // sort

  //single object
  emp1: Employee = new Employee();
  emp2: Employee = new Employee('test', 'constructor');
  emp3: Employee = new Employee('constructor3');
  newArr: Employee[] = [];
  // Array
  empArr: Employee[] = [
    {
      firstName: 'chetan',
      lastName: 'test'
    },
    {
      firstName: 'test 2',
      lastName: 'test 3'
    }
  ];

  constructor() {
    this.x = 3;
    this.testMethod();
  }

  someMethod() {

  }

  ngOnInit() {
    this.x = 5;
    this.empArr[1].firstName = 'priya'

    this.empArr.push(this.emp1);
    this.empArr.pop();

    // Assignment on Array of Objects
    // 1. find lastname of student whose name is chetan
    // 2. Push multiple objects in array  in differnt ways 
    // 3. append prefix Mr/Ms to  // use for each loop
    //  fname of all employees 

    var res = this.empArr.filter(x => x.firstName == 'chetan');
    if (res && res.length > 0) {
      console.log(res[0].lastName)
    }

    this.empArr.push(res[0]);

    this.empArr.forEach(x => {
      x.firstName = 'Mr. ' + x.firstName;
    });

    // this.newArr = this.empArr;

    // this.empArr.forEach(x => {
    //   this.newArr.push(x);
    // })

    this.newArr = clonedeep(this.empArr);

    var addNewItem = new Employee('copied', 'item');

    this.newArr.push(addNewItem);








    // this.testMethod();  
    // this.arrNumbers = this.arrNumbers.sort((a, b) => a - b);
    // sort array of string;
    // push, pop  -
    // - concat , foreach increment no. by 1
    // - filter, find -  7
    // slice, splice
    console.log(this.x);

    this.incrementedArr = []
    this.arrNumbers.forEach(i => {
      i = i + 1;
      this.incrementedArr.push(i);

    });
    // orignalarr =  [4, 5, 6, 7, 7, 7, 1, 2, 3];
    // removeduparr = [4 , 5 , 6,7 , 2 ,3]
    var removeDupArr = [];
    this.arrNumbers.forEach(x => {
      // x = 7

      if (removeDupArr && removeDupArr.length > 0) {
        var res = removeDupArr.filter(y => y == x);
        // y = 4, 5,  6 , 7
        if (res && res.length == 0) {
          removeDupArr.push(x);
        }
      } else {
        removeDupArr.push(x);
      }
    })

    this.testNumber = undefined;
    var a = 'chetan';
    var a = 'test';
    console.log(this.testNumber);

    // var item = this.testMethod();
    // console.log(item);

    ////////////////////////////day 2 /////////////////


    // How to assign values to single Employee object;

    this.emp1.firstName = 'chetan';
    this.emp1.lastName = 'birajdar';


  }

  testMethod() {
    this.x = 4;
  }

}

class Something {

  // do all the declarations here
  x: number = 2;

  // variables and methods will be inside the class and paraller; 
  // to eachother

  constructor() {
    this.x = 3;
  }

  ngOnInit() {
    //  this.method();
  }

  method() {
    this.x = 4;
  }

  // push, pop , filter, find, foreach, 

  // remove duplicates in an array  // foreach , find , pop


  // find total count of all repeating  values in an array


}

export class Employee {  // Property / model
  firstName: string | undefined;
  lastName: string;
  // constructor() {

  // }

  constructor(fname?: string, lname?: string) {
    this.firstName = fname;
    this.lastName = lname;
  }
}

// emp: Employee[] = []; // multiple employees
// empSingle: Employee = new Employee();    