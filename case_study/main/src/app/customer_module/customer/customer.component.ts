// import {Component, OnInit, Input} from '@angular/core';
// import {Customer} from "../model/customer.model";
// import {CustomerType} from "../model/customer-type.model";
// import {CustomerService} from "../service/customer.service";
// import {ToastrModule, ToastrService} from "ngx-toastr";
//
// @Component({
//   selector: 'app-customer',
//   templateUrl: './customer.component.html',
//   styleUrls: ['./customer.component.css']
// })
//
// export class CustomerComponent implements OnInit {
//
//   constructor(private customerService: CustomerService,
//               private toast: ToastrService) {
//   }
//
//   customerList: Customer[] = [];
//
//   ngOnInit() {
//     this.getAll();
//   }
//   idCustomer: any='';
//   nameCustomer: any='';
//   displayStyle = "none";
//
//   openPopup(idCustomer: any, nameCustomer: any) {
//     this.idCustomer = idCustomer;
//     this.nameCustomer = nameCustomer;
//     this.displayStyle = "block";
//   }
//
//   closePopup() {
//     this.displayStyle = "none";
//   }
//
//   getAll() {
//     this.customerList = this.customerService.getAll();
//   }
//
//   callService() {
//     this.customerService.deleteCustomer(this.idCustomer);
//     this.getAll();
//     this.closePopup();
//     this.toast.success('Delete Customer Success !');
//   }
//
//
// }
//

import {Component, OnInit, Input} from '@angular/core';
import {CustomerService} from "../service/customer.service";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {CustomerI} from "../model/customer-i";
import {CustomerTypeI} from "../model/customer-type-i";
import {CustomerTypeService} from "../service/customer-type.service";
// @ts-ignore
import {Observable} from "rxjs/dist/types";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  customerList: CustomerI[] = [];
  customers: Observable<CustomerI[]> = [];
  customerTypeList: CustomerTypeI[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private toast: ToastrService) {
  }

  ngOnInit() {
    this.customerService.getAll().subscribe((next: CustomerI[]) => {
      this.customers = next;
      this.customerTypeService.getAll().subscribe((next: CustomerTypeI[]) =>{
        this.customerTypeList = next;
        for (let i=0;i<this.customers;i++) {
          for (let j=0;i<this.customerTypeList.length;j++) { // @ts-ignore
            if (this.customers[i].customerTypeI === this.customerTypeList[j]) {
              this.customers[i].customerTypeI = this.customerTypeList[j];
            }
          }
      //     // @ts-ignore
      //
      //     // @ts-ignore
      //     // if (this.customerList[i].customerTypeI === this.customerTypeList[i])
      // this.customerList[i].customerTypeI = this.customerTypeList.find(value => value.id === this.customerList[i].customerTypeI.id);
        }
      });
    });
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
    this.customers = this.customerService.getAll().subscribe((next: CustomerI[]) => {
      this.customerList = next;
      // this.customerTypeService.getAll().subscribe((next: CustomerTypeI[]) =>{
      //   this.customerTypeList = next;
      //   for (let i=0;i<this.customerList.length;i++) {
      //     for (let j=0;i<this.customerTypeList.length;j++) { // @ts-ignore
      //       if (this.customerList[i].customerTypeI === this.customerTypeList[j]) {
      //         this.customerList[i].customerTypeI = this.customerTypeList[j];
      //       }
      //     }
      //     // @ts-ignore
      //
      //     // @ts-ignore
      //     // if (this.customerList[i].customerTypeI === this.customerTypeList[i])
      //     // this.customerList[i].customerTypeI = this.customerTypeList.find(value => value.id === this.customerList[i].customerTypeI.id);
      //   }
      // });
    });
  }

  callService() {
    // this.customerService.deleteCustomer(this.idCustomer);
    this.getAll();
    this.closePopup();
    this.toast.success('Delete Customer Success !');
  }


}

