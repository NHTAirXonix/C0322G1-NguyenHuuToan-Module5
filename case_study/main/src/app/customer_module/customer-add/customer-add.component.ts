import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../../model/customer-type.model";
import {CustomerTypeService} from "../service/customer-type.service";
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from "@angular/forms";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})

export class CustomerAddComponent implements OnInit {

  formSignUp: FormGroup | any;

  constructor(private customerTypeService: CustomerTypeService,
              private  fb: FormBuilder,
              private customerService: CustomerService,
              private router: Router) {
  }

  customerTypeList: CustomerType[] = [];

  ngOnInit(): void {

    this.formSignUp = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      type: ['', Validators.required],
      idNumber: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      status: [true]
    });

    this.getAll();

  }

  getAll() {
    this.customerTypeList = this.customerTypeService.getAll();
  }

  onSubmit() {
    const customer = this.formSignUp.value;
    this.customerService.save(customer,this.formSignUp.value.type)
    this.router.navigate(['/customer'])
  }


}
