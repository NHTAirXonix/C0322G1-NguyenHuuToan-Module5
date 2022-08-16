import { Component} from "@angular/core";

@Component({
  selector: 'app-sign-in',
  template: `
            <form (submit)="onSubmit(formSignIn)" #formSignIn="ngForm">
              <input placeholder="Email"
                     ngModel
                     #txtEmail="ngModel"
                     name="email"
                     required
                     email
                     >
              <p *ngIf="txtEmail.touched && txtEmail.errors?.required" style="color: red">Email is required</p>
              <p *ngIf="txtEmail.touched && txtEmail.errors?.email" style="color: red">Email is not valid</p>
              <br><br>
              <input
                type="password"
                placeholder="Password"
                ngModel
                #txtPassword="ngModel"
                name="password"
                minlength="6"
                pattern="[a-z]*"
              >
              <br><br>
              <div ngModelGroup="subjects">
                <label><input type="checkbox"  [ngModel] = 'false' name="NodeJS">NodeJS</label>
                <label><input type="checkbox"  [ngModel] = 'false' name="Angular">Angular</label>
                <label><input type="checkbox"  [ngModel] = 'false' name="ReactJS">ReactJS</label>
              </div>

              <br><br>
              <button [disabled]="formSignIn.invalid">Submit</button>
<!--              <button >Submit</button>-->
            </form>
            <p>{{ txtEmail.errors | json }}</p>
            <p>{{ txtPassword.errors | json}}</p>
            <p>{{ formSignIn.value | json }}</p>
            `
})

export class SignInComponent {
  email ='';
  password ='';
  onSubmit(formSignIn: any){
    console.log(formSignIn)
    console.log(formSignIn.value)
  }
}
