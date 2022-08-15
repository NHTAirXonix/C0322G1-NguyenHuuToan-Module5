import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user = new User('Default Username', 'Universe', 'XXXX','abc@gmail.com','123');
  constructor() { }

  ngOnInit() {

  }

  onSubmit() {

  }
}
