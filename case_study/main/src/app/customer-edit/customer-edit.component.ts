import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../model/customer-type.model";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customerTypeList: CustomerType[] = [
    new CustomerType(1, 'Diamond'),
    new CustomerType(2,'Platinum'),
    new CustomerType(3,'Silver'),
    new CustomerType(4,'Gold'),
    new CustomerType(5,'Member')
  ];
}
