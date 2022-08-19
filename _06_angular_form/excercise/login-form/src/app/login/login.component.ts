import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formSignUp: FormGroup | any;

  constructor(private  fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formSignUp = this.fb.group({
      email: ['', Validators.email],
      password: ['', [Validators.required,Validators.minLength(6)]],
    });
  }

  onSubmit() {
    console.log(this.formSignUp.value);
  }

  user: any[] = []
  save(formSignUp: any) {
    this.user.push(formSignUp.value);
    console.log(formSignUp.value);
  }

}

// function gmailValidator(formControl: FormControl) {
//   if (formControl.value == '') {
//     return {gmail: true, message: 'required'};
//   }
//   if (formControl.value.includes('@gmail.com')) {
//     return null;
//   }
//   return {gmail: true, message: 'must have @gmail.com'};
// }
