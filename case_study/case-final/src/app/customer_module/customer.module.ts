import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerComponent} from './customer/customer.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {CustomerAddComponent} from './customer-add/customer-add.component';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, AbstractControl, Validators} from '@angular/forms';
import {CustomerRoutingModule} from './customer-routing.module';


@NgModule({
  declarations: [CustomerComponent, CustomerEditComponent, CustomerAddComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
