import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-singup-rform',
  templateUrl: './singup-rform.component.html',
  styleUrls: ['./singup-rform.component.css']
})
export class SingupRformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      pw: this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      })
    });
  }

  onSubmit() {
    console.log(this.form);
  }
}


