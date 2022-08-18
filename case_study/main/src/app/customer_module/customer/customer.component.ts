import {Component, OnInit, Input} from '@angular/core';
import {Customer} from "../../model/customer.model";
import {CustomerType} from "../../model/customer-type.model";
import {CustomerService} from "../service/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) {
  }

  customerList: Customer[] = [];

  ngOnInit() {
    this.getAll();
  }
  idCustomer: any='';
  nameCustomer: any='';
  displayStyle = "none";

  openPopup(idCustomer: any, nameCustomer: any) {
    this.idCustomer = idCustomer;
    this.nameCustomer = nameCustomer;
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }

  getAll() {
    this.customerList = this.customerService.getAll();
  }

  callService() {
    this.customerService.deleteCustomer(this.idCustomer);
    this.getAll();
    this.closePopup();
  }


}

