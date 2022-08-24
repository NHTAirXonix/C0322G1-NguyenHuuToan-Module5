import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../model/customer-type.model";
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

      this.formSignUp = this.fb.group({
        id: new FormControl(
          // @ts-ignore
          customer.id,[Validators.required]),
        name: new FormControl(
          // @ts-ignore
          customer.name,customerName),
        birthday: new FormControl(
          // @ts-ignore
          customer.birthday,customerBirthDay),
        email: new FormControl(
          // @ts-ignore
          customer.email,[Validators.required,Validators.email]),
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
          customer.phone,customerPhone),
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
    // return this.customerService.findById(id);
  }

  updateProduct(id: number) {
    const customer = this.formSignUp.value;
    // this.customerService.updateProduct(id, customer,customer.type);
    this.router.navigate(['/customer'])
  }
}

function customerName (formControl: FormControl) {
  if (formControl.value == '') {
    return {name: true, message: 'Name is required'};
  } else
  if (!formControl.value.match('^[A-Z](?:\'[A-Z])*[a-z]+(?: [A-Z](?:\'[A-Z])*[a-z]+)*$')) {
    return {name: true, message: 'Wrong Format'};
  } else
    return null;
}

function customerPhone (formControl: FormControl) {
  if (formControl.value == '') {
    return {phone: true, message: 'Phone is required !'};
  } else
  if (!formControl.value.match('^(090)[0-9]{7}|(091)[0-9]{7}|(\\(84\\)\\+90)[0-9]{7}|(\\(84\\)\\+91)[0-9]{7}$')) {
    return {phone: true, message: 'Wrong Format !'};
  } else
    return null;
}

function customerIdNumber (formControl: FormControl) {
  if (formControl.value.length == '') {
    return {idNumber: true, message: 'ID Number is required !'};
  } else
  if (!formControl.value.match('^([0-9]{9})|([0-9]{12})$')) {
    return {idNumber: true, message: 'Wrong Format !'};
  } else
    return null;
}

function customerBirthDay (formControl: FormControl) {
  let input: Date = formControl.value

  let now = new Date();

  if (formControl.value == '') {
    return {idNumber: true, message: 'Birthday is required !'};
  } else
  if (true) {
    console.log(input + 'first');
    console.log(now.toLocaleDateString());
    return {idNumber: true, message: 'Wrong Format !'};
  } else
    return null;
}
