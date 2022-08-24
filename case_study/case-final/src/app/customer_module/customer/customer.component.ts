import {Component, OnInit, Input} from '@angular/core';
import {CustomerService} from '../service/customer.service';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {CustomerI} from '../model/customer-i';
import {CustomerTypeI} from '../model/customer-type-i';
import {CustomerTypeService} from '../service/customer-type.service';
import {FormGroup, FormControl} from '@angular/forms';
// @ts-ignore
import {Observable} from 'rxjs/dist/types';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  customerList: CustomerI[] = [];
  customerTypeList: CustomerTypeI[] = [];
  idCustomer: any = '';
  nameCustomer: any = '';
  displayStyle = 'none';

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private toast: ToastrService) {
  }
  ngOnInit() {
    this.getAll();
  }

  openPopup(idCustomer: any, nameCustomer: any) {
    this.idCustomer = idCustomer;
    this.nameCustomer = nameCustomer;
    this.displayStyle = 'block';
  }

  closePopup() {
    this.displayStyle = 'none';
  }

  getAll() {
    this.customerList = this.customerService.getAll().subscribe((next: CustomerI[]) => {
      this.customerList = next;
      // tslint:disable-next-line:no-shadowed-variable
      this.customerTypeService.getAll().subscribe((next: CustomerTypeI[]) => {
        this.customerTypeList = next;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.customerList.length; i++) {
          // tslint:disable-next-line:prefer-for-of
          for (let j = 0; j < this.customerTypeList.length; j++) {
            // tslint:disable-next-line:triple-equals
            if (this.customerList[i].customerTypeI == this.customerTypeList[j].id) {
              this.customerList[i].customerTypeI = this.customerTypeList[j];
            }
          }
        }
      });
    });
  }

  callService() {
    this.customerService.delete(this.idCustomer).subscribe(() => {
      this.getAll();
      this.closePopup();
      this.toast.success('Delete Customer Success !');
    });
  }
}

