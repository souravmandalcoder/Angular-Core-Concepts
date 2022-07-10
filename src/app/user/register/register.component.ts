import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage: boolean;
  isSubmitted: boolean;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  registerForm: FormGroup;

  lname: FormControl = new FormControl('');

  // we need ReactiveFormsModule to design reactive forms
  // validations are applied at component side
  // no use of ngmodel
  // less html code, more component code

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.minLength(10)]],
      lname: ['', [Validators.required, Validators.minLength(10), this.onlyNumber()]]
    })
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.registerForm.valid) {
      alert("success" + JSON.stringify(this.registerForm.value));
      this.router.navigate(['login']);
    } else {
      this.errorMessage = true;
    }
  }

  onlyNumber() {
    // write your is number only validation
    if (!isNaN) {
      return true;
    }
  }
}
