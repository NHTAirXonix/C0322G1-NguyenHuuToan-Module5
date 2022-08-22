import { Injectable } from '@angular/core';
import {Customer} from "../model/customer.model";
import {CustomerType} from "../model/customer-type.model";
import {CustomerTypeService} from "./customer-type.service";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private customerTypeService: CustomerTypeService) { }

  customerTypeList: CustomerType[] = this.customerTypeService.getAll();

  customerList: Customer[] = [
    new Customer(1, new CustomerType(1,'Diamond'), 'Nguyen Huu Toan', '1999-06-10', 'Male', 201802281, '0971263514', 'toan@gmail.com', '295 Ton Duc Thang', true),
    new Customer(2, new CustomerType(2,'Platinum'), 'Nguyen Hoang Hao', '1998-05-10', 'Male', 333802281, '0981263312', 'hao@gmail.com', '95 Nguyen Huy Tuong', true),
    new Customer(3, new CustomerType(3,'Gole'), 'Nguyen Thao Uyen', '1997-09-10', 'Female', 444802281, '0961263132', 'uyen@gmail.com', '102 Hoang Hoa Tham', true),
    new Customer(4, new CustomerType(4,'Silver'), 'Nguyen Duong Trung Kien', '1996-12-10', 'Male', 555802281, '0931263123', 'kien@gmail.com', '05 Ton That Tung', true),
    new Customer(5, new CustomerType(5,'Member'), 'Tran Xuan Truong', '1995-11-10', 'Male', 666802281, '0941263321', 'truong@gmail.com', '88 Nguyen Luong Bang', true)
  ];

  getAll() {
    return this.customerList;
  }

  findById(id: number) {
    return this.customerList.find(customer => customer.getid() === id);
  }


  save(customer: any,id: any) {
    let customerType;
    for (let i =0; i< this.customerTypeList.length; i++ ){
        if (this.customerTypeList[i].getid() == id) {
          let newCustomer = new Customer(
            customer.id,
            this.customerTypeList[i],
            customer.name,
            customer.birthday,
            customer.gender,
            customer.idNumber,
            customer.phone,
            customer.email,
            customer.address,
            customer.status)
          this.customerList.push(newCustomer);
        }
    }
  }

  updateProduct(id: number, customer: any,idType: any) {
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].getid() === id) {
        for (let j =0; j< this.customerTypeList.length; j++ ) {
          if (this.customerTypeList[j].getid() == idType) {
            this.customerList[i].setname(customer.name);
            this.customerList[i].setbirthday(customer.birthday);
            this.customerList[i].setgender(customer.gender);
            this.customerList[i].setidNumber(customer.idNumber);
            this.customerList[i].setphone(customer.phone);
            this.customerList[i].setemail(customer.email);
            this.customerList[i].setaddress(customer.address);
            this.customerList[i].setstatus(customer.status);
            this.customerList[i].settype(this.customerTypeList[j]);
            console.log( this.customerList[i]);
          }
        }
      }
    }
  }

  deleteCustomer(id: number) {
    this.customerList = this.customerList.filter(customer => {
      return customer.getid() !== id;
    });
  }

}

