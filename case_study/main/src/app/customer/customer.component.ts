import { Component, OnInit, Input } from '@angular/core';
import {Customer} from "../model/customer.model";
import {CustomerType} from "../model/customer-type.model";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  // @Input() customerList: Customer[];

  constructor() { }

  ngOnInit(): void {
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  customerList: Customer[] = [
    new Customer(1, new CustomerType(1,'Diamond'), 'Nguyen Huu Toan', '1999-06-10', 'Male', 201802281, '0971263514', 'toan@gmail.com', '295 Ton Duc Thang', true),
    new Customer(2, new CustomerType(2,'Platinum'), 'Nguyen Hoang Hao', '1998-05-10', 'Male', 333802281, '0981263312', 'hao@gmail.com', '95 Nguyen Huy Tuong', true),
    new Customer(3, new CustomerType(3,'Gole'), 'Nguyen Thao Uyen', '1997-09-10', 'FeMale', 444802281, '0961263132', 'uyen@gmail.com', '102 Hoang Hoa Tham', true),
    new Customer(4, new CustomerType(4,'Silver'), 'Nguyen Duong Trung Kien', '1996-12-10', 'Male', 555802281, '0931263123', 'kien@gmail.com', '05 Ton That Tung', true),
    new Customer(5, new CustomerType(5,'Member'), 'Tran Xuan Truong', '1995-11-10', 'Male', 666802281, '0941263321', 'truong@gmail.com', '88 Nguyen Luong Bang', true)
  ];
}

