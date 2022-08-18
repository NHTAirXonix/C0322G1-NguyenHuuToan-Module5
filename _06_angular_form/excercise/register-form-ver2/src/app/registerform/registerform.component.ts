import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  formSignUp: FormGroup | any;

  constructor(private  fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formSignUp = this.fb.group({
      email: ['', gmailValidator],
      pw: this.fb.group({
        password: ['', Validators.required],
        passwordC: ['', Validators.required],
      }, {validator: comparePassword}),
      country: ['Viet Nam', Validators.required],
      gender: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]],
      age: [null, [Validators.required, Validators.min(18)]],
      subject: this.fb.group({
        nodejs: false,
        angular: true,
        reactjs: false
      }),
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

function gmailValidator(formControl: FormControl) {
  if (formControl.value == '') {
    return {gmail: true, message: 'required'};
  }
  if (formControl.value.includes('@gmail.com')) {
    return null;
  }
  return {gmail: true, message: 'must have @gmail.com'};
}

export function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.passwordC) ? null : {
    passwordnotmatch: true
  };
}
