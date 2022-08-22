import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../../model/customer-type.model";
import {CustomerTypeService} from "../../service/customer-type.service";
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
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
      name: ['', customerName],
      birthday: ['', customerBirthDay],
      email: ['', [Validators.required,Validators.email]],
      gender: ['', Validators.required],
      type: ['', Validators.required],
      idNumber: ['', customerIdNumber],
      phone: ['', customerPhone],
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
  if (formControl.value == '') {
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
