import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {CustomerTypeService} from '../service/customer-type.service';
import {CustomerService} from '../service/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerTypeI} from '../model/customer-type-i';
import {ToastrService} from 'ngx-toastr';
import {log} from 'util';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  formEdit: FormGroup = new FormGroup({
  id: new FormControl('', [Validators.required]),
  name: new FormControl('', customerName),
  birthday: new FormControl('', checkBirthDay),
  email: new FormControl('', [Validators.required, Validators.email]),
  gender: new FormControl('', [Validators.required]),
  customerTypeI: new FormControl('', [Validators.required]),
  idNumber: new FormControl('', customerIdNumber),
  phone: new FormControl('', customerPhone),
  address: new FormControl('', [Validators.required]),
  status: new FormControl('', [Validators.required])
});
  id: number;
  customerTypeList: CustomerTypeI[] = [];

  constructor(private customerTypeService: CustomerTypeService,
              private  fb: FormBuilder,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toast: ToastrService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getCustomer(this.id);
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerTypeService.getAll().subscribe((next: CustomerTypeI[]) => {this.customerTypeList = next; });
  }

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      console.log(customer);
      this.formEdit = new FormGroup({
        id: new FormControl(customer.id, [Validators.required]),
        name: new FormControl(customer.name, customerName),
        birthday: new FormControl(customer.birthday, checkBirthDay),
        email: new FormControl(customer.email, [Validators.required, Validators.email]),
        gender: new FormControl(customer.gender, [Validators.required]),
        customerTypeI: new FormControl(customer.customerTypeI.id, [Validators.required]),
        idNumber: new FormControl(customer.idNumber, ),
        phone: new FormControl(customer.phone, customerPhone),
        address: new FormControl(customer.address, [Validators.required]),
        status: new FormControl(customer.status, [Validators.required])
      });
      console.log(this.formEdit.value);
    });
  }

  updateProduct(id: number) {
    const customer = this.formEdit.value;
    this.customerService.update(id, customer).subscribe(() => {
      this.router.navigate(['/customer/list']);
      this.toast.success('Create Customer success !');
    });
  }
}

function customerName(formControl: FormControl) {
  if (formControl.value === '') {
    return {name: true, message: 'Name is required'};
  } else if (!formControl.value.match('^[A-Z](?:\'[A-Z])*[a-z]+(?: [A-Z](?:\'[A-Z])*[a-z]+)*$')) {
    return {name: true, message: 'Wrong Format'};
  } else {
    return null;
  }
}

function customerPhone(formControl: FormControl) {
  if (formControl.value === '') {
    return {phone: true, message: 'Phone is required !'};
  } else if (!formControl.value.match('^(090)[0-9]{7}|(091)[0-9]{7}|(\\(84\\)\\+90)[0-9]{7}|(\\(84\\)\\+91)[0-9]{7}$')) {
    return {phone: true, message: 'Wrong Format !'};
  } else {
    return null;
  }
}

function customerIdNumber(formControl: FormControl) {
  if (formControl.value.length === '') {
    return {idNumber: true, message: 'ID Number is required !'};
  } else if (!formControl.value.match('^([0-9]{9})|([0-9]{12})$')) {
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


