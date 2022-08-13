import {Component, OnInit, ViewChild} from '@angular/core';
import { Customer} from "./model/customer.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'case-study';
  constructor() {}

  ngOnInit() {}

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  // customerList: Customer[] = [
  //   new Customer(1, 'Diamond', 'Nguyen Huu Toan', '1999-10-10', 'Male', 201802281, '0971263514', 'toan@gmail.com', '295 Ton Duc Thang', true),
  //   new Customer(2, 'Platinum', 'Nguyen Hoang Hao', '1999-10-10', 'Male', 333802281, '0981263312', 'hao@gmail.com', '95 Nguyen Huy Tuong', true),
  //   new Customer(3, 'Silver', 'Nguyen Thao Uyen', '1999-10-10', 'FeMale', 444802281, '0961263132', 'uyen@gmail.com', '102 Hoang Hoa Tham', true),
  //   new Customer(4, 'Gold', 'Nguyen Duong Trung Kien', '1999-10-10', 'Male', 555802281, '0931263123', 'kien@gmail.com', '05 Ton That Tung', true),
  //   new Customer(5, 'Member', 'Tran Xuan Truong', '1999-10-10', 'Male', 666802281, '0941263321', 'truong@gmail.com', '88 Nguyen Luong Bang', true)
  // ];


}
