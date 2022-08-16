import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="formSignUp" style="padding-left: 50px;padding-top: 50px">

      <p>Email</p>
      <input placeholder="Email" formControlName="email">
      <p *ngIf="formSignUp.get('email').invalid && formSignUp.get('email').touched">{{ formSignUp.get('email').errors.message}}</p>

      <br><br>

      <p>Password:</p>
      <div formGroupName="pw">
      <input type="password" placeholder="Password" formControlName="password">
      <br><br>
      <p>Confirm Password:</p>
      <input type="password" placeholder="confirm Password" formControlName="passwordC">
      <p *ngIf="formSignUp.hasError('passwordnotmatch', ['pw']) && formSignUp.get('pw').touched">Password does not match!</p>
      </div>

      <br><br>

      <p>Country</p>
      <select formControlName="country">
        <option value="Viet Nam">Viet Nam</option>
        <option value="Japan">Japan</option>
        <option value="Lao">Lao</option>
      </select>

      <br><br>

      <p>Age</p>
      <input placeholder="Age" formControlName="age">
      <p *ngIf="formSignUp.get('age').invalid && formSignUp.get('age').touched">Must be biger than 18 and required</p>

      <br><br>

      <p>Gender</p>
      <input type="radio" value="Male" formControlName="gender">Male
      <input type="radio" value="Female" formControlName="gender">Female


      <br><br>

      <p>Phone</p>
      <input placeholder="Email" formControlName="phone">
      <p *ngIf="formSignUp.get('phone').invalid && formSignUp.get('phone').touched">Phone is required and format is +84XXXXXXXXX </p>

      <br><br>

      <div formGroupName="subject">
        <label><input type="checkbox" name="NodeJS" formControlName="nodejs">NodeJS</label>
        <label><input type="checkbox" name="Angular" formControlName="angular">Angular</label>
        <label><input type="checkbox" name="ReactJS" formControlName="reactjs">ReactJS</label>
      </div>

      <br><br>
      <button [disabled]="formSignUp.invalid">Submit</button>
    </form>
    <code>{{ formSignUp.value | json }}</code>
  `
})

export class SignUpComponent implements OnInit {

  formSignUp: FormGroup | any;

  constructor(private  fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formSignUp = this.fb.group({
      email: ['', gmailValidator],
      pw: this.fb.group({
        password: ['', Validators.required],
        passwordC: ['', Validators.required],
      }, {
        validator: comparePassword
      }),
      country: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required, Validators.pattern("^\+84\d{9,10}$")],
      age: [null, [Validators.required,Validators.min(18)]],
      subject: this.fb.group({
        nodejs: false,
        angular: false,
        reactjs: false
      }),
    });
  }

  onSubmit() {
    console.log(this.formSignUp.value);
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
