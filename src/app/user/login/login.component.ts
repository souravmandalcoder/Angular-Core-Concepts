import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: Employee = new Employee();
  constructor() { }

  // use of Formsmodule
  // not much coding/ initialization in component
  // uses ngModel
  // Most of validations are done on html side

  ngOnInit() {
  }

  onSubmit(f: any) {
    if (f.form.valid) {
      alert("success");
      // make APi call to login
      // reponse true , token
      // this.loginService.login(user, pass).subscribe(res => {
      // localStorage.setItem('token', res.token);  
      //  })
    }

  }


}

export class Employee {
  username: string;
  password: string;
  phone: number[];
}


// components can be siblings 
// components are parent and child - input,output

// using storage, services, routing



