import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer.model";
import {CustomerType} from "../model/customer-type.model";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

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
