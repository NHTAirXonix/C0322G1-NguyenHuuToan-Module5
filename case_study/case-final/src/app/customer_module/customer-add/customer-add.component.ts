import {Component, OnInit} from '@angular/core';
import {CustomerTypeService} from '../service/customer-type.service';
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {CustomerService} from '../service/customer.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {CustomerTypeI} from '../model/customer-type-i';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})

export class CustomerAddComponent implements OnInit {

  customerTypeList: CustomerTypeI[] = [];

  formSignUp: FormGroup | any;

  constructor(private customerTypeService: CustomerTypeService,
              private  fb: FormBuilder,
              private customerService: CustomerService,
              private router: Router,
              private toast: ToastrService) {
  }



  ngOnInit(): void {

    this.formSignUp = this.fb.group({
      id: ['', Validators.required],
      name: ['', customerName],
      birthday: ['', checkBirthDay],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      customerTypeI: ['', Validators.required],
      idNumber: ['', customerIdNumber],
      phone: ['', customerPhone],
      address: ['', Validators.required],
      status: [true]
    });

    this.getAll();

  }

  getAll() {
    this.customerTypeService.getAll().subscribe((next: CustomerTypeI[]) => {this.customerTypeList = next; });
  }

  onSubmit() {
    const customer = this.formSignUp.value;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.customerTypeList.length; i++) {
      // tslint:disable-next-line:triple-equals
      if (this.customerTypeList[i].id == customer.customerTypeI) {
        customer.customerTypeI = this.customerTypeList[i];
      }
    }
    console.log(this.formSignUp.value);
    this.customerService.save(this.formSignUp.value).subscribe(() => {
      this.toast.success('Create Customer success !');
    }),
    this.router.navigate(['/customer/list']);
  }


}

function customerName(formControl: FormControl) {
  if (formControl.value === '') {
    return {name: true, message: 'Name is required'};
  } else
  if (!formControl.value.match('^[A-Z](?:\'[A-Z])*[a-z]+(?: [A-Z](?:\'[A-Z])*[a-z]+)*$')) {
    return {name: true, message: 'Wrong Format'};
  } else {
    return null;
  }
}

function customerPhone(formControl: FormControl) {
  if (formControl.value === '') {
    return {phone: true, message: 'Phone is required !'};
  } else
  if (!formControl.value.match('^(090)[0-9]{7}|(091)[0-9]{7}|(\\(84\\)\\+90)[0-9]{7}|(\\(84\\)\\+91)[0-9]{7}$')) {
    return {phone: true, message: 'Wrong Format !'};
  } else {
    return null;
  }
}

function customerIdNumber(formControl: FormControl) {
  if (formControl.value === '') {
    return {idNumber: true, message: 'ID Number is required !'};
  } else
  if (!formControl.value.match('^([0-9]{9})|([0-9]{12})$')) {
    return {idNumber: true, message: 'Wrong Format !'};
  } else {
    return null;
  }
}

function checkBirthDay(control: AbstractControl) {
  const birthDay = new Date(control.value);
  if (dateDiff(birthDay, new Date()) < 1096 || dateDiff(birthDay, new Date()) > 36503) {
    return {checkAge: true};
  }
  return null;
}

function parseDate(str: string) {
  const dmy = str.split('-');
  return new Date(Number(dmy[0]), Number(dmy[1]) - 1, Number(dmy[2]));
}

function dateDiff(first: number | Date, second: number | Date) {
  // @ts-ignore
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}
