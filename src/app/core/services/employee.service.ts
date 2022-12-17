import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, forkJoin, BehaviorSubject } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators'

const url = 'http://localhost:3000';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Q_ejebwY5tI5MnITO-UX_SgacyAFqQ_RRriIoXPLOGc'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  someVariable: any;
  public mybehaviourSubject: BehaviorSubject<any> = new BehaviorSubject('');


  // someValue = this.mybehaviourSubject.asObservable();


  setData(value: any) {
    debugger;
    this.mybehaviourSubject.next(value);
  }

  // Observable : next, error, complete
  // observer : subscribe

  // Subject  : Observable + Observer;
  // browser -->   api call -- > web api -- > db

  // browser -->  req --> 1000 api call -- > interceptor --> req =  req + header(token) --> req --> web api -- > db

  constructor(private httpClient: HttpClient) { }

  getEmployee(): Observable<any> {
    const uri = url + '/employees';
    //http://localhost:3000/employees
    return this.httpClient.get(uri).pipe(
      map(res => {
        return res;
      }),
      catchError((error: HttpErrorResponse): any => {
        console.log(error);
      })

    )

  }

  addNewEmployee(employee: any): Observable<any> {
    const uri = url + '/employees';
    return this.httpClient.post(uri, employee).pipe(
      map(res => {
        return res;
      }),

      catchError((error: HttpErrorResponse): any => {
        console.log(error);
      })
    )
  }

  deleteEmployee(employeeId: any): Observable<any> {
    const uri = url + '/employees/' + employeeId;
    return this.httpClient.delete(uri).pipe(
      map(res => {
        return res;
      }),
      catchError((error: HttpErrorResponse): any => {
        console.log(error);
      })

    )
  }

  updateEmployee(employee: any): Observable<any> {
    debugger;
    const uri = url + '/employees/' + employee.id;
    return this.httpClient.put(uri, employee).pipe(
      map(res => {
        debugger;
        return res;
      }),
      catchError((error: HttpErrorResponse): any => {
        console.log(error);
      })

    )
  }


}
