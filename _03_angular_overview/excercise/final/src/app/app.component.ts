import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';

  result: string = '';
  calculates: number = 0;
  inputAdd = '';
  operatorAdd1 = '';
  operatorAdd2 = '';

  allClear() {
    this.result = '';
  }

  backspace() {
    this.result = this.result.slice(0, this.result.length - 1)
  }

  pressKey(input: string) {
    this.result += input;
  }

  calculate() {
    for (let i = 0; i < this.result.length; i++) {
      if (this.result.charAt(i) != '+' && this.result.charAt(i) != '-' && this.result.charAt(i) != '*' && this.result.charAt(i) != '/') {
        this.inputAdd += this.result.charAt(i);
      } else {

        if (this.operatorAdd1==''){
          this.operatorAdd1 += this.result.charAt(i);
        } else if (this.operatorAdd2=='') {
          this.operatorAdd2 += this.result.charAt(i);
        } else {
          this.operatorAdd1 = this.operatorAdd2;
          this.operatorAdd2 = this.result.charAt(i);
        }

        if (this.operatorAdd2 != '') {
          if (this.operatorAdd1 == '+') {
            this.calculates = this.calculates + parseFloat(this.inputAdd);
          }
          if (this.operatorAdd1 == '-') {
            this.calculates = this.calculates - parseFloat(this.inputAdd);
          }
          if (this.operatorAdd1 == '*') {
            this.calculates = this.calculates * parseFloat(this.inputAdd);
          }
          if (this.operatorAdd1 == '/') {
            this.calculates = this.calculates / parseFloat(this.inputAdd);
          }
        } else {
          this.calculates = parseFloat(this.inputAdd);
        }

        this.inputAdd = '';
      }
      if (i == this.result.length-1) {

        if (this.operatorAdd2 == '+') {
          this.calculates = this.calculates + parseFloat(this.inputAdd);
        }
        if (this.operatorAdd2 == '-') {
          this.calculates = this.calculates - parseFloat(this.inputAdd);
        }
        if (this.operatorAdd2 == '*') {
          this.calculates = this.calculates * parseFloat(this.inputAdd);
        }
        if (this.operatorAdd2 == '/') {
          this.calculates = this.calculates / parseFloat(this.inputAdd);
        }
        
      }
    }
    this.result = '';
    this.result = String(this.calculates);
    this.calculates = 0;
    this.inputAdd = '';
    this.operatorAdd1 = '';
    this.operatorAdd2 = '';
  }
}
