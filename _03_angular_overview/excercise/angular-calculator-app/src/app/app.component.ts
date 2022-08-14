import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator-app';
    input1: number=0;
  input2: number=0;
  operator: string='';
  result: number= 0;

  calculate() {
    if (this.operator == '+'){
      this.result = parseFloat(String(this.input1)) + parseFloat(String(this.input2));
    } else if (this.operator == '-') {
      this.result = parseFloat(String(this.input1)) - parseFloat(String(this.input2));
    } else if (this.operator == '*') {
      this.result = parseFloat(String(this.input1)) * parseFloat(String(this.input2));
    } else if (this.operator == '/') {
      this.result = parseFloat(String(this.input1)) / parseFloat(String(this.input2));
    } else
      this.result = 0;
  }

  setinput1(event: KeyboardEvent) {
    // @ts-ignore
    this.input1 = event.target.value;
  }

  setinput2(event: KeyboardEvent) {
    // @ts-ignore
    this.input2 = event.target.value;
  }

  setoperator(event: Event) {
    // @ts-ignore
    this.operator = event.target.value;
  }
}
