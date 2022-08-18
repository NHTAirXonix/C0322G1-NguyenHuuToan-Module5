import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../model/customer-type.model";
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from "@angular/forms";
import {CustomerTypeService} from "../service/customer-type.service";
import {CustomerService} from "../service/customer.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  formSignUp: FormGroup | any;
  id: number | any;

  constructor(private customerTypeService: CustomerTypeService,
              private  fb: FormBuilder,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {

      // @ts-ignore
      this.id = +paramMap.get('id');
      const customer = this.getCustomer(this.id);


      // @ts-ignore
      this.formSignUp = new FormGroup({
        id: new FormControl(
          // @ts-ignore
          customer.id,[Validators.required]),
        name: new FormControl(
          // @ts-ignore
          customer.name,[Validators.required]),
        birthday: new FormControl(
          // @ts-ignore
          customer.birthday,[Validators.required]),
        email: new FormControl(
          // @ts-ignore
          customer.email,[Validators.required]),
        gender: new FormControl(
          // @ts-ignore
          customer.gender,[Validators.required]),
        type: new FormControl(
          // @ts-ignore
          customer.type.getid(),[Validators.required]),
        idNumber: new FormControl(
          // @ts-ignore
          customer.idNumber,[Validators.required]),
        phone: new FormControl(
          // @ts-ignore
          customer.phone,[Validators.required]),
        address: new FormControl(
          // @ts-ignore
          customer.address,[Validators.required]),
        status: new FormControl(
          // @ts-ignore
          customer.status,[Validators.required])
      });
    });
  }

  customerTypeList: CustomerType[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerTypeList = this.customerTypeService.getAll();
  }

  getCustomer(id: number) {
    return this.customerService.findById(id);
  }

  updateProduct(id: number) {
    const customer = this.formSignUp.value;
    this.customerService.updateProduct(id, customer,customer.type);
    this.router.navigate(['/customer'])
  }
}
