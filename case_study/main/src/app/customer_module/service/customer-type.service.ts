import { Injectable } from '@angular/core';
import {CustomerType} from "../../model/customer-type.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor() { }

  customerTypeList: CustomerType[] = [
    new CustomerType(1, 'Diamond'),
    new CustomerType(2,'Platinum'),
    new CustomerType(3,'Silver'),
    new CustomerType(4,'Gold'),
    new CustomerType(5,'Member')
  ];

  getAll() {
    return this.customerTypeList;
  }

}
